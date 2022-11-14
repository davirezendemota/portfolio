import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export default async function handler(req, res) {

  const data = await prisma.user.count()

  res.json({count : data})
}