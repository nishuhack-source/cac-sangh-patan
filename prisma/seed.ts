import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  // Clear existing data
  await prisma.officeBearer.deleteMany();
  await prisma.notice.deleteMany();

  // Insert office bearers (only active positions, NO secretary)
  await prisma.officeBearer.createMany({
    data: [
      { designation: 'संरक्षक', name: 'विकासखंड शिक्षा अधिकारी, पाटन', mobile: null, photoUrl: null, displayOrder: 1, active: true },
      { designation: 'ब्लॉक अध्यक्ष', name: 'श्री महेंद्र बहादुर', mobile: '9039790762', photoUrl: null, displayOrder: 2, active: true },
      { designation: 'उपाध्यक्ष', name: 'श्री अशोक सिन्हा', mobile: null, photoUrl: null, displayOrder: 3, active: true },
      { designation: 'कोषाध्यक्ष', name: 'श्री हरिशंकर देवांगन', mobile: null, photoUrl: null, displayOrder: 4, active: true },
      // Secretary position kept inactive for future admin panel assignment
      { designation: 'सचिव', name: '', mobile: null, photoUrl: null, displayOrder: 5, active: false },
    ],
  });

  // Insert sample notice
  await prisma.notice.create({
    data: {
      title: 'प्रथम सूचना',
      date: new Date(),
      description: 'यह एक नमूना सूचना है।',
      important: true,
      published: true,
      pdfUrl: null,
    },
  });

  console.log('Seed data inserted successfully');
}

main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
