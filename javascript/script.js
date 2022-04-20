var i = 0;
var imgc = ['../images/chandler-bing_1.jpg', '../images/monica_1.jpg', '../images/phoebe_3.jpg', '../images/ross_1.jpg', '../images/joey_1.jpg']
const url ='https://friends-quotes-api.herokuapp.com/quotes';
//  <img src="${images(data[i].character)}"  class="card-img-top mx-auto d-block" alt="...">
function init(){
    fetch(url).then(function (response){
        return response.json();
    }).then(function (data){
        quote = document.getElementById("quotes");
        quote.innerHTML = `<div class="col-sm-3">
        <div class="card shadow-lg bg-body rounded-3 " style="width: 18rem; height: auto;">
        
        <div class="card-body b-bg"><blockquote class="blockquote">
        <p>"${data[i].quote}"</p>
        <footer class="blockquote-footer">${data[i].character}<cite title="Source Title"> 
        Friends TV Show</cite></footer></blockquote></div></div></div>`;   
        
    }).catch(function(error){
        console.error('Something went wrong retrieving the quotes');
        console.error(error);
    });

}
function images(dimg){
    if(dimg === "Chandler"){
        return imgc[0];
    }
    else if(dimg === "Monica"){
        return imgc[1];
    }
    else if(dimg === "Phoebe"){
        return imgc[2];
    }
    else if(dimg === "Ross"){
        return imgc[3];
    }
    else if(dimg === "Joey"){
        return imgc[4];
    }
    else if(dimg === "Rachel"){
        return imgc[5];
    }
    else{
        return 0;
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
    if(i<0){
        i=18;
    }
    init();
    
}
 window.onload = function showquotes(){
    init();
    document.getElementById("nextbtn").addEventListener("click", next);
    document.getElementById("prevbtn").addEventListener("click", previous);
}





 

