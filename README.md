# NLW-Expert-NODE-JS
Vamos desenvolver um app backend de enquete com comunicação em tempo real com utilização de Websockets


#RFs (Requisito Funcional) (funcionalidade seca: ex> usuário pode fazer checkin)

	- [] Deve ser possível cadastrar um usuário
	- [] Deve ser possível fazer criar uma nova enquete (POST /polls)
	- [] Deve ser possível visualizar detalhes de uma enquete (GET /polls/:id)
	- [] Deve ser possível criar voto em uma enquete (POST /polls/:id/votes) 
	- [] Deve ser possível monitorar os votos em tempo ao vivo usando PROTOCOLO WS (WebSocket) 
	- 
#RNs (Regras de Negócio) (observações da funcionalidade seca: ex> usuário SÓ pode fazer checkin SE estiver a 10km da unidade)

	- [] Um voto deve estar ligado a uma enquete

#RNFs (requisitos não-funcionais) (requisitos mais tecnicos) (Qual estratégia de paginação, qual banco de dados usar, etc.)

	- [] serão utilizado metodos WS para os resultados ao vivo
	- [] Os dados precisam estar em um banco PostgreSQL
	- [] Os dados de contagem de votos de cada opção pra cada enquete devem estar em um banco Redis (in memory)
	<!-- - [] JWT para fazer autenticação de um usuário -->