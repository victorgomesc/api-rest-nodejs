import { FastifyInstance } from "fastify"
import { z } from 'zod'
import { randomUUID} from 'node:crypto'
import { knex } from "../database"
import { checkSessionIdExixts } from "../middlewares/check-session-id-exixts"

export async function transactionsRoutes(app: FastifyInstance){

    app.get('/', 
    {
        preHandler: [checkSessionIdExixts]
    },
     async (request) => {
        const { sessionId } = request.cookies

        const transactions = await knex('transactions')
        .where('session_id', sessionId)
        .select()

        return { transactions }
    })

    app.get('/:id', 
    {
        preHandler: [checkSessionIdExixts]
    }, 
    async (request) => {
        const getTransactionParamsSchema = z.object({
            id: z.string().uuid(),
        })

        const { id } = getTransactionParamsSchema.parse(request.params)

        const { sessionId } = request.cookies

        const transaction = await knex('transactions')
        .where({
            session_id: sessionId,
            id,
        })
        .first()

        return { transaction }
    })

    app.get('/summary', 
    {
        preHandler: [checkSessionIdExixts]
    }, 
    async (request) => {
        const { sessionId } = request.cookies

        const summary = await knex('trnasactions')
        .where('session_id', sessionId)
        .sum('amount', { as: 'amount' })
        .first()

        return { summary }
    })

    app.post('/', 
    {
        preHandler: [checkSessionIdExixts]
    }, 
    async (request, reply) => {
        const createTransactionBodySchema = z.object({
            title: z.string(),
            amount: z.number(),
            type: z.enum(['credit', 'debit']),
        })

        const { title, amount, type } = createTransactionBodySchema.parse(
            request.body,
        )

     await knex('transactions')
        .insert({
            id: randomUUID(),
            title,
            amount: type == 'credit' ? amount : amount * -1,
        })
    
        return reply.status(201).send()
    })
}