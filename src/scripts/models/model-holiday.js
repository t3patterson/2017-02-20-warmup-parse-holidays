import Backbone from 'backbone';

const HolidayModel = Backbone.Model.extend()

export const HolidayCollection = Backbone.Collection.extend({
	model: HolidayModel,
	parse: function(serverRes){
		//Your work here
		

		//ADVENTURE MODE: Sort the holidays by date in ascending order
		return serverRes
	},
	url: 'https://holidayapi.com/v1/holidays?key=f51e7b04-9e6a-4122-9c27-667242df49eb&country=US&year=2016'
})