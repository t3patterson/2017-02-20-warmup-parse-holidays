export function sortHolidayByDate(objA,objB){
	console.log(objA)
	var dateValsA = objA.date.split('-').map((dVal)=> parseInt(dVal))
	var dateValsB = objB.date.split('-').map((dVal)=> parseInt(dVal))

	var dateA = new Date(dateValsA[0], dateValsA[1] - 1, dateValsA[2] )
	var dateB = new Date(dateValsB[0], dateValsB[1] - 1, dateValsB[2] )
	return dateA.getTime() -  dateB.getTime()
}

export function reduceToArrayOfObjects(accumObj, dateKey, index, arr){
		
	let totalArr = [...accumObj.returnArr, ...accumObj.allHolidaysObj[dateKey] ]
	if(  arr.length - 1 === index ){
		return totalArr
	} else {
		return {
			allHolidaysObj: accumObj.allHolidaysObj,
			returnArr: totalArr
		}
	}
 }