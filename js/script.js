// SET THE VARIABLES TO GET DATA FROM AN INPUT

const bodyVerify = document.getElementsByClassName('container');
var forward = [];
var reverse = [];

document.getElementById('submit').onclick = function (){
    // GET THE USER INPUT AND STRIP IT OF SPACES AND COMMAS
    // USE THAT TO SET THE FORWARD VAR
    forward = ((document.getElementById('user-input').value).replace(/\s/g, '').replace(/[\.,-\/#!$%\^&\*;:{}=\-_`~()@\+\?><\[\]\+]/g, '')).toLowerCase();
    // TAKE FORWARD VAR AND REVERSE IT TO SET THE REVERSE VAR
    reverse = forward.split('').reverse().join('');
    // THEN COMPARE THE TWO
    if (forward === reverse){
        // DO SOMETHING IF IT'S A PALENDROME
        document.getElementById('result').innerHTML = 'Palindrome!!';
        document.getElementById('result').style.color = 'green';
    } else {
        // DO SOMETHING ELSE IF IT IS NOT A PALENDROME
        document.getElementById('result').innerHTML = 'Nope!';
        document.getElementById('result').style.color = 'red';
    }
};