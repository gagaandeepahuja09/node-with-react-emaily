const express = require('express');
const mongoose = require('mongoose');
const keys = require('./config/keys');
const cookieSession = require('cookie-session');
const passport = require('passport');

require('./models/User');
require('./services/passport');

mongoose.connect(keys.mongoURI);
const app = express();

app.use(
	cookieSession({
		maxAge: 1000 * 60 * 60 * 24 * 30,
		keys: [keys.cookieKey]
	})
);

app.use(passport.initialize());
app.use(passport.session());

require('./routes/authRoutes')(app);

/*//Route Handler
app.get('/', (req, res) => {
	res.send({ aurBhai: 'kaisaHai' });
});*/

// Dynamic Port Binding
const PORT = process.env.PORT || 5000;
app.listen(PORT);