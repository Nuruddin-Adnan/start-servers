const concurrently = require("concurrently");

const commands = [
  {
    command: "cd ../express-mongoose-starter-pack && yarn start",
    name: "backend-server",
    prefixColor: "bgBlue.bold",
  },
  {
    command: "cd ../api-gateway && yarn start",
    name: "api-gateway",
    prefixColor: "bgGreen.bold",
  },
  {
    command: "cd ../my-next-app && yarn start",
    name: "my-next-app",
    prefixColor: "bgMagenta.bold",
  },
];

concurrently(
  commands,
  {
    restartTries: 3,
    prefix: "name",
  },
  (err) => {
    if (err) {
      console.error(err);
    }
  }
);
