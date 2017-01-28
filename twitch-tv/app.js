// run jquery
$(document).ready(function(){
    // free code camp stream info and status api call 
    
    var API_URL_FCC = "https://wind-bow.gomix.me/twitch-api/streams/freecodecamp";
    var followers = [
        "ESL_SC2",
        "OgamingSC2",
        "cretetion",
        "freecodecamp",
        "storbeck",
        "habathcx",
        "RobotCaleb",
        "noobs2ninjas",
    ];
    var offline = [];
    
    
    $.getJSON(API_URL_FCC, function(fcc){
        if(fcc.stream === null){
            $("#fccStatus").html("Free Code Camp is Currently OFFLINE!");
        } else {
            $("#fccStatus").html("Free Code Camp is Currently ONLINE!");
        }
    });
    
    for(var i = 0; i < followers.length; i++){
        var API_URL_STREAMS = "https://wind-bow.gomix.me/twitch-api/streams/"+followers[i]+"/?callback=?";
        
        var API_URL_CHANNELS = "https://wind-bow.gomix.me/twitch-api/channels/"+followers[i]+"/?callback=?"
        
        $.getJSON(API_URL_CHANNELS, function(data){
            
            var logo = data.logo;
            var status = data.status;   
            var name = data.display_name;
            
            $("#followerInfo").prepend("<div class='row'>" + "<div class='col-md-4'>" + "<img src='" + logo + "'/>" + "</div>" + "<div class='col-md-4'>" + name + "</div>" + "<div class='col-md-4'>" + status + "</div></div>");
        });
        
        $.getJSON(API_URL_STREAMS, function(streamdata){
            if(streamdata.stream !== null){
                
            }
        });
        
    }
});