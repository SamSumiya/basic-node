import http, { IncomingMessage, ServerResponse } from 'node:http'

const PORT = Number(process.env.PORT) || 8000 

const server = http.createServer(
    (request:IncomingMessage, response:ServerResponse) => {
        console.log(request.method)
        response.statusCode = 200
        response.setHeader("Content-Type", "text/plain")
        response.end('Hi TypeScript!\n')
})

server.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`)
})
