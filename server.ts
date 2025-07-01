import http, { IncomingMessage, ServerResponse } from 'node:http'
import { dbAsync } from './db'
const PORT = Number(process.env.PORT) || 8000 


const server = http.createServer(
    (request:IncomingMessage, response:ServerResponse) => {
        console.log(request.method)
        response.statusCode = 200
        response.setHeader("Content-Type", "application/json")
        dbAsync()
            .then(data => response.end(JSON.stringify(data)))
            .catch(err => {
                console.error(err)
                response.statusCode = 500
                response.end('Internal Server Error')  
            })
        // response.end('Hi TypeScript v2!\n')
})

server.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`)
})
