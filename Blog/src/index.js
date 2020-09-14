const path = require('path');
const express = require('express'); //require đi vào node module và lưu vào
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const methodOverride = require('method-override');

const route = require('./routes');

const db = require('./config/db');
db.connect(); //Connect to DB

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

app.use(methodOverride('_method'));

//HTTP logger
app.use(morgan('combined'));

// Template engine
app.engine(
    'hbs',
    handlebars({
        extname: '.hbs',
        helpers: {
            sum: (a, b) => a + b,
        },
    }),
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));

//route init
route(app);

// lắng nghe cổng port được define ở trên
app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});
