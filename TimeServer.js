const net = require('net');

function zeroPad(number) {
  return number < 10 ? '0' + number : number;
}

const server = net.createServer(socket => {
  const now = new Date();
  const formattedDate = `${now.getFullYear()}-${zeroPad(now.getMonth() + 1)}-${zeroPad(now.getDate())} ${zeroPad(now.getHours())}:${zeroPad(now.getMinutes())}\n`;

  socket.end(formattedDate);
});

server.listen(Number(process.argv[2]));
