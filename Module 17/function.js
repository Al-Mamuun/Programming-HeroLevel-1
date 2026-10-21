
function evenSizeString(str) { 
    if (str.length % 2 === 0) {
        console.log("Even")
        return true;
    }
    else
    {
        console.log("Odd")
        return false;
    }
}

evenSizeString("Dhaka"); // Odd