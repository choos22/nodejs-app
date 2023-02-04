const mongoose = require('mongoose');

async function connect() {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/choos_dev',{
            // useNewUrlParser: true,
            // useUnifiedTopology: true
        });
        console.log('conec ok!!!!!!!!!!!!!!')
    } catch (error) {
        console.log('chua dc')
    }
}

module.exports= {connect}