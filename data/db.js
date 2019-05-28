module.exports = function () {
    const mongoose = require('mongoose');
    const databaseName = 'heroku_97j5bhc3';
    var connectionString = 'mongodb://localhost:27017/';
    connectionString += databaseName;
	var heroku = "mongodb://heroku_97j5bhc3:una6la8ed3ilqmdab87m3t19ki@ds131905.mlab.com:31905/heroku_97j5bhc3"
    mongoose.connect(heroku, {useNewUrlParser: true}).then(ret => console.log('connected'));
}
