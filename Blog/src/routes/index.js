const newRouter = require('./news');
const siteRouter = require('./site');
const meRouter = require('./me');
const coursesRouter = require('./courses');

function route(app) {
    app.use('/news', newRouter);
    app.use('/me', meRouter);
    app.use('/courses', coursesRouter);
    app.use('/', siteRouter);
}

module.exports = route;
