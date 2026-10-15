import type { NextApiRequest, NextApiResponse } from 'next';

interface OfficeBearer {
  id: number;
  designation: string;
  name: string;
  mobile: string | null;
  photoUrl: string | null;
  displayOrder: number;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    // Verified office bearers - all positions filled as per user confirmation
    const bearers: OfficeBearer[] = [
      { id: 1, designation: 'संरक्षक', name: 'विकासखंड शिक्षा अधिकारी, पाटन', mobile: null, photoUrl: null, displayOrder: 1 },
      { id: 2, designation: 'ब्लॉक अध्यक्ष', name: 'श्री महेंद्र बहादुर', mobile: '9039790762', photoUrl: null, displayOrder: 2 },
      { id: 3, designation: 'उपाध्यक्ष', name: 'श्री अशोक सिन्हा', mobile: null, photoUrl: null, displayOrder: 3 },
      { id: 4, designation: 'सचिव', name: 'श्री टिकेश्वर गजपाल', mobile: null, photoUrl: null, displayOrder: 4 },
      { id: 5, designation: 'सहसचिव', name: 'श्रीमती योगिता साहू', mobile: null, photoUrl: null, displayOrder: 5 },
      { id: 6, designation: 'कोषाध्यक्ष', name: 'श्री हरिशंकर देवांगन', mobile: null, photoUrl: null, displayOrder: 6 },
    ];
    res.status(200).json(bearers);
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
