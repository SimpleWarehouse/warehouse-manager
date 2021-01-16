const morgan = require('morgan'); //middleware de logare
const moment = require('moment'); //middleware de logare
const mongoose = require('mongoose');

require('dotenv').config()

const ProdusModel = mongoose.model('Produs');

// create a SMTP transport with gmail credentials
const smtpTransport = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: process.env.GMAIL_USERNAME,
        pass: process.env.GMAIL_PASSWORD
    }
});

// statistics function
const calculateStatistics = async () => {
    const statistic = await ProdusModel
        .find()
        .filter(p => {
            weight: p.weight;
            price: p.price;
        }).reduce((acc, value) => {
            weight: acc.weight + value.weight;
            price: acc.price + acc.weight;
        });

    const today = moment.unix(moment.now()).format('MMMM Do YYYY');
    await this.smtp.sendMail({
        to: process.env.STATISTICS_ADMIN_EMAIL,
        subject: `Statistics for ${today}`,
        html: `Today, ${today}, we have in our warehouse ${statistic.weight} of products with value of ${statistic.price}.`
    })
};

// schedule the task to update subscribers
cron.schedule('0 1 * * *', () => {
    calculateStatistics();
});