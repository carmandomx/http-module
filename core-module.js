const { Agent, ClientRequest, Server, ServerResponse, IncomingMessage,  createServer} = require('http');
const PORT = 5000;
const HOSTNAME = '127.0.0.1';
const BACKLOG = null;
// console.log(Agent, ClientRequest, Server); 

const server = createServer((req, res) => {
    res.end('Hello world!!')
})


server.listen(PORT, 'localhost', () => {
    console.log(`Server is up and running... ${HOSTNAME}:${PORT}`);
})

// console.log(server)

