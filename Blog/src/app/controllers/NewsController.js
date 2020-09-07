class NewsController {

    //GET news
    index(req, res) {
        res.render('news')
    }

    // [GET] /news/:slug
    show(req, res) {
        res.send('New Test')
    }

}

module.exports = new NewsController //xuất ra ngoài bằng cách require