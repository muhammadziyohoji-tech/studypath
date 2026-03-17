import { PrismaClient } from '@prisma/client'

const globalForPrisma = global as unknown as { prisma: PrismaClient }

export const prisma =
  globalForPrisma.prisma ||
  new PrismaClient() // <-- Ichini BOM-BO'SH qoldiramiz, qizil chiziq yo'qoladi!

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma