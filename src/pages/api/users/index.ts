import { PrismaClient } from "@prisma/client"
import { NextApiRequest, NextApiResponse } from "next"

const prisma = new PrismaClient()

export default async function handler(req: NextApiRequest, res: NextApiResponse) {

  const { method, body } = req;

  
  if (method === 'POST') {
    
    var data = await prisma.user.create({
      data: {
        name: body.name,
        email: body.email,
      }
    })

    return res.json(data)
  }

  if (method === 'GET') {

    const users = await prisma.user.findMany()

    return res.json({
      data: users
    })

  }

}