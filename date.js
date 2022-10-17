exports.getDate = function(){
    const today = new Date();
    
    const options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    }

    //toLocaleDateString is used to recieve date in string format and second value is options to pass the format of "Date" 
    return today.toLocaleDateString("en-US", options);
}
exports.getDay = function(){
    const today = new Date();
    
    const options = {
        weekday: "long"        
    }

    //toLocaleDateString is used to recieve date in string format and second value is options to pass the format of "Date" 
    return today.toLocaleDateString("en-US", options);
}

