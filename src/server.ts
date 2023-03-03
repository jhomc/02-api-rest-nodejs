import fastify from 'fastify'
import crypto from 'node:crypto'
import { knex } from './database'

const app = fastify()

app.get('/hello', async (req, res) => {
  const transaction = await knex('transactions').insert({
    id: crypto.randomUUID(),
    title: 'Teste',
    amount: 1000
  }).returning('*')

  return transaction
})

app.listen({
  port: 3333
}).then(() => {
  console.log('listening on port 3333')
})