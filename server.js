import http from 'http';


const PORT = 3000;

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Curso de Node.js no IFSULMINAS - 2025 - Com Nodemon no ar!!!");
});

server.listen(PORT, () => {
  console.log("servidor escutando!");
});