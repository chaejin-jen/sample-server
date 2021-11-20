var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(express.static('public'));
// 보안 관련 (객체 형태로 전달된 데이터내의 중첩된 객체를 허용하면 true)
app.use(bodyParser.urlencoded({ extended: false }));
app.use(function (req, res, next) {
	console.log('Time:', Date.now());
	next();
});

app.get('/', function (req, res) {
	res.send('Hello world!')
});

app.listen(3000, function (){
	console.log('Example app listening on port 3000!')
	console.log('To http://localhost:3000/')
	console.log('Test html To http://localhost:3000/test.html')
});

app.get('/user/:userId', function (req, res) {
	// console.log(req.params.userId + '의 정보를 가져옵니다');
	// TODO 실제로 DB 에서 userId 에 해당하는 사용자 정보를 가져오는 로직 개발
	console.log('데이터 확인', req.query.name);
	// TODO 실제로 DB 데이터를 조회하는 로직 개발
	
	// 검색기능 [GET] http://localhost:3000/user/search?name=John
	var user = {
		userId: 13579,
		name: 'John',
		email: 'yohany_AT_gmail.com',
		company: 'KossLAB'
	};
	// res.send('GET (Read) ');
	// res.send(user);
	res.send({result: users}); //body-parser 쓰면서 바뀐거
});

app.post('/user', function (req, res) {
	console.log('데이터 확인', req.body);
	// TODO 실제로 DB 데이터를 저장하는 로직을 개발해야 함.
	// res.send('POST (Create) ');
	res.send({state: 'OK', data: req.body}); // body-parser 쓰면서 바뀐거
});

app.put('/user/:userId', function (req, res) {
	res.send('PUT (Update) ');
});

app.delete('/user/:userId', function (req, res) {
	res.send('DELETE (Delete) ');
});

