import { FastifyInstance } from "fastify";
import z from "zod";
import { voting } from "../../utils/voting-pub-sub";

export async function pollResults(app:FastifyInstance){
	app.get('/polls/:pollId/results', { websocket: true }, ( connection, request ) => {
		const getPollParams= z.object({
			pollId: z.string().uuid(),
		})
		
		const { pollId } = getPollParams.parse(request.params)

		// Inscrever apenas nas mensagens publicadas no canal com o id da enquete (`pollId`)
		voting.subscribe(pollId, (message) => {
			connection.socket.send(JSON.stringify(message));
		})
	});
}
// Pub/Sub - Publish 

// toda vez que acontecer algo tem que fazer isso
// pattern pra eventos

// pub  /  subscribe
// "1" => 1, 2, 3, 4, 5