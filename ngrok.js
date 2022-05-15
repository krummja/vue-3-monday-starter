require('dotenv').config();
const ngrok = require("ngrok");

const PORT = process.env.PORT || 8080;

(async () => {
  const url = await ngrok.connect({
    addr: PORT,
  });
  console.log(`ngrok started on ${url}`);
})();
