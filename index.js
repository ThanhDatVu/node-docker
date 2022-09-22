const Express = require('express');

const app = Express();

app.get('/', (req, res) => {
  res.send('🚀 HAHsdaAHA');
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
