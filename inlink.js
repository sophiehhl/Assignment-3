//retrieve
var url = window.location.href;
    console.log("url = " + url);
    var x = breakUpURLParameters(url);
    console.log(x.search);

    var t = document.createElement("h2");
    t.innerHTML = x.search["title"];
    
    var y = document.createElement("img");

    var z = "../images/" + x.search["img"];
    y.setAttribute("src", z);
    
    var d = document.createElement("p");
    d.setAttribute("class", "text");
    d.innerHTML = x.search["desc"];


// create div
var main = document.createElement("div");
    main.setAttribute("class", "main_container1"); 
    document.getElementsByTagName('body')[0].appendChild(main);

var shadow = document.createElement("div");
    shadow.setAttribute("class", "shadow");
    document.getElementsByClassName('main_container1')[0].appendChild(shadow);

var container2 = document.createElement("div");
    container2.setAttribute("class", "container2");
    document.getElementsByClassName('shadow')[0].appendChild(container2);

var container3 = document.createElement("div");
    container3.setAttribute("class", "container3");
    document.getElementsByClassName('shadow')[0].appendChild(container3);



//assign 
document.getElementsByClassName('container2')[0].appendChild(t);
document.getElementsByClassName('container2')[0].appendChild(y);
document.getElementsByClassName('container3')[0].appendChild(d);


function breakUpURLParameters(url) {
    var link = document.createElement('a');
    link.setAttribute('href', url);
    console.log("path variable is " + url);

return {
    host:     link.hostname,  //  'example.com'
    port:     link.port,      //  12345
    search:   mapMaker(link.search),  //  {startIndex: 1, pageSize: 10}
    path:     link.pathname,  //  '/blog/foo/bar'
    protocol: link.protocol   //  'http:'
    }   
}

function mapMaker(search, preserveDuplicates) {
    preserveDuplicates = preserveDuplicates || false;

    var outputNoDupes = {};
        var returnableArray = [];
            if(!search) throw new Error('mapMaker: your search input param is misformed?');

            search = search.split('?')[1];

            //  split apart your keys into a useful array of key/value pairs ('foo=1&bar=2' -> ['foo=1', 'bar=2'])
            search = search.split('&');

            //  separate keys from values (['foo=1', 'bar=2'] -> [{foo:1}, {bar:2}])
            //  then package as an array for your caller to use as variables
            returnableArray = search.map(function(keyval){
                var out = {};
                keyval = keyval.split('=');
                out[keyval[0]] = decodeURI(keyval[1]);
                outputNoDupes[keyval[0]] = decodeURI(keyval[1]); //  might as well do the no-dupe work too while we're in the loop
                return out;
                });

                return (preserveDuplicates) ? returnableArray : outputNoDupes;
}



