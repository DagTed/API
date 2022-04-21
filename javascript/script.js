var i = 0;
const url ="https://friends-quotes-api.herokuapp.com/quotes";
const fimg = document.getElementById('image');
const fchar = document.getElementById('charname');
const fquote = document.getElementById('quote');
var img = ["../images/chandler-bing_1.jpg", "../images/monica_1.jpg", "../images/phoebe_3.jpg", "../images/ross_1.jpg", "../images/joey_1.jpg"]
function init(){
    fetch(url).then(function (response){
        return response.json();
    }).then(function (data){
        console.log(data);
        fimg.src = images(data[i].character);
        fchar.innerHTML = data[i].character;
        fquote.innerHTML = data[i].quote;
    }).catch(function(error){
        console.error('Something went wrong retrieving the quotes');
        console.error(error);
    });
}
function images(dimg){
    if(dimg == "Chandler"){
        return img[0];
    }
    else if(dimg == "Monica"){
        return img[1];
    }
    else if(dimg == "Phoebe"){
        return img[2];
    }
    else if(dimg == "Ross"){
        return img[3];
    }
    else if(dimg == "Joey"){
        return img[4];
    }
    else if(dimg == "Rachel"){
        return img[5];
    }
    else{
        return img[6];
    }
}

function next(){
    i++;
    if(i>=18){
        i=0;
    }
    init();
       
}
function previous(){
    i--;
    if(i<=0){
        i=18;
    }
    init();
    
}
 
 window.onload = function showquotes(){
    init();
    document.getElementById("nextbtn").addEventListener("click", next);
    document.getElementById("prevbtn").addEventListener("click", previous);
}





 

