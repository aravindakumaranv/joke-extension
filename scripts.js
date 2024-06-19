function httpGet(theUrl)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
    xmlHttp.send( null );
    return xmlHttp.responseText;
}

const getOptions = () => {
    chrome.storage.sync.get(
        { bgcolor: null, textColor: null },
        (items) => {
            document.body.style.background = items.bgcolor;
            document.getElementsByClassName("joke-text")[0].style.color = items.textColor
            document.getElementsByClassName("joke-text")[1].style.color = items.textColor
        }
    );
};

getOptions();
joke = JSON.parse(httpGet("https://official-joke-api.appspot.com/random_joke"))
document.getElementById("setupText").innerHTML = joke.setup
document.getElementById("punchlineText").innerHTML = joke.punchline