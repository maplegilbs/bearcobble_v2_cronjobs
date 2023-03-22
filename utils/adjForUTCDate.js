export function adjustForUTC(timeToConvert){
    console.log(timeToConvert)
    let currentHours = timeToConvert.getUTCHours();
    let hourDiff = 4;
    timeToConvert.setUTCHours(currentHours-hourDiff);
    console.log(timeToConvert)
    return timeToConvert;
}