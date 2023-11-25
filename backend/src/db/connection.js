const mongoose = require('mongoose');

const connect = async () => {
    try {
       return await mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
    } catch (error) {
        console.log('Error connecting to MongoDB', error);
    }
}

exports.connect = connect;