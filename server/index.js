const { createServer } = require('./create');

const PORT = process.env.PORT || 3000;

const app = createServer();

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
})