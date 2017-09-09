// Please modify this file!

var Fish = Backbone.Model.extend({

	defaults: {
		name: 'Larry',
		image: 'http://www.google.com',
		description: 'Regular old fish',
		displayInfo: false
	},


	initialize: function() {
    this.render();
    this.model.on('toggle:description', this.render, this);
  },

	// render:function(){

	// }


	toggleDescription:function (){

		this.model.on("click", this.render,this)
	}

});
