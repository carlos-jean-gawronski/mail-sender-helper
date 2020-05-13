const functions = {
  sender: require("./src/sender"),
};

async function start() {
  await functions.sender();
}

start();
