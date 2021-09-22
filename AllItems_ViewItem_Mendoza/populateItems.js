const mongoose = require('mongoose');

const Item = require('./models/ItemModel.js');

mongoose.connect('mongodb://localhost/item-db');

Item.create({
    name: 'Nissin Wafer Choco',
    size: '15 grams',
    date: new Date('10/00/2021'),
    buy: 10,
    price: 15
}, (error, item) =>
{
    console.log(error, item)
})

Item.create({
    name: 'Nissin Wafer Choco',
    size: '15 grams',
    date: new Date('10/01/2021'),
    buy: 10,
    price: 15
}, (error, item) =>
{
    console.log(error, item)
})

Item.create({
    name: 'Nissin Wafer Choco',
    size: '15 grams',
    date: new Date('10/02/2021'),
    buy: 10,
    price: 15
}, (error, item) =>
{
    console.log(error, item)
})

Item.create({
    name: 'Nissin Wafer Choco',
    size: '15 grams',
    date: new Date('10/13/2021'),
    buy: 10,
    price: 15
}, (error, item) =>
{
    console.log(error, item)
})

