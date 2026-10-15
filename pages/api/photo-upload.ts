import type { NextApiRequest, NextApiResponse } from "next";
import fs from "fs";
import path from "path";

export const config = {
  api: {
    bodyParser: false,
  },
};

async function saveFile(file: Buffer, filename: string) {
  const uploadDir = path.join(process.cwd(), "public/uploads");
  await fs.promises.mkdir(uploadDir, { recursive: true });
  const filePath = path.join(uploadDir, filename);
  await fs.promises.writeFile(filePath, file);
  return filename;
}

import { verify } from 'jsonwebtoken';

const SECRET = process.env.JWT_SECRET;

function isValidMimeType(buffer: Buffer) {
  // Simple check for jpeg and png signature
  if (buffer.length < 4) return false;
  if (buffer[0] === 0xFF && buffer[1] === 0xD8 && buffer[2] === 0xFF) return true; // JPG
  if (buffer.slice(0, 4).equals(Buffer.from([0x89, 0x50, 0x4E, 0x47]))) return true; // PNG
  return false;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    res.setHeader("Allow", ["POST"]);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }

  try {
    // Check auth JWT
    const token = req.cookies['auth_token'];
    if (!token || !SECRET) return res.status(401).json({ error: 'Unauthorized' });
    try {
      verify(token, SECRET);
    } catch {
      return res.status(401).json({ error: 'Unauthorized' });
    }

    const chunks: Uint8Array[] = [];
    for await (const chunk of req) {
      chunks.push(chunk);
    }
    const fileBuffer = Buffer.concat(chunks);

    // Validate file size
    const MAX_SIZE = 5 * 1024 * 1024;
    if (fileBuffer.length > MAX_SIZE) {
      return res.status(400).json({ error: "File too large" });
    }

    // Validate MIME type signature
    if (!isValidMimeType(fileBuffer)) {
      return res.status(400).json({ error: "Unsupported file type" });
    }

    const filename = `upload-${Date.now()}.bin`;
    await saveFile(fileBuffer, filename);

    return res.status(200).json({ message: "File uploaded successfully", filename });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "File upload failed" });
  }
}
