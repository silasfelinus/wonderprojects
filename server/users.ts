// server/api/users.ts
import { PrismaClient } from '@prisma/client'
import { IncomingMessage, ServerResponse } from 'http'

const prisma = new PrismaClient()

export default async (req: IncomingMessage, res: ServerResponse) => {
  if (req.method === 'GET') {
    const users = await prisma.users.findMany()
    res.writeHead(200, { 'Content-Type': 'application/json' })
    res.end(JSON.stringify(users))
  } else {
    res.writeHead(405, { 'Content-Type': 'application/json' })
    res.end(JSON.stringify({ message: 'Method not allowed' }))
  }
}
