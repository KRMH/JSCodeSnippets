const avgScore = (score1, score2, score3) => (score1 + score2 + score3) / 3;

// function checkWinner (name1, avg1, name2, avg2){
//     const winner = avg1 > avg2*2 ? name1 : avg2 > avg1*2 ? name2 : null;
//     if (winner !== null){
//         console.log(`${winner} wins!`); 
//         return true;
//     }
//     console.log(`No one wins!`);
//     return false;
// }

const checkWinner = (name1, avg1, name2, avg2) => {
    console.log(name1, avg1, name2, avg2);
    const winner = avg1 > avg2*2 ? name1 : avg2 > avg1*2 ? name2 : null;
    if (winner !== null){
        console.log(`${winner} wins !`); 
        return true;
    }
    console.log(`No one wins!`);
    return false;
}

checkWinner('Dolphins', 
            avgScore(44, 23, 71), 
            'Koalas', 
            avgScore(65, 54, 49));


checkWinner('Dolphins', 
            avgScore(85, 54, 49), 
            'Koalas', 
            avgScore(23, 34, 27));