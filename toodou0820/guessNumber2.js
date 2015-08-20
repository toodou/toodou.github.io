var ans  =prompt("plz tell me your wondering number!");
var guess=prompt("plz guess now!");

//var ans  =1452;
//var guess=4258;

document.write("Answer number is "+ans+"<br>");
document.write("Guess number is "+guess+"<br>");

var ansS =ans.toString();
var guessS=guess.toString();

var ansSL =ans.toString().length;
var guessSL=guess.toString().length;

countA=0;
countB=0;

var i,j;

document.write("ansSL length="+ansSL+"<br>");
document.write("guessSL length="+guessSL+"<br>");

for (i=0; i<=ansSL;i++){
  for (j=0; j<guessSL;j++){
    //a condition
    if(i==j && ansS[i]==guessS[j]){
      countA+=1;
      document.write(countA+"A"+countB+"B<br>");
    }else if(ansS[i]==guessS[j]){
      countB+=1;
      document.write(countA+"A"+countB+"B<br>");
    }
  }
}
document.write("Final: "+countA+"A"+countB+"B<br>");