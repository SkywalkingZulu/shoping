var Product = require('../models/product');
var mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
//mongoose.connect(process.env.MONGODB_URI);
mongoose.connect('localhost:27017/shopping');

var products = [
	new Product({
	imagePath: 'https://github.com/azania-neptune-labs/Galleries/blob/master/Alude/two.jpg',
	title: 'Alude',
	description: 'Smartphone with upto 8 GB of RAM.Super camera and gadget',
	price: 35000}),
	new Product({
	imagePath: 'https://github.com/azania-neptune-labs/Galleries/blob/master/Alude/twentynine.jpg',
	title: 'Alude',
	description: 'Here a box with all you want from Apple Inc',
	price: 72000}),
	new Product({
	imagePath: 'https://github.com/azania-neptune-labs/Galleries/blob/master/Alude/twenty.jpg',
	title: 'Oppo',
	description: 'Oppo Upcoming.Go prebook it!!!!!',
	price: 19999}),
	new Product({
	imagePath: 'https://github.com/azania-neptune-labs/Galleries/blob/master/Alude/three.jpg',
	title: 'Alude',
	description: 'Here is your SellfieSthan',
	price: 21599}),
	new Product({
	imagePath: 'https://github.com/azania-neptune-labs/Galleries/blob/master/Alude/three.jpg',
	title: 'Alude',
	description: 'With most desi avatar',
	price: 12000}),
	new Product({
	imagePath: 'https://github.com/azania-neptune-labs/Galleries/blob/master/Alude/three.jpg',
	title: 'Alude',
	description: 'Devil is Here.Just own it',
	price: 16899}),
	new Product({
	imagePath: 'https://github.com/azania-neptune-labs/Galleries/blob/master/Alude/three.jpg',
	title: 'Alude',
	description: 'Cool and most advanced super gazetted mobile phone',
	price: 19000}),
	new Product({
	imagePath: 'https://github.com/azania-neptune-labs/Galleries/blob/master/Alude/three.jpg',
	title: 'Alude',
	description: 'A Lenovo Product',
	price: 9999}),
	new Product({
	imagePath: 'https://github.com/azania-neptune-labs/Galleries/blob/master/Alude/three.jpg',
	title: 'Alude ',
	description: 'A banger from the old pie Nokia',
	price: 8999}),
	new Product({
	imagePath: 'https://github.com/azania-neptune-labs/Galleries/blob/master/Alude/three.jpg',
	title: 'Alude',
	description: 'Elegance from Panasonic',
	price: 12999}),
	new Product({
	imagePath: 'https://github.com/azania-neptune-labs/Galleries/blob/master/Alude/three.jpg',
	title: 'Android Kitkat',
	description: 'Alude',
	price: 7599}),
	new Product({
	imagePath: 'https://github.com/azania-neptune-labs/Galleries/blob/master/Alude/three.jpg',
	title: 'InFocus',
	description: 'Alude',
	price: 8499}),
];


var done = 0;
for (var i=0; i<products.length; i++){
	products[i].save(function(err, data){
		done++;
		if (done === products.length){
			exit();
		}
	});
}

function exit(){
	mongoose.disconnect();
}