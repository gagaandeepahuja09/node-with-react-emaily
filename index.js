const express = require('express');
const app = express();

//Route Handler
app.get('/', (req, res) => {
	res.send({ aurBhai: 'kaisaHai' });
});

// Dynamic Port Binding
const PORT = process.env.PORT || 5000;
app.listen(PORT);