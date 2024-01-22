function sumirane(input) {
    let numA = input[0];
    let sum = 0;

    for (let i = 0; i < numA.length; i++){
        let currentChar = Number(numA[i])
        sum += currentChar;
        
    }
    console.log(sum);

}
sumirane(["1234"]);