const Course = require('../models/Course');
const { mongooseToObject } = require('../../until/mongoose');

class CourseController {
    //GET Search /courses/:slug
    show(req, res, next) {
        Course.findOne({ slug: req.params.slug })
            .then((course) => {
                res.render('courses/show', {
                    course: mongooseToObject(course),
                });
            })
            .catch(next);
    }
}

module.exports = new CourseController(); //xuất ra ngoài bằng cách require
