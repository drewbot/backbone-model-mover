"use strict";
// Only one model is necessary as they will all have the same attributes,
// however differ in which collection they are in
Mover.Models.List = Backbone.Model.extend({
	idAttribute: "_id"
});
