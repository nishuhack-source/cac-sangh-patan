import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  // Clear existing data
  await prisma.officeBearer.deleteMany();
  await prisma.notice.deleteMany();

  // Insert office bearers - all active positions verified
  const bearerData = [
    { designation: 'संरक्षक', name: 'विकासखंड शिक्षा अधिकारी, पाटन', mobile: null, photo: null, email: null, displayOrder: 1, active: true },
    { designation: 'ब्लॉक अध्यक्ष', name: 'श्री महेंद्र बहादुर', mobile: '+91 9039790762', photo: null, email: null, displayOrder: 2, active: true },
    { designation: 'उपाध्यक्ष', name: 'श्री अशोक सिन्हा', mobile: null, photo: null, email: null, displayOrder: 3, active: true },
    { designation: 'सचिव', name: 'श्री टिकेश्वर गजपाल', mobile: null, photo: null, email: null, displayOrder: 4, active: true },
    { designation: 'सहसचिव', name: 'श्रीमती योगिता साहू', mobile: null, photo: null, email: null, displayOrder: 5, active: true },
    { designation: 'कोषाध्यक्ष', name: 'श्री हरिशंकर देवांगन', mobile: null, photo: null, email: null, displayOrder: 6, active: true },
  ];

  for (const bearer of bearerData) {
    await prisma.officeBearer.create({
      data: bearer,
    });
  }

  // Insert sample notice
  await prisma.notice.create({
    data: {
      title: 'प्रथम सूचना',
      slug: 'first-notice',
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
