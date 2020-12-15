"use strict";

$(document).ready(function () {
    $("#getJoke").click(function (e) { 
        e.preventDefault();
        $('#output').html('');
        //AJAX
        $.ajax({
            type:"GET",
            url:'http://api.icndb.com/jokes/random',
            dataType:"json",
            success: function(data){
               
                // $("body").css("background-color", "#000000");
                // $("body").css('background-image', 'none'); 
                // let newGif = $("d-flex").html($("container").html() + '<img>',{id:'gif',src:"/Aufgabe/Bilder/gif.gif"});
                // // $("container").prepend($('<img>',{id:'gif',src:"/Aufgabe/Bilder/gif.gif"})); 

            
                $("body").css("background-image","url(/Aufgabe/Bilder/joker_lachend.jpg)"); 
                
                //  //alerts
                $(".alert-danger").toggleClass("d-none");
                $(".alert-light").toggleClass("d-none");
                //Witz abrufen und speichern in array
                new Joke(data.value.id, data.value.joke);
                let lastElement = Joke.getList.length - 1;
                let joke = Joke.getList[lastElement].getJoke; 
                let newP = $("#output").html($("#output").html()+`
                <p> ${joke} <p>
                `);
                newP.css("font-size", "2em"); 
            },
        })
    });
    
   
 
 }); 


