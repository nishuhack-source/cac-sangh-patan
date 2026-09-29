import type { NextApiRequest, NextApiResponse } from 'next';

interface Notice {
  id: number;
  title: string;
  date: string;
  description: string | null;
  important: boolean;
  published: boolean;
  pdfUrl: string | null;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    // Hardcoded data for now - will be database-driven later
    const notices: Notice[] = [
      {
        id: 1,
        title: 'प्रथम सूचना',
        date: new Date().toISOString().split('T')[0],
        description: 'यह एक नमूना सूचना है।',
        important: true,
        published: true,
        pdfUrl: null,
      },
    ];
    res.status(200).json(notices);
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
