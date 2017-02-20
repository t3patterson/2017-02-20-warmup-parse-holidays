import $ from 'jquery';
import Backbone from 'backbone';
import {HolidayCollection} from './models/model-holiday.js'
import HolidayListingView from './views/view-holidaylisting.js'



let holidayColl =  new HolidayCollection()
// let holidayView =  new HolidayListingView()

//--------------------------------------------------------------------------
//TASK :   
//--------------------------------------------------------------------------

holidayColl.fetch().then(function(serverRes){
	console.log(serverRes)

	console.log(holidayColl)
	//should have several models
   let holidayView = new HolidayListingView()
	holidayView.render(holidayColl)
})





