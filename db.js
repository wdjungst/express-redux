var mongoose = require( 'mongoose' );
var Schema   = mongoose.Schema;

var Todo = new Schema({
  text : String,
  completed : Boolean
});

mongoose.model( 'Todo', Todo );
mongoose.connect( 'mongodb://localhost/express-todo-redux' );