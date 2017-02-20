import Backbone from 'backbone'

const HolidayListingView = Backbone.View.extend({
	el: '#app-container',
	
	_buildHtmlTemplate: function(holidayModels){
		let holidayHtml = holidayModels.map(function(holidayMod){

         // EXPLORER MODE: add a 'holiday_public' class-name to the 
         //                div.holiday element IF the holidayModel
         //                is a public holiday
			let divClassName = 'holiday'
			if(holidayMod.get('public') === true){
				divClassName = 'holiday holiday_public'
			}
			return `
				<div class="${divClassName}">
					<h2 class="col_left">${ holidayMod.get('name') }</h2>
					<div class="col_right">
						<p><i class="fa fa-2x fa-calendar"></i></p>
						<p>
							<strong>${ holidayMod.get('date') }</strong><br/> 
							<small> Observed: ${ holidayMod.get('observed') } </small>
						</p>		
					</div>
				</div>
			`	 
		}).join('')

		return `<h1><span>US</span> Holidays</h1><hr/>${holidayHtml}`
	},

	render: function(arrayOfHolidays){
		this.el.innerHTML = this._buildHtmlTemplate(arrayOfHolidays)
	}
	
})

export default HolidayListingView
