const data1 = new Date
const data2 = '2050-10-18 14:33:15'
const diffInMs = new Date(data2) - new Date(data1)
const diffInDays = diffInMs / (1000 * 60 * 60 * 24)
console.log('Dias: '+ diffInDays)

function secondsToDhms(days){
    var seconds = days * 24 * 60 * 60;
    var d = Math.floor(seconds / (3600 * 24));
    var h = Math.floor(seconds % (3600 * 24) / 3600)
    var m = Math.floor(seconds % 3600 / 60)
    var s = Math.floor(seconds % 60)

    var dDisplay = d > 0 ? d + (d == 1 ? " day, " : " days, ") : "";
    var hDisplay = h > 0 ? h + (h == 1 ? " hour, " : " hours, ") : "";
    var mDisplay = m > 0 ? m + (m == 1 ? " minute, " : " minutes, ") : "";
    var sDisplay = s > 0 ? s + (s == 1 ? " second" : " seconds") : "";
    return (dDisplay + hDisplay + mDisplay + sDisplay)
}

console.log(secondsToDhms(diffInDays))