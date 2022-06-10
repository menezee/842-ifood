const http = require('http');

function getBody(req) {
  return new Promise(resolve => {
    let body = '';
    req.on('data', chunk => {
      body += chunk;
    });

    req.on('end', () => {
      const bodyObj = JSON.parse(body);
      resolve(bodyObj);
    });
  });
}

const server = http.createServer(async (req, res) => {
  const body = await getBody(req);
  res.end(`oi usando promises, ${body.name}`);
});

server.listen(8080);
