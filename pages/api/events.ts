import type { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case 'GET':
      try {
        const events = await prisma.event.findMany({
          where: { published: true },
          orderBy: { date: 'asc' },
        });
        res.status(200).json(events);
      } catch (error) {
        res.status(500).json({ error: 'Failed to fetch events' });
      }
      break;

    case 'POST':
      {
        const { title, slug, date, endTime, venue, description, image, status, published } = req.body;
        if (!title || !slug || !date) {
          return res.status(400).json({ error: 'Title, slug and date are required' });
        }

        try {
          const newEvent = await prisma.event.create({
            data: {
              title,
              slug,
              date: new Date(date),
              endTime: endTime ? new Date(endTime) : null,
              venue,
              description,
              image,
              status: status || 'upcoming',
              published: published ?? true,
            },
          });
          res.status(201).json(newEvent);
        } catch (error) {
          res.status(500).json({ error: 'Failed to create event' });
        }
      }
      break;

    case 'PUT':
      {
        const { id, title, slug, date, endTime, venue, description, image, status, published } = req.body;
        if (!id || !title || !slug || !date) {
          return res.status(400).json({ error: 'ID, title, slug and date are required' });
        }

        try {
          const updatedEvent = await prisma.event.update({
            where: { id },
            data: {
              title,
              slug,
              date: new Date(date),
              endTime: endTime ? new Date(endTime) : null,
              venue,
              description,
              image,
              status,
              published,
            },
          });
          res.status(200).json(updatedEvent);
        } catch (error) {
          res.status(500).json({ error: 'Failed to update event' });
        }
      }
      break;

    case 'DELETE':
      {
        const { id } = req.body;
        if (!id) {
          return res.status(400).json({ error: 'ID is required' });
        }

        try {
          await prisma.event.delete({ where: { id } });
          res.status(204).end();
        } catch (error) {
          res.status(500).json({ error: 'Failed to delete event' });
        }
      }
      break;

    default:
      res.setHeader('Allow', ['GET', 'POST', 'PUT', 'DELETE']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
