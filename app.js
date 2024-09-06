function showNames(){
    const input1 = document.getElementById('person1').value;
    const input2 = document.getElementById('person2').value;

   const result1 = input1;
   const result2 = input2;
   
const toss  = Math.random()*2;
const floor = Math.floor(toss);


if (floor === 0){
    document.getElementById('winner').innerHTML = "heads" + " " + result1 + " " +"WIN"
}else{
    document.getElementById('winner').innerHTML = "Tails"+ " "+ result2 +" "+ "WIN"
   }
}
