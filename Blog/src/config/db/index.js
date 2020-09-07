const mongoose = require('mongoose');

async function connect() {
    //Xem lại async await
    try {
        await mongoose.connect('mongodb://localhost:27017/super_goon_dev', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('connected');
    } catch (error) {
        console.log('false');
    }
}

module.exports = { connect };
