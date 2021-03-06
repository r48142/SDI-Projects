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
//Title-case a string (split into words, then uppercase the first letter of each word)

var TitleCase = function(string)
{
var myStrings = string.split(" ", -1);
var newString = "";
for (var i = 0; i < strings.length; i++)
{
var r = myStrings[i].charAt(0);
var j = myStrings[i].split(r, 2);
myStrings[i] = r.toUpperCase() + j[1];
newString = newString + myStrings[i] + " ";
};  
return newString;
//Number Functions
//number Format a number to use a specific number of decimal places, as for money: 2.1 → 2.10

var DecimalPlace = function(number, decimals)
var num = number;
var dec = decimals;
num = num.toFixed(dec);
return num;
};
//Given a string version of a number such as "42", return the value as an actual Number, such as 42.

var stringNum = function(stringIsNum)
{
if(isNaN(stringIsNum))
{
changedNumber = "Not a number.";
}
else
{
changedNumber = Number(stringIsNum);
};
return changededNumber;
};
//Array Functions
//array Find the smallest value in an array that is greater than a given number

var SmallestValue = function(array, number)
{
var newArray = array;
var nextNumber;
newArray.sort();
for (var i = 0; i < newArray.length; i++)
{
if (newArray[i] > number)
{
newNumber = newArray[i];
break;
}
}
return newNumber;
};


