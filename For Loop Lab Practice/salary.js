function salary(input){
    let index = 0;
    let tabsOpen = Number(input[index]);
    index++;
    let salary = Number(input[index]);
    index++;
    let webSite = input[index];
    index++;
    let salaryLeft = 0;

    for (let i = 0; i < tabsOpen; i++){
        
        switch (webSite){
            case "Facebook": salary -= 150;
             
            break;
            case "Instagram": salary -= 100;
            
            break;
            case "Reddit": salary -= 50;
            salaryLeft = salary
            break;
            
        }
        
        webSite = input[index];
        index++;

        
        
        
    } 
    if(salary <= 0){
        console.log(`You have lost your salary.`)
        
    } else {
        let lastAmount = salary - salaryLeft
        console.log(`${lastAmount}`)
    }

}
salary(["3",
"500",
"Facebook",
"Dev.bg",
"softuni.bg"])






