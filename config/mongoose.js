const mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost:27017/');
mongoose.connect(process.env.MONGO_URL);

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Error in connecting to MongoDB'));

db.once('open', () => {
  console.log('-->Connected to Database :: MongoDB<--');
});

module.export = db;
