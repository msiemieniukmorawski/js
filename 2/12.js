// 12)	Create a function that tells us how many days till Friday

function DayToFriday() {
    let d = new Date();
    let correctDay = d.getDay();
    // correctDay = 5;
    let tmp = 0;
    switch (correctDay) {
        case 0:
            tmp = 5;
            break;
        case 6:
            tmp = 6;
            break;
        case 5:
            tmp = 0;
            break;
        default:
            tmp = 5 - correctDay
            break;
    }
    return tmp;
}

console.log((DayToFriday() === 0) ? 'today is Firday' : DayToFriday() + ' days to Firday')