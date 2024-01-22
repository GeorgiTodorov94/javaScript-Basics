function timeMachine(input) {

    let legacy = Number(input[0]);
    let lastYear = Number(input[1]);
    let firstYear = 1800;
    let age = 18;
    let legacyLeft = 0;
   

for (let i = firstYear; i <= lastYear; i++) {
    let currYear = 0;
    if (i % 2 === 0) {
        legacy -= 12000;
    } else if (i % 2 === 1) {
        age++;
        legacy = legacy - (12000 + (age * 50));            
    }
         
}
console.log(`Yes! He will live a carefree life and will have ${legacy.toFixed(2)} dollars left." `)

}
timeMachine(["50000",
"1802"])

