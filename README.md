#Warmup - Parse the Holidays

###Task
The [Holiday API](https://holidayapi.com/) returns information about national holidays for countries the world.

Inside of the `model-holiday.js` file, write the `.parse()` method in the collection constructor so that all of the holidays objects for each of the holiday-dates from the api will be properly parsed into models. 

In other words, you will need the parse method to take the raw server response and return an array of objects with all of the holidays.

You can inspect the api in your browser with this link:
https://holidayapi.com/v1/holidays?key=f51e7b04-9e6a-4122-9c27-667242df49eb&country=US&year=2016

###Explorer Mode
Inside of the `view-holidaylisting.js` file, add a 'holiday_public' class-name to the  `<div class="holiday">` element IF the holidayModel is a public holiday.

###Adventure Mode
Use `.sort()` inside the collection constructor's `.parse()` method to sort the holidays into ascending order by date.