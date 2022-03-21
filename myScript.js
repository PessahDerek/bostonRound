let countTimes = 0;
$(document).ready(
    $(".prodBg").hover(function(){ 
        this.style.backgroundColor = "orange"
    }, function(){
        this.style.backgroundColor = "#FC7171"
    }),

    $(".productShow img").hover(function(){ 
        $(this).css("transform", "scale(1.2)");
    }, function(){
        $(this).css("transform", "scale(1)");
    }),

    $(".third h1").hover(function(){ 
        $(this).css("color", "#FC7171");
    }, function(){
        $(this).css("color", "#3C3C3C");
    }),

    // drop down menu button 
    $(".dropBtn").click(function(){
        if (countTimes == 0){
            $(".dropDown").css("display", "flex");
            countTimes ++;
        } else {
            $(".dropDown").css("display", "none");
            countTimes = 0;
        }
        
    })
)
