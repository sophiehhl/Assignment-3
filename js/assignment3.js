var html = [
  "yokohama.html",
  "ebisu.html",
  "shibuya.html",
  "sumika.html",
  "omusubi.html",
  "coco.html"
];
var imgs = [
  "yokohama.jpg",
  "ebisu.jpg",
  "shibuya.jpg",
  "sumika.jpg",
  "omusubi.jpg",
  "coco.jpg"
];

var title = [
  "Yokohama Arena",
  "Ebisu",
  "Shibuya",
  "Sumika",
  "Omusubi no Gaba",
  "Coco Ichibanya"
];

var desc = [
  "I went to Yokohama Arena in Japan to attend a Sexy Zone Concert. They are Japanese idol group that I have listened to since 2011. I was suppose to attend this concert with my long time best friend, Tyanna. But unfortunately some unforseen circumstances happened and I went with my significant other instead. Despite this, I still had a great time and a unforgettable experience. I was also suppose to attend another concert Sexy Zone with her in March 2020, however the pandamic hit and travel restrictions began. As much as it is saddening, what matters the most is that everyone is safe.",
  "Here is a statue in Ebisu Garden Place that was shown in the Japanese drama, Hana Yori Dango. The romance drama was released in 2005 and remains as one of the most popular drama series ever. This place was the meeting place for the first date of the two main characters. It became such a big impact that many people would come to take photos at this place. When I first came here I wanted to cry. I never thought I would have the opportunity to come to a filming location of my favorite drama.",
  "In Shibuya, there's a statue dedicated to the Akita Inu , Hachiko. Hachiko is remembered for being loyal to his owner who passed away at work. Hachiko would wait for his owner at Shibuya Station every day after his commute home. However after his owner's death he continued to wait at Shibuya Station every day waiting for his owner's return.",
  "In Kyoto, I went to a resturant named Sumika. A backstory about this is that during my first trip to Japan, I would constantly try out different corn dishes since I am a corn lover. When I got this corn dish from Sumika, I was mind blown. I never tasted corn like the way they made it before in Japan. It became a taste I could never forget.",
  "In Akihabara, I went to a resturant named, Omusubi no Gaba. I got a tuna mayo riceball and a salmon roe riceball. At this resturant it is one of the best riceball I ever ate in my life. It tuna mayo was so flavorful. On my second and third trip to Japan I went back for the riceballs but both trips, they did not have the riceballs anymore. I was very saddened about this.",
  "Coco Ichibanya is a very popular food chain in Japan that is located in many areas. In all my trips to Japan, I would constanely go to this resturant. My order would consist of a no spicy curry with menchi katsu, corn potage, and a potato salad as shown in the picture. There are a few resturants located in California, but it still doesn't compare to Japan's taste. "
];

var main = document.createElement("div"); // create div
main.setAttribute("class", "main_container"); //class is main_container
document.getElementsByTagName('body')[0].appendChild(main); //append the main div to body tag


for (var i = 0; i < imgs.length; i++) {
  url = "../images/" + imgs[i]; //image path file
  urlOfDetailPage = "../" + html[i] + "?img=" + imgs[i] + "&title=" + title[i] + "&desc=" + desc[i]; //parameter URL

  //images

  var imgDiv = document.createElement("div"); //make a div for img 
  imgDiv.setAttribute("class", "container1"); // set class etc 
  var imgInDiv = document.createElement("img"); // img in div
  imgInDiv.setAttribute("src", url); //src to url, above, determined by for i

  var capInDiv = document.createElement("h2");
  capInDiv.innerHTML = title[i];
  imgDiv.appendChild(capInDiv);

  //attach link to image
  var link = document.createElement("a");
  link.setAttribute("href", urlOfDetailPage); //navigate to the url
  link.appendChild(imgInDiv); //make the image the link
  imgDiv.appendChild(link); //place the link inside of each div
  document.body.appendChild(imgDiv); //then appd to body, document.body.appendChild
  main.appendChild(imgDiv); //append each of the imgDiv to the main div

  //fav buttons
  var favbutton = document.createElement('button');
  favbutton.setAttribute("class", "material-icons");
  favbutton.setAttribute("id", "icon" + i);
  favbutton.setAttribute("onclick", "vaykay" + i + "();");
  favbutton.innerHTML = 'favorite_border';
  imgDiv.appendChild(favbutton);

  var favbutton2 = document.createElement('button');
  favbutton2.setAttribute("class", "material-icons colored");
  favbutton2.setAttribute("id", "color" + i);
  favbutton2.setAttribute("style", "display: none");
  favbutton2.innerHTML = 'favorite';
  imgDiv.appendChild(favbutton2);


  var unfavbutton = document.createElement('button');
  unfavbutton.setAttribute("class", "material-icons");
  unfavbutton.setAttribute("id", "icons" + i);
  unfavbutton.setAttribute("onclick", "novaykay" + i + "();");
  unfavbutton.setAttribute("style", "float: right");
  unfavbutton.innerHTML = 'close';
  imgDiv.appendChild(unfavbutton);
  
}
//cookies


function setCookie(cname,cvalue,exdays) {
  var d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  var expires = "expires=" + d.toGMTString();
  document.cookie = cname+"="+cvalue+"; "+expires;
}
function getCookie(cname) {
var name = cname + "=";
var ca = document.cookie.split(';');
for(var i=0; i<ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0)==' ') c = c.substring(1);
    if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
    }
}
return "";
}

function checkCookie() {
  for (var i = 0; i < imgs.length; i++) {
    var vaykay =getCookie("image"+ i);
    if (vaykay != "") {
      document.getElementById("icon" + i).remove();
      document.getElementById("color" + i).style.display = "inline-block";
    }
  }
  }

  function favAlert()
  {
      window.location.href = "Assignment-3/html/detail.html";
	
  }
  function unfavAlert()
  {
      
      window.location.reload();
	
  }
  
  function vaykay0(){
      var vaykay=getCookie("image0");
      vaykay = "yokohama.jpg";
    setCookie("image0", vaykay, 30);
    favAlert();
      
  }
  function novaykay0(){
      var vaykay=getCookie("image0");
      vaykay = "";
      setCookie("image0", vaykay, 30);
    unfavAlert(title[0]);
  }
  /////////
  function vaykay1(){
      var vaykay=getCookie("image1");
      vaykay = "ebisu.jpg";
    setCookie("image1", vaykay, 30);
    favAlert(title[1]);
      
  }
  function novaykay1(){
      var vaykay=getCookie("image1");
      vaykay = "";
      setCookie("image1", vaykay, 30);
      unfavAlert(title[1]);
  }
  /////////
  function vaykay2(){
      var vaykay=getCookie("image2");
      vaykay = "shibuya.jpg";
    setCookie("image2", vaykay, 30);
    favAlert(title[2]);
      
  }
  function novaykay2(){
      var vaykay=getCookie("image2");
      vaykay = "";
      setCookie("image2", vaykay, 30);
      unfavAlert(title[2]);
  }
  /////////
  function vaykay3(){
      var vaykay=getCookie("image3");
      vaykay = "sumika.jpg";
    setCookie("image3", vaykay, 30);
    favAlert(title[3]);
      
  }
  function novaykay3(){
      var vaykay=getCookie("image3");
      vaykay = "";
      setCookie("image3", vaykay, 30);
      unfavAlert(title[3]);
  }
  /////////
  function vaykay4(){
      var vaykay=getCookie("image4");
      vaykay = "omusubi.jpg";
    setCookie("image4", vaykay, 30);
    favAlert(title[4]);
      
  }
  function novaykay4(){
      var vaykay=getCookie("image4");
      vaykay = "";
      setCookie("image4", vaykay, 30);
      unfavAlert(title[4]);
  }
  /////////
  function vaykay5(){
      var vaykay=getCookie("image5");
      vaykay = "coco.jpg";
    setCookie("image5", vaykay, 30);
    favAlert(title[5]);
      
  }
  function novaykay5(){
      var vaykay=getCookie("image5");
      vaykay = "";
      setCookie("image5", vaykay, 30);
      unfavAlert(title[5]);
  }
  /////////
