$(document).ready(function(){
    $("#btn1").click(function(){
       $("#div1").animate({
        opacity : 0.0
       },80000)
    })
})
$(document).ready(function(){
    $("#btn2").click(function(){
       $("#div1").animate({
       opacity : 1.0
       },80000)
    })
})