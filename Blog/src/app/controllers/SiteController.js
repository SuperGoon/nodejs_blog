const Courses = require('../models/Courses');

class SiteController {
    //GET Home
    index(req, res, next) {
        //Tương tác với Model(db)
        Courses.find({}, function (err, courses) {
            if (!err) {
                res.json(courses);
            } else {
                next(err);
            }
        });

        Courses.find({})
            .then((courses) => res.json(courses))
            .catch(next);

        //res.render('home');
    }

    //GET Search
    search(req, res) {
        res.render('search');
    }
}

module.exports = new SiteController(); //xuất ra ngoài bằng cách require
