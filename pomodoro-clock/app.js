// Run jquery
$(document).ready(function(){
    
    var buzzer = $("#buzzer")[0];
    var sessionCount = parseInt($("#timeInc").html());
    var breakCount = parseInt($("#breakTimeInc").html());
    
    $("#reset").hide();
    
    $("#start").click(function(){
        var counter = setInterval(timer, 1000);
        sessionCount *= 60
        function timer(){
            
            $("#start, #subTime, #addTime, #subBreakTime, #addBreakTime, #breakTimeInc, #sessionTime, #breakTime").hide();
            $("#timeType").show();
            $("#timeType").html("Session Time: ");
            sessionCount -= 1;
            
            if(sessionCount === 0){
                buzzer.play();
                clearInterval(counter);
                var startBreak = setInterval(breakTimer, 1000);
                $("#timeInc").hide();
            }
            
            if(sessionCount % 60 >= 10){
                $("#timeInc").html(Math.floor(sessionCount/60) + ":" + sessionCount%60);    
            } else {
                $("#timeInc").html(Math.floor(sessionCount/60) + ":" + "0" + sessionCount%60)
            }
            
            
            
            function breakTimer(){
                
                $("#timeType").html("Break Time: ");
                $("#breakTimeInc").show();
                $("#timeType").show()
                breakCount -= 1;
                
                if(breakCount === 0){
                    clearInterval(startBreak);
                    buzzer.play();
                    $("#reset").show();
                    $("#breakTimeInc").hide();
                    $("#timeType").hide();
                }
                
                if(sessionCount % 60 >= 10){
                    $("#timeInc").html(Math.floor(sessionCount/60) + ":" + sessionCount%60);    
                } else {
                    $("#timeInc").html(Math.floor(sessionCount/60) + ":" + "0" + sessionCount%60)
                }
                    
                    $("#breakTimeInc").html(breakCount);
                }
            }
    });
    
    $("#reset").click(function(){
        sessionCount = 25;
        breakCount = 25;
        $("#timeInc").html(sessionCount);
        $("#breakTimeInc").html(breakCount);
        $("#reset, #timeType").hide();
        $("#start, #subTime, #addTime, #subBreakTime, #addBreakTime, #breakTimeInc, #sessionTime, #breakTime, #timeInc").show();
    });
    
    
    $("#subTime").click(function(){
        if(sessionCount >5){
            sessionCount -= 5;
            $("#timeInc").html(sessionCount);
        }
    });
    $("#addTime").click(function(){
            sessionCount += 5;
            $("#timeInc").html(sessionCount);
    });
    
    
    $("#subBreakTime").click(function(){
        if(breakCount >5){
            breakCount -= 5;
            $("#breakTimeInc").html(breakCount);
        }
    });
    $("#addBreakTime").click(function(){
            breakCount += 5;
            $("#breakTimeInc").html(breakCount);
    });
    
});