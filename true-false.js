/* FALSY :
false
0
empty string
undefined
null
NaN

TRUTHY :
true
any number (negative or positive)
any string including single whitespace
'0'
'false'
[]
{}
anything else that is not falsy will be truthy
*/
const x = false;
if (x) {
    console.log('Variable is truthy');
}
else {
    console.log('variable is false');
}