import $ from 'jquery';
import { sortHolidayByDate, reduceToArrayOfObjects } from './_helpers.js'

function renderHolidaysHtml(allHolidaysObj, countryName){
	//PARSE STEP for weird API --  
	let arrayOfHolidayObjects = Object
		.keys(allHolidaysObj)
		.reduce(reduceToArrayOfObjects , { allHolidaysObj: allHolidaysObj , returnArr: [] })
		.sort(sortHolidayByDate)

	//Normal Step -- iterate over array of holiday objects to create 
	let holidayHtml = arrayOfHolidayObjects
		.map(function(holidayObj){
			return `
				<div class="holiday ${holidayObj.public ? "holiday_public" : ""}">
					<h2 class="col_left">${ holidayObj.name }</h2>
					<div class="col_right">
						<p><i class="fa fa-2x fa-calendar"></i></p>
						<p>
							<strong>${ holidayObj.date }</strong><br/> 
							<small> Observed: ${ holidayObj.observed } </small>
						</p>		
					</div>
				</div>
			`	 
		}).join("");
	
	var htmlStr = `
		<h1>${countryName} Holidays</h1>
		<hr/>
		${ holidayHtml }
	`

	document.querySelector('#app-container').innerHTML = htmlStr
}

$.getJSON('https://holidayapi.com/v1/holidays?key=f51e7b04-9e6a-4122-9c27-667242df49eb&country=US&year=2016')
	.then(function(serverRes){
	renderHolidaysHtml(serverRes.holidays, 'US')
})

