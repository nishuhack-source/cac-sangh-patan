import type { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';
import { sign } from 'jsonwebtoken';

const prisma = new PrismaClient();
import { serialize } from 'cookie';

const SECRET = process.env.JWT_SECRET;
const TOKEN_EXPIRY_SECONDS = 3600; // 1 hour

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }

  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ message: 'Email and password are required' });
    }

    const adminUser = await prisma.adminUser.findUnique({ where: { email } });
    if (!adminUser || !adminUser.active) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    const validPassword = await bcrypt.compare(password, adminUser.password);
    if (!validPassword) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    if (!SECRET) {
      console.error('JWT_SECRET is not defined in environment');
      return res.status(500).json({ message: 'Internal server error' });
    }

    const token = sign({ userId: adminUser.id, role: adminUser.role }, SECRET, { expiresIn: TOKEN_EXPIRY_SECONDS });

    // Set HttpOnly cookie with the token
    const cookie = serialize('auth_token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      maxAge: TOKEN_EXPIRY_SECONDS,
      path: '/',
      sameSite: 'lax',
    });

    res.setHeader('Set-Cookie', cookie);
    res.status(200).json({ message: 'Login successful' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
}

