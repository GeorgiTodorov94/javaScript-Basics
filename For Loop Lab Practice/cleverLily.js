function lily(input) {

    let age = Number(input[0]);
    let washerPrice = Number(input[1]);
    let toyPrice = Number(input[2]);
    let toyCount = 0;
    let moneySaved = 0;
    let evenBdMoneyWon = 10;

    for (let i = 1; i <= age; i++) {
        if (i % 2 === 1) {
            toyCount++;
        } else {
            moneySaved += evenBdMoneyWon - 1;
            evenBdMoneyWon += 10;

        }
    }
        totalMoneyFromToys = toyCount * toyPrice;
        moneySaved += totalMoneyFromToys;
        if (moneySaved >= washerPrice){
            console.log(`Yes! ${(moneySaved - washerPrice).toFixed(2)}`);
        } else {
            console.log(`No! ${(washerPrice - moneySaved).toFixed(2)} `);
        }
        
        

}

lily(["21",
"1570.98",
"3"])

