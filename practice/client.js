const net = require("net");

//client is an instance of socket
const client = net.createConnection({ port: 8000 });

client.setEncoding("utf8");

client.on("connect", () => {
  client.write("client connected");

  client.on("data", (data) => {
    console.log(data);
    client.end();
    // setInterval(() => client.write("Hey Hey\n"), 1000);
  });
});


