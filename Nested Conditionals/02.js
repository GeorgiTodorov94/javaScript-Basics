function summer(input){
    let degrees = Number(input[0]);
    let partOfDay = input[1];
    let outfit = ""; 
    let shoes = "";

    switch(partOfDay){
        case "Morning" :
            if (degrees <= 18){
                outfit = "Sweatshirt"
                shoes = "Sneakers"
            } else if (degrees <= 24) {
                outfit = "Shirt";
                shoes = "Moccasins";

            } else {
                outfit = "T-shirt";
                shoes = "Sandals";
            } break;
            case "Afternoon":
                if (degrees <= 18) {
                    outfit = "Shirt";
                    shoes = "Moccasins";

                } else if ( degrees <= 24) {
                    outfit = "T-Shirt";
                    shoes = "Sandals";

                } else {
                    outfit = "Swim Suit";
                    shoes = "Barefoot";
                }
            break;
            case "Evening":
                outfit = "Shirt"
                shoes = "Moccasins";
                break;
    }
    console.log(`It's ${degrees} degrees, get your ${outfit} and ${shoes}.`)
}
summer(["16" , "Morning"]);

// [`It's ${degrees} degrees, get your ${outfit} and ${shoes}.`]