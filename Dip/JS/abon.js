  function fun_fitness(obj){
            if (document.getElementById("hide_fitness").style.display == 'flex') {
                document.getElementById("hide_fitness").style.display = "none";
                document.getElementById("fit").style.color = "white";
            }  
            
            else {
                document.getElementById("hide_fitness").style.display = "flex";
                document.getElementById("fit").style.color = "#ebe42f";
            }
        }

        function fun_gym(obj){
            if (document.getElementById("hide_GYM").style.display == 'flex') {
                document.getElementById("hide_GYM").style.display = "none";
                document.getElementById("gym").style.color = "white";
            }  
            
            else {
                document.getElementById("hide_GYM").style.display = "flex";
                document.getElementById("gym").style.color = "#31d361";
            }
        }

        function fun_speshal(obj){
            if (document.getElementById("hide_Speshal").style.display == 'flex') {
            document.getElementById("hide_Speshal").style.display = "none";
            document.getElementById("speshal").style.color = "white";
            }  
            
            else {
                document.getElementById("hide_Speshal").style.display = "flex";
                document.getElementById("speshal").style.color = "#2dcacf";
            }
        }

        function fun_student(obj){
            if (document.getElementById("hide_Student").style.display == 'flex') {
                document.getElementById("hide_Student").style.display = "none";
                document.getElementById("student").style.color = "white";
            }  
            
            else {
                document.getElementById("hide_Student").style.display = "flex";
                document.getElementById("student").style.color = "#d82727";
            }
        }

        function fun_menu(obj){
            if (document.getElementById("Menu").style.display == 'flex') {
                document.getElementById("Menu").style.display = "none";
            }  
            
            else {
                document.getElementById("Menu").style.display = "flex";
            }
        }

        window.onscroll = function() {scrollFunction()};

        function scrollFunction(obj) {
            if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
                document.querySelector('header').style.height = "30pt";
                document.getElementById("one").style.lineHeight = "30pt";
                document.getElementById("one").style.fontSize = "12pt";
                const search = document.body.querySelector('ul');
                Head = search.querySelectorAll('li a');

                for(let i = 0; i < Head.length; i++){
                    Head[i].style.fontSize = "11pt";
                    Head[i].style.lineHeight = "30pt";
                }
                document.getElementById("point").style.lineHeight = "27pt";
            } 
            else {
                if(document.body.clientWidth > 1300 || document.documentElement.clientWidth > 1300) {
                document.querySelector('header').style.height = "60pt";
                document.getElementById("one").style.lineHeight = "60pt";
                document.getElementById("one").style.fontSize = "30px";
                const search = document.body.querySelector('ul');
                Head = search.querySelectorAll('li a');

                for(let i = 0; i < Head.length; i++){
                    Head[i].style.fontSize = "20pt";
                    Head[i].style.lineHeight = "60pt";
                }
                document.getElementById("point").style.lineHeight = "57pt";
            }

                else if(document.body.clientWidth < 930 || document.documentElement.clientWidth < 930) {
                document.getElementById("menu").style.height = "30pt";
                document.querySelector('header').style.height = "30pt";
                document.getElementById("one").style.lineHeight = "30pt";
                document.getElementById("one").style.fontSize = "15pt";
            }

                else{
                document.querySelector('header').style.height = "40pt";
                document.getElementById("one").style.lineHeight = "40pt";
                document.getElementById("one").style.fontSize = "15pt";
                const search = document.body.querySelector('ul');
                Head = search.querySelectorAll('li a');

                for(let i = 0; i < Head.length; i++){
                    Head[i].style.fontSize = "15pt";
                    Head[i].style.lineHeight = "40pt";
                }
                document.getElementById("point").style.lineHeight = "37pt";
                }
            }
        }

        window.onresize = function() {widthFunction()};
        function widthFunction(obj) {
            if(document.body.clientWidth < 930 || document.documentElement.clientWidth < 930) {
                document.getElementById("Menu").style.display = "none";
                document.getElementById("menu").style.height = "30pt";
                document.querySelector('header').style.height = "30pt";
                document.getElementById("one").style.lineHeight = "30pt";
                document.getElementById("one").style.fontSize = "15pt";
            }
            else if (document.body.clientWidth > 1300 || document.documentElement.clientWidth > 1300){
                document.getElementById("Menu").style.display = "flex";
                document.querySelector('header').style.height = "60pt";
                document.getElementById("one").style.lineHeight = "60pt";
                document.getElementById("one").style.fontSize = "30px";
                const search = document.body.querySelector('ul');
                Head = search.querySelectorAll('li a');

                for(let i = 0; i < Head.length; i++){
                    Head[i].style.fontSize = "20pt";
                    Head[i].style.lineHeight = "60pt";
                }
                document.getElementById("point").style.lineHeight = "57pt";
            }
            else{
                document.getElementById("Menu").style.display = "flex";
                document.querySelector('header').style.height = "40pt";
                document.getElementById("one").style.lineHeight = "40pt";
                document.getElementById("one").style.fontSize = "15pt";
                const search = document.body.querySelector('ul');
                Head = search.querySelectorAll('li a');

                for(let i = 0; i < Head.length; i++){
                    Head[i].style.fontSize = "15pt";
                    Head[i].style.lineHeight = "40pt";
                }
                document.getElementById("point").style.lineHeight = "37pt";
            }

        }