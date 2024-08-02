const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/socialNetworkDB', {
  // Remove useNewUrlParser and useUnifiedTopology as they are deprecated
});

mongoose.connection.on('connected', () => {
  console.log('Mongoose connected to MongoDB');
});

mongoose.connection.on('error', (err) => {
  console.error(`Mongoose connection error: ${err}`);
});

mongoose.connection.on('disconnected', () => {
  console.log('Mongoose disconnected');
});

module.exports = mongoose.connection;