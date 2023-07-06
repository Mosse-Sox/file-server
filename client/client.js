const net = require('net');

const connect = () => {
  const conn = net.createConnection({
    host: 'localhost',
    port: 3000,
  });
  
  conn.on('connect', () => {
    conn.write('Hello from client!');
  });
  
  conn.setEncoding('utf8');
  
  conn.on('data', (data) => {
    console.log('Server says: ', data);
  });

  return conn;
};

module.exports = connect; 