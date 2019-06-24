var callback = function(){};
var millisecondsPerYear = 1000 * 60 * 60 * 24 * 7 * 53;

var oneYearAgo = (new Date()).getTime() - millisecondsPerYear;

function clear()
{
    
    if(document.getElementById("history").checked)
    {  
        chrome.browsingData.removeHistory(
        {   
            "since": oneYearAgo
        }, callback);
    }
    if(document.getElementById("cookies").checked)
    {  
        chrome.browsingData.removeCookies(
        {   
            "since": oneYearAgo
        }, callback);
    }
    if(document.getElementById("cache").checked)
    {  
        chrome.browsingData.removeCache(
        {   
            "since": oneYearAgo
        }, callback);
    }
    if(document.getElementById("passwords").checked)
    {  
        chrome.browsingData.removePasswords(
        {   
            "since": oneYearAgo
        }, callback);
    }
}


document.getElementById("delete").addEventListener("click", clear, false);