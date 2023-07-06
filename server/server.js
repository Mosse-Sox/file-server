const net = require("net");

const server = net.createServer();

server.on("connection", (c) => {
  console.log("New client connected!");
  c.write("Hello there, what file are you looking for?");

  c.setEncoding("utf-8");
  c.on("data", (d) => {
    console.log('Message from client: ', d);
  });

});

server.listen(3000, () => {
  console.log('Sever listening on port 3000!');
});


