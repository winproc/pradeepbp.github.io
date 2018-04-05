
var img = document.querySelector('img');

img.onclick = function(){

                var my_img = img.getAttribute('src');
                if(my_img === 'images/daffodils.jpeg'){
                    
                    img.setAttribute('src', 'images/daisy.jpeg');
                    }
                else{
                    
                    img.setAttribute('src', 'images/daffodils.jpeg');
                    }
                    
            }



var head = document.querySelector('h1');
var butt = document.querySelector('button');

//function to set the username
function setName(){
    var name = prompt('Enter your name:');
    localStorage.setItem('new_name', name);
    head.textContent = 'Welcome, ' + name + '!';
}



//if username is not available, then set it
if(!localStorage.getItem('new_name')){
    setName();
}
else{
    var stored_name = localStorage.getItem('new_name');
    head.textContent = 'Welcome, ' + stored_name + '!';

}



//now attach an event with button so that user can set the name
butt.onclick = function() {
    setName();
}

