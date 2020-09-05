const path = require('path')
const express = require('express'); //require đi vào node module và lưu vào
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const app = express() //function đc xây dựng sẵn trong thư viện express
    // Trả về 1 đối tượng đại diện cho ứng dụng nodejs (app) sử dụng tới khi hoàn thành

const port = 3000 //define muốn run website ở port nào

app.use(express.static(path.join(__dirname, 'public')))

//HTTP logger
app.use(morgan('combined'))

// Template engine
app.engine('hb', handlebars({
    extname: '.hb'
}));
app.set('view engine', 'hb');
app.set('views', path.join(__dirname, 'resources/views'))

app.get('/', (req, res) => { //Định nghĩa route(tuyến đường, dường dẫn)
    res.render('home')
})

app.get('/news', (req, res) => {
    res.render('news')
})

// lắng nghe cổng port được define ở trên
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})