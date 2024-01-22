// •	На първия ред – периода, за който трябва да направите изчисления. Цяло число в интервала [1 ... 1000]
// •	На следващите редове(равни на броят на дните) – броя пациенти, които пристигат за преглед за текущия ден. 
//  Цяло число в интервала [0…10 000]


function hospital(input) {

    let daysCount = Number(input[0]);
    let doctorCount = 7;
    let patientsCount = 0;
    let untreatedPatients = 0;
    let totalTreatedPatients = 0;

    for (let i = 1; i <= daysCount; i++ ){

        totalTreatedPatients = patientsCount - untreatedPatients;
        if (i % 3 === 0 && untreatedPatients > totalTreatedPatients){
            doctorCount++;
        } 
        let currentDayPatients = Number(input[i]);
        patientsCount += currentDayPatients;

        if (doctorCount <= currentDayPatients){
            untreatedPatients += currentDayPatients - doctorCount;
        } 
        
} 
        totalTreatedPatients = patientsCount - untreatedPatients;
        console.log(`Treated patients: ${totalTreatedPatients}.`);
        console.log(`Untreated patients: ${untreatedPatients}.`)
} 
    
    

hospital(["4",
    "7",
    "27",
    "9",
    "1"])
