export function adjustForUTC(timeToConvert){
    console.log(timeToConvert)
    let currentHours = timeToConvert.getUTCHours();
    let hourDiff = 5;
    timeToConvert.setUTCHours(currentHours-hourDiff);
    console.log(timeToConvert)
    return timeToConvert;
}