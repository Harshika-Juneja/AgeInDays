//challenge is your age in days
function ageInDays(){
var birthYear=prompt("What year where you born?");
var age=(2021-birthYear)*365;
var h1=document.createElement('h1');
var textAnswer=document.createTextNode('You are' +age + 'days old');
h1.setAttribute('id','age');
h1.appendChild(textAnswer);
document.getElementById('flex-box-result').appendChild(h1);

}
function reset()
{
    document.getElementById('age').remove();
}
