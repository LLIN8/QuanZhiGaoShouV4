    function checkFrame() {
        var x = $('iframe[src][src=""]');

        x[0].style.display = "none";
    }

    function changeBackgroundColor() {
        var teamColor = ["red", "green", "blue", "black", "grey"];
        var teamNameColor = ["rgb(150,0,0)", "rgb(0,255,0)", "rgb(0,229,186)", "rgb(200,0,0)", "rgb(0,0,0)"]

        var teamBackgroundColor = document.getElementsByTagName('h4');

        for (var i = 0; i < teamBackgroundColor.length; i++) {
            teamBackgroundColor[i].style.backgroundColor = teamColor[i];
            teamBackgroundColor[i].style.color = teamNameColor[i];
        }
    }
    
    changeBackgroundColor();
    checkFrame();
    
    