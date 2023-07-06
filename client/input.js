// i think readline should go somewhere around here to maybe read
// a whole line from someone and parse that. 

const setupInput = (conn) => {
  const connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf-8");
  stdin.resume();
  stdin.on("data", (data) => handleUserInput(data, connection));
  return stdin;
};

const handleUserInput = (d, c) => {

  console.log(d);

  if(d === '\u0003') {
    process.exit();
  }
}

module.exports = setupInput;