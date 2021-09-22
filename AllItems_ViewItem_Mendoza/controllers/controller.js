const db = require('../models/db.js');
const Item = require('../models/ItemModel.js');

const controller = {

    getFavicon: function (req, res) {
        res.status(204);
    },

    /*
    TODO:   This function is executed when the client sends an HTTP GET
            request to path `/`. This displays `index.hbs` with all
            transactions currently stored in the database.
    */
    getItems: function(req, res) {
        //res.render('index'); // This is to load the page initially
        //console.log("here");
        // your code here

        var projection = 'name date buy price';
        var query = {};


        db.findMany(Item, query, projection, function(result) {
            if(result != null) {
                i = {items: result};

                console.log(i);
                res.render('viewItem', i);
            }
            else {
                res.render('viewItem');
            }
        });
        
    },

    /*
    TODO:   This function is executed when the client sends an HTTP GET
            request to path `/getAdd`. This function adds the transaction
            sent by the client to the database, then appends the new
            transaction to the list of transactions in `index.hbs`.
    */
    getAdd: function(req, res) {
        // your code here
        var name = req.query.name;
        var refno = req.query.refno;
        var amount = req.query.amount;

        var trans = {
            name: name,
            refno: refno,
            amount: amount
        };

        db.insertOne(Transaction, trans, function(result) {
                console.log(trans);
                // res.render('index');
                res.render('partials/card', {name:name, refno:refno, amount:amount}, function(err, html) {
                    return res.send(html);
                });
        });
    },

    /*
    TODO:   This function is executed when the client sends an HTTP GET
            request to path `/getDelete`. This function deletes the transaction
            from the database, then removes the transaction from the list of
            transactions in `index.hbs`.
    */
    getDelete: function (req, res) {
        // your code here
        var refno = req.query.refno;

        db.deleteOne(Transaction, {refno: refno},function(result) {
            res.render('partials/card', function(err, html) {
                return res.send(html);
            });
        });
    }

}

module.exports = controller;
