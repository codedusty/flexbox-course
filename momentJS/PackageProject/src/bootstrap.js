import moment from 'moment';

const birthday = moment('2002-08-10', 'YYYY-MM-DD');

console.log(birthday.format('MMM Do YYYY'));