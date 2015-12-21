(function($) {
	'use strict';

	var Model1 = Backbone.Model.extend({
		initialize: function(attrs, opts) {
			console.log('Created an instance of Model1');
		}
	});

	var m1 = new Model1({name: 'm1'});
	console.log(m1.get('name'));


	var Model2 = Backbone.Model.extend({
		constructor: function(attrs, opts) {
			console.log('Created an instance of Model2 (via constructor)');
		}
	});

	var m2 = new Model2({name: 'm2'});
	console.log(m2.get('name'));

}(jQuery));