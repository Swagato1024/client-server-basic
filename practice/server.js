const net = require("node:net");

const server = net.createServer();

server.on("connection", (socket) => {
  console.log("From Server: connectionn build");
  socket.write("data from client");

  socket.setEncoding("utf-8");

  socket.on("data", (data) => {
    console.log(data);
  });

  socket.on("end", () => {
    console.log("connection ended");
  });
});

server.listen(8000, () => console.log("listening"));
