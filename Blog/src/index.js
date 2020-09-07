const path = require('path');
const express = require('express'); //require đi vào node module và lưu vào
const morgan = require('morgan');
const handlebars = require('express-handlebars');

const route = require('./routes');
const db = require('./config/db');

//Connect to DB
db.connect();

const app = express(); //function đc xây dựng sẵn trong thư viện express
// Trả về 1 đối tượng đại diện cho ứng dụng nodejs (app) sử dụng tới khi hoàn thành
const port = 3000; //define muốn run website ở port nào
app.use(express.static(path.join(__dirname, 'public')));

app.use(
    express.urlencoded({
        extended: true,
    }),
); //tạo middleware(trung gian) cho req.body
app.use(express.json());

//HTTP logger
app.use(morgan('combined'));

// Template engine
app.engine(
    'handlebars',
    handlebars({
        extname: '.handlebars',
    }),
);
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'resources', 'views'));

//route init
route(app);

// lắng nghe cổng port được define ở trên
app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});
