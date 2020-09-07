class SiteController {

    //GET Home
    index(req, res) {
        res.render('home')
    }

    //GET Search
    search(req, res) {
        res.render('search')
    }

}

module.exports = new SiteController //xuất ra ngoài bằng cách require