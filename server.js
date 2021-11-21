var express = require('express');
var app = express();
// const app = require('./app.js');
var bodyParser = require('body-parser');
// mongoDB 장렬히 실패
// var mongoose = require('mongoose');
// var User = require('./models');

// mongoose.connect('mongodb://localhost/sample-server');

app.use(express.static('public'));
// 보안 관련 (객체 형태로 전달된 데이터내의 중첩된 객체를 허용하면 true)
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/', require('./routes/home'));
app.use('/user', require('./routes/user'));

app.listen(3000, function (){
	console.log('Example app listening on port 3000!')
	console.log('To http://localhost:3000/')
	console.log('Test html To http://localhost:3000/test.html')
	// console.log('http://localhost:3000/user/search?name=John')
});
