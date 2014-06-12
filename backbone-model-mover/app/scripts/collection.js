"use strict";
// separate collections for each 'column', however they all share the same model constructor
Mover.Collections.FirstCollection = Backbone.Collection.extend({
	model: Mover.Models.List,
	url: 'http://tiny-pizza-server.herokuapp.com/collections/dbMovingCollectionOne'
});


Mover.Collections.SecondCollection = Backbone.Collection.extend({
	model: Mover.Models.List,
	url: 'http://tiny-pizza-server.herokuapp.com/collections/dbMovingCollectionTwo'
});

Mover.Collections.ThirdCollection = Backbone.Collection.extend({
	model: Mover.Models.List,
	url: 'http://tiny-pizza-server.herokuapp.com/collections/dbMovingCollectionThree'
});