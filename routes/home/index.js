const app = require('express');
const router = app.Router();
 
router.use(function (req, res, next) {
	console.log('Time:', Date.now());
	next();
});

router.get('/', function (req, res) {
	res.send('Hello world!')
});
 
module.exports = router;