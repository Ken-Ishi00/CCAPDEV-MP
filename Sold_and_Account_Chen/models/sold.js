const mongoose = require('mongoose')

const soldItemSchema = new mongoose.Schema ({
	name: String,
	sell_price: Decimal128,
	buy_price: Decimal128,
	Amt_Sold: Int32}

	{
		collection: 'items'
});

const soldItem = mongoose.model('soldItem', soldItemSchema)