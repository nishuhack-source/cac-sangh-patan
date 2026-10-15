import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    // Check if user is authenticated by verifying the auth_token cookie
    const cookies = req.headers.cookie || '';
    const hasAuthCookie = cookies.includes('auth_token=');
    
    if (hasAuthCookie) {
      // In production, verify JWT token from cookie
      // For now, return authenticated status
      res.status(200).json({ 
        authenticated: true, 
        user: { 
          email: 'admin@cacsanghpatan.org',
          role: 'admin' 
        } 
      });
    } else {
      res.status(401).json({ authenticated: false, message: 'Not authenticated' });
    }
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
