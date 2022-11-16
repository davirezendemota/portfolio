import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export default async function handler(req, res) {

  const { method, body } = req;

  if (method === 'POST') {

    const { name, email, password } = body

    var data = await prisma.user.create({
      data: {
        name: name,
        email: email,
        password: password
      }
    })

    return res.status(200).json(data)

  } else if (method === 'GET') {

    const users = await prisma.user.findMany()

    return res.status(200).json({
      data: users
    })

  }

  return res.status(400).json({ message: 'Route not found' })
}