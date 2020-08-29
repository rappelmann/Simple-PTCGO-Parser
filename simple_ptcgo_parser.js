function parseLine(line){
    if(RegExp(/^\**\s*\d+\s+[\w ]+/g).test(line)){
        let tempLine = line.replace(RegExp(/^\**\s*/g),'');
        let information = tempLine.split(' ');
        tempLine = tempLine.replace(RegExp(/^\d+\s+/g),'');
        tempLine = tempLine.replace(RegExp(/\s+[\d\w-]*\s+[\d\w]*$/g),'');
        return {amount: information[0],name: tempLine, set: information[information.length-2], number: information[information.length-1]};
    }
    return false;
}

function parseList(decklist){
    const newLineString = '\n';
    decklist+=newLineString;
    let i = j = 0;
    let deck = new Array(0);

    while ((j = decklist.indexOf(newLineString, i)) !== -1) {
        let parsedLine = parseLine(decklist.substring(i, j));
        if(parsedLine!=false){
            deck.push(parsedLine);
        }
        i = j + 1;
    }
    return deck;
}

function listToJSON(decklist){
    return {cards: parseList(decklist)};
}