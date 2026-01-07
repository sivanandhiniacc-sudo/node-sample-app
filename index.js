const http = require("http");

const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  if (req.url === "/health") {
    res.writeHead(200, { "Content-Type": "application/json" });
    return res.end(JSON.stringify({ status: "ok" }));
  }

  res.writeHead(200);
  res.end("Hello from Node workflow test 🚀");
});

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
