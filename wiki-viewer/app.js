// run jQuery
$(document).ready(function(){
    // when search is clicked or entered from code
    $("#search").click(function(){
        
        // get search term
        var searchTerm = $("#searchTerm").val();
    
        var API_URL = "https://en.wikipedia.org/w/api.php?action=opensearch&search="+searchTerm+"&format=json&callback=?";
        
        $.getJSON(API_URL, function(data){
            $("#output").html("");
            for(var i = 0; i < data[1].length; i++){
               $("#output").prepend("<li><a href="+data[3][i]+">"+data[1][i]+"</a><p>"+data[2][i]+"</p></li>"); 
            }
        });
        $("#searchTerm").val("");
    });
    $("#searchTerm").keypress(function(e){
        if(e.which == 13) {
            $("#search").click();
        } 
    });
});

