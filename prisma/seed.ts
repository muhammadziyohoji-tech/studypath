import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log('--- Seed jarayoni boshlandi ---')

  // Avval eski ma'lumotlarni o'chirib tashlaymiz (toza boshlash uchun)
  await prisma.university.deleteMany()

  const universities = [
    {
      name: "ETH Zurich",
      country: "Switzerland",
      rank: 7,
      description: "one of the best university in the Europe",
    },
    {
      name: "MIT",
      country: "USA",
      rank: 1,
      description: "one of the best university in the world",
    },
    // Shu yerga qolgan 300 tasini qo'shasiz...
  ]

  for (const uni of universities) {
    await prisma.university.create({
      data: uni,
    })
  }

  console.log('--- seed has finished successfully! ---')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })