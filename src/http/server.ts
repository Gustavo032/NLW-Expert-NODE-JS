import fastify from 'fastify'
import { z } from 'zod'
import { prisma } from '../lib/prisma'
import { createPoll } from '../routes/create-poll'
import { getPoll } from '../routes/get-poll'
import { voteOnPoll } from '../routes/vote-on-poll'
import cookie from '@fastify/cookie'
import websocket from '@fastify/websocket'
import { pollResults } from './ws/pull-results'

const app = fastify()

app.register(websocket)
app.register(cookie,{
	secret: "pokas´-=[xcm90=l1´po=l;234.=-1l;=2[~e/", // for cookies signature
  hook: 'onRequest', // set to false to disable cookie autoparsing or set autoparsing on any of the following hooks: 'onRequest', 'preParsing', 'preHandler', 'preValidation'. default: 'onRequest'
})



app.register(createPoll)
app.register(getPoll)
app.register(voteOnPoll)

app.register(pollResults)

app.listen({port: 3333}).then(() => {
	console.log('listening on port 3333')
})