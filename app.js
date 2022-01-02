const express = require('express');

const app = express();


app.use(express.json());

const PORT = process.env.NODEJS_PORT || 5000;

app.use('/items', require('./routes/itemRouter'));

app.listen(PORT, () => {
    require('./config/database');
    console.log(`Server đang chạy với PORT ${PORT}`);
});