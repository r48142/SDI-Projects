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

//Does a string follow an aaa@bbb.ccc pattern like an email address?
var EmailAddress = function(address)
{
if (address.indexOf("@") < address.indexOf("."))
{
return true;
}
else
{
return false;
};
//Is the string a URL? (Does it start with http: or https:?)

var URL = function(url)
{  
if (url.startsWith("http://") || url.startsWith("https://"))
{
return true;
}
else
{
return false;
};

