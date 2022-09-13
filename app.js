const app = require( "express" ) ( ) ;
const PORT = process.env.PORT || 2535;
app.get( "", (req, res) => {

res.send( "hi guys this is suma from it 3rd year");
});
app.listen (PORT, ( ) => {
console.log('app up at port ${PORT}');
});
