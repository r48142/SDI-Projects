//Author: Dwain Roberts
//SDI 1307
//8-1-13
//Deliverable 4
//Code Library // No Regular Expressions or JQuery


//String Functions // Does a string follow a 123-456-7890 pattern like a phone number?

var iPhoneNumber = function(phoneNumber)
{
if (phoneNumber.indexOf("-") === 3 && phoneNumber.lastIndexOf("-") === 7 && phoneNumber.length === 12)
{
return true;
}
else
{
return false;
};