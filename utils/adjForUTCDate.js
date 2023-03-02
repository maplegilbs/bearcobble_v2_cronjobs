export function adjustForUTC(timeToConvert){
    let currentHours = timeToConvert.getUTCHours();
    let hourDiff = timeToConvert.getTimezoneOffset()/60;
    timeToConvert.setUTCHours(currentHours-hourDiff);
    return timeToConvert;
}