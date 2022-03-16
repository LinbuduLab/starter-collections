import { PrismaClient } from '@prisma/client';

(async () => {
  const prisma = new PrismaClient();

  await prisma.demo.create({
    data: {
      id: '599',
      name: 'linbudu',
    },
  });
})();
