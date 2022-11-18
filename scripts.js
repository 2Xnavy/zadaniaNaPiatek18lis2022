const arr1 = ["Anna", "Maria"];
const arr2 = ["Adam", "Marek", "Bartek", "Tomek"];
const numbers = [1, 2, 3, 4, 5];

// ZADANIA:
console.log("ZADANIA: ");
// Zadanie 1
console.log("\nZadanie 1: ");
const joinArrays = (arr1, arr2) => [...arr1, ...arr2];
console.log(joinArrays(arr1, arr2));

// Zadanie 2
console.log("\nZadanie 2: ");
const [last] = (joinArrays(arr1, arr2)).reverse();
console.log(last);

// Zadanie 3
console.log("\nZadanie 3: ");
const filterArray = (array, arg) => array.filter(
    array => array == arg
);
console.log(filterArray(arr2, "Adam")); // Filtrowanie w poszukiwaniu elementu BĘDĄCEGO w tablicy
console.log(filterArray(arr2, "Anna")); // Filtrowanie w poszukiwaniu elementu NIEBĘDĄCEGO w tablicy

// Zadanie 4
console.log("\nZadanie 4: ");
const arraySum = (array) => array.reduce((acc, val) => {
    return acc + val;
});
console.log(arraySum(numbers));

// Zadanie 5
console.log("\nZadanie 5: ");
const arrayMath = (array) => array.map((num) => {
    return Math.pow(num, 2)+3;
});
console.log(arrayMath(numbers));



// ZADANIA DODATKOWE:
console.log("\n\n\n\nZADANIA DODATKOWE: ");
// Zadanie dodatkowe 1
console.log("\nZadanie D1: ");
const arrAdvFiltering = (array) => array.filter(
    array => array.length<=5 && array.endsWith("ek")
);
console.log(arrAdvFiltering(arr2));

// Zadanie dodatkowe 2
console.log("\nZadanie D2: ");
const numAdvFiltering = (array) => array.filter(
    array => array%2==0
)
console.log(numAdvFiltering(numbers));

// Zadanie dodatkowe 3
console.log("\nZadanie D3/1: "); // Dostosowany do zadania kod, który znalazłem
const lowestArrValue = (array) => {
    if(array.length === 1) return array[0];
    const [first, second, ...remaining] = array;
    return lowestArrValue([(first >= second ? second : first), ...remaining]);
    /*
        first >= second?second:first
        warunek ? warunek się spełnia : warunek się nie spełnia
    */
};
console.log(lowestArrValue(numbers));

console.log("\nZadanie D3/2: "); // Moje podejście bazowane na tym co znalazłem
const minArrVal = (array) => {
    if(array.length === 1) return array[0];
    const [first, second, ...remaining] = array;
    if (first >= second) return minArrVal([second, ...remaining])
    else return minArrVal([first, ...remaining]);
};
console.log(minArrVal(numbers));

/*
    Tutaj znalazłem odpowiedź na zadanie 3:
    https://stackoverflow.com/a/69919024

    Jak widać to co zrobiłem to dostosowałem ten kod pod wymogi zadania (zrobienie z
    tego funkcji strzałkowej), zrozumiałem sporo tego co przedstawia i samemu podszedłem
    do rozwiązania tego zadania, już po zdobyciu nowej wiedzy i sposobu jak je rozwiązać.

    Nie wiem, czy powinienem dostać punkty za trzecie dodatkowe zadanie, bo bez znalezienia
    tego i innych pomocnych tekstów bym nie uzyskał oczekiwanego rezultatu.
*/

