module.exports = function(app) {
  app.get('/', (req, res) => {
    res.send('Hello from the routes file!: Curso de Node.js no IFSULMINAS - 2025 - Com Nodemon no ar!!!');
  });

  app.post('/data', (req, res) => {
    res.json({ message: 'Data received successfully!' });
  });

  // More routes can be defined here
};