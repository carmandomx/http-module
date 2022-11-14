const { Agent, ClientRequest, Server, ServerResponse, IncomingMessage,  createServer} = require('http');
const { hostname } = require('os');
// const url = require('url');
const PORT = 5000;
const HOSTNAME = '127.0.0.1';
const BACKLOG = null;
const USERS_DOMAIN = '/users';
// console.log(Agent, ClientRequest, Server); 

const DB = [
    {
        id: 1,
        name: "Jane",
        username: "jane143",
        age: 25,
        gender: "female",
        dob: "1991-11-05"
    },
    {
        id: 2,
        name: "John",
        username: "john143",
        age: 31,
        gender: "male",
        dob: "1986-11-05"
    }
]


const server = createServer((req, res) => {
    
    const { url, method, headers  } = req;
    const urlParsed = new URL(`localhost:${PORT}${url}`);
    const userId = urlParsed.pathname.split('/')[2];
    console.log(urlParsed)
    console.log( `[${method}] - ${url}`)

    if (url === `${USERS_DOMAIN}/${userId}` && method === 'GET') {

        res.setHeader('Content-Type', 'application/json');
        return res.end(JSON.stringify(DB[Number(userId) - 1]))


    }


    if (url === USERS_DOMAIN && method === 'GET') {
        console.log('Mi ptecion a /users ocurrio')

        res.setHeader('Content-Type', 'application/json');
        return res.end(JSON.stringify(DB))
    }

    res.setHeader('Content-Type', 'text/html');
    res.statusCode = 404
    res.write('<html>')
    res.write('<h1> Resource not found :(! </h1> ')
    res.write('</html>')
    return res.end()

})



server.listen(PORT, 'localhost', () => {
    console.log(`Server is up and running... ${HOSTNAME}:${PORT}`);
})

// console.log(server)

// [GET] /users/:id for ex. /users/1
/*
    {
        "id": 1,
        "name": "Jane",
        "username": "jane143",
        "age": 25,
        "gender": "female",
        dob: "1991-11-05"
    }
*/
