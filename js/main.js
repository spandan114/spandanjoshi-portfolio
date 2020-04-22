var i = 0;
        var txt = "Hey There, I am Spandan Joshi";
        var speed = 130;
        
        function typeWriter() {
          if (i < txt.length) {
            document.getElementById("demo").innerHTML += txt.charAt(i);
            i++;
            setTimeout(typeWriter, speed);
          }
        }
        
        typeWriter();



        