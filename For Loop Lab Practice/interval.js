function interval(input) {
    let totalRs = Number(input[0]);
    let r1 = 0;
    let r2 = 0;
    let r3 = 0;
    let r4 = 0;
    let r5 = 0;
    let r6 = 0;
    let result = 0;

    for (let i = 1; i <= totalRs; i++) {
        let currResult = Number(input[i]);
        if (currResult >= 0 && currResult <= 9) {
            result += currResult * 0.2;
            r1++;
        } else if (currResult >= 10 && currResult <= 19) {
            result += currResult * 0.3;
            r2++;
        } else if (currResult >= 20 && currResult <= 29) {
            result += currResult * 0.4;
            r3++;
        } else if (currResult >= 30 && currResult <= 39) {
            result += 50;
            r4++;
        } else if (currResult >= 40 && currResult <= 50) {
            result += 100;
            r5++;
        } else {
            result = result / 2;
            r6++;
        }
    }
    let totalRs1 = r1 + r2 + r3 + r4 + r5 + r6;
    let r1Percentage = (r1 / totalRs1) * 100;
    let r2Percentage = (r2 / totalRs1) * 100;
    let r3Percentage = (r3 / totalRs1) * 100;
    let r4Percentage = (r4 / totalRs1) * 100;
    let r5Percentage = (r5 / totalRs1) * 100;
    let r6Percentage = (r6 / totalRs1) * 100;
    console.log(result.toFixed(2))
    console.log(`From 0 to 9: ${r1Percentage.toFixed(2)}%`);
    console.log(`From 10 to 19: ${r2Percentage.toFixed(2)}%`);
    console.log(`From 20 to 29: ${r3Percentage.toFixed(2)}%`);
    console.log(`From 30 to 39: ${r4Percentage.toFixed(2)}%`);
    console.log(`From 40 to 50: ${r5Percentage.toFixed(2)}%`);
    console.log(`Invalid numbers: ${r6Percentage.toFixed(2)}%`)
    

}
interval(["10",
    "43",
    "57",
    "-12",
    "23",
    "12",
    "0",
    "50",
    "40",
    "30",
    "20",
])