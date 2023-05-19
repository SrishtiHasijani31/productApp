const express = require('express');
const cors = require('cors');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');

const productRoutes = require('./routes/productRoutes');
const authRoutes = require('./routes/authRoutes');

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'dist')));

app.use('/api', productRoutes);
app.use('/api/auth', authRoutes);

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/src/index.html'));
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
