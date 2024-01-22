// •	До 3 тона – микробус (200 лева на тон)
// •	От 4 до 11 тона – камион (175 лева на тон)
// •	12 и повече тона – влак (120 лева на тон)



function logistics(input){
    let numOfTransports = Number(input[0]);
    let priceTonBus = 0;
    let priceTonTruck = 0;
    let priceTonTrain = 0;
    let percentTons = 0;
    

    
    
    for (let i = 1; i <= numOfTransports; i++){
        let currNum = Number(input[i]);

        if(currNum <= 3){
            priceTonBus += currNum * 200;
            
        } else if (currNum >= 4 && currNum <= 11){
            priceTonTruck += currNum * 175;
            
        } else  {
            priceTonTrain += currNum * 120;

        } 
}
            let tonBus = priceTonBus / 200;
            let tonTruck = priceTonTruck / 175;
            let tonTrain = priceTonTrain / 120;
            let totalTons = tonBus + tonTrain + tonTruck;
            let averagePricePerTon = (priceTonBus + priceTonTrain + priceTonTruck)/totalTons;
            let busPercentage = (tonBus / totalTons) * 100;
            let truckPercentage = (tonTruck / totalTons) * 100;
            let trainPercentage = (tonTrain / totalTons) * 100;
            console.log(averagePricePerTon.toFixed(2));
            console.log(`${busPercentage.toFixed(2)}%`);
            console.log(`${truckPercentage.toFixed(2)}%`);
            console.log(`${trainPercentage.toFixed(2)}%`);
            }
logistics(["5",
    "2",
    "10",
    "20",
    "1",
    "7"
    ])



    // let totalTons = tonBus + tonBus2 + tonTrain + tonTruck;
    
    // let averageTonPrice = (((tonBus + tonBus2) * 200) + (tonTruck * 175) + (tonTrain * 120))/totalTons;
    // console.log(averageTonPrice.toFixed(2));