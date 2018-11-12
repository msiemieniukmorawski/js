// 11)	Create a function that will return the current day name in Polish.

function correctDay() {
    let d = new Date();
    let weekday = new Array(7);
    weekday[0] = "Niedziela";
    weekday[1] = "Poniedziałek";
    weekday[2] = "Wtorek";
    weekday[3] = "Środa";
    weekday[4] = "Czwartek";
    weekday[5] = "Piątek";
    weekday[6] = "Sobota";
    return weekday[d.getDay()]
}

console.log(correctDay())