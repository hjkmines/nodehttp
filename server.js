const http = require('http'); 

const todos = [
  {id: 1, text: 'todo 1'},
  {id: 2, text: 'todo 2'},
  {id: 3, text: 'todo 3'}
]

const server = http.createServer((req, res) => {
  res.statusCode = 404; 

  res.writeHead(200, {
    'Content-Type': 'application/json', 
    'X-Powered-By': 'Node.js'
  })

  let body = [];

  req
   .on('data', chunk => {
    body.push(chunk); 
  })
   .on('end', () => {
    body = Buffer.concat(body).toString(); 
    console.log(body)
  })

  res.end(JSON.stringify({
    sucess: true, 
    data: todos
  })); 
})

const PORT = 5000

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
