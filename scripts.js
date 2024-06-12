function httpGet(theUrl)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
    xmlHttp.send( null );
    return xmlHttp.responseText;
}

joke = httpGet("https://v2.jokeapi.dev/joke/Any?format=txt&type=single")
document.getElementById("jokeText").innerHTML = joke