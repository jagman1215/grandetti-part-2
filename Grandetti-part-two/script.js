
let score = 0;

let name = prompt("What is your name?");

let HowManyHoles = prompt ("Hi, " + name + ". Would you like to play 3 or 6 holes of Mini Golf?"); 

if (HowManyHoles==='3') {
    

    for (let i = 1; i <= 3; i++) {
        let holeScore = prompt("how many putts for hole " + i + "? par 3");
        score = score + parseInt (holeScore);
    }
    
    score = score - 9;
    if (score === 0){
        console.log ("Good game," + name +". Your total par was: " + score);
    }
    else if (score < 0){
        console.log ("Great job, " + name + "! Your total par was:" + score);
    } 
    else 
    {
        console.log ("Nice try, " + name + "... Your total par was: +" + score);
    }
    
}
else if(HowManyHoles==='6'){
    for (let i = 1; i <= 6; i++) {
        let holeScore = prompt("how many putts for hole " + i + "? par 3");
        score = score + parseInt (holeScore);
    }

    score = score -18;
    
    if (score === 0){
        console.log ("Good game," + name +". Your total par was: " + score);
    }
    else if (score < 0){
        console.log ("Great job, " + name + "! Your total par was:" + score);
    } 
    else 
    {
        console.log ("Nice try, " + name + "... Your total par was: +" + score);
    }
    

} 
else { 
    alert ("you can only type a 3 or a 6");
    
}




