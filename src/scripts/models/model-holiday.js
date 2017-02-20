import Backbone from 'backbone';

const HolidayModel = Backbone.Model.extend()

export const HolidayCollection = Backbone.Collection.extend({
	model: HolidayModel,
	parse: function(serverResObj){
		//Your work here
		let outputArrayOfObj = []
		
		for (var dateProperty in serverResObj.holidays ){
			console.log(dateProperty)
			console.log( serverResObj.holidays[dateProperty] )
			console.log('-----');
			let holidayArrayOfObj = serverResObj.holidays[dateProperty]
			
			//OPTION A
			holidayArrayOfObj.forEach( function(holidayObj){
				outputArrayOfObj.push(holidayObj)
			}) 
		
			//OPTION B
			// outputArrayOfObj = [...outputArrayOfObj, ...holidayArrayOfObj]
		
	  }

		//ADVENTURE MODE: Sort the holidays by date in ascending order
		return outputArrayOfObj
		//  [ 
		// 	{ date: "2016-01-01", name: "Last Day of Kwanzaa", observed : "2016-01-01", public : false},
		// 	{ date: "2016-01-31", name: "New Years Day", observed : "2016-01-01", public : true },
		// 	{ date: "2016-02-14", name: "Valentines Day", observed : "2016-02-14", public : true },
		// 	{ date: "2016-03-25", name: "St Patricks Day", observed : "2016-3-25", public : true },

		// ]
		// 
	},
	url: 'https://api.myjson.com/bins/17zml5'
})