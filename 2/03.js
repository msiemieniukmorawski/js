const list = [1, 6, 23, 8, 4, 98, 3, 7, 3, 98, 4, 98, 7, 6, 7, 19, 20, 11]

//3. Create a function that takes a number and return factorial of that number.
function silnia(number) {
    let i = 1
    let silnia = 1
    while (i <= number) {
        silnia *= i;
        i++;
    }
    return silnia
}

console.log(silnia(3));
