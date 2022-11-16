import { PrismaClient } from "@prisma/client"
import { PassThrough } from "stream";

const prisma = new PrismaClient()

export default async function handler(req, res) {

  const { method, query } = req;

  const email = query.credentials[0]
  const password = query.credentials[1]

  if (method === 'GET') {

    const user = await prisma.user.findUnique({
      where: { 
        email: email
      }
    })

    if (user.password === password){
      
      return res.status(200).json({
        data: user
      })
    }
  }

  return res.status(400).json({ message: 'Route not found' })
}