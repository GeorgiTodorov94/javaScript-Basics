function cake(input) {

    let index = 0;
    let width = Number(input[index]);
    index++
    let length = Number(input[index]);
    index++;

    let totalPieces = width * length;

    let command = input[index];
    index++;

    while (command !== 'STOP') {
        let cakePieces = Number(command);
        totalPieces -= cakePieces;

        if (totalPieces <= 0) {
            console.log(`No more cake left! You need ${Math.abs(totalPieces)} pieces more.`);
            break;
        }

        command = input[index];
        index++;

    }


    if (command === 'STOP') {
        console.log(`${Math.abs(totalPieces)} pieces are left.`)
        
    }

}

cake[("10",
    "10",
    "20",
    "20",
    "20",
    "20",
    "21")];
