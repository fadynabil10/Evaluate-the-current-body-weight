$(document).ready(function(){
 var name_val,weight_val, height_val,avg;
$(window).load(function(){
   $('#page_1').fadeIn(2000);    
});
    
$("#page_1 .form_1 form").submit(function(){
    var name=/^[a-zA-Z]*$/.test($("#name").val().replace(' ',''));
    var weight=/^-?\d*(\.\d+)?$/.test($("#weight").val());
    var height=/^-?\d*(\.\d+)?$/.test($("#height").val());
       
    if(name.toString()=="true"&&weight.toString()=="true"&&height.toString()=="true"){           
        $('#page_1').hide(100);
        $('#page_2').show(1000); 
        name_val=$("#name").val();
        weight_val=Number($("#weight").val());
        height_val=Number($("#height").val());
        avg=weight_val/Math.pow(height_val,2);
        var result;
        if(avg<18.5)
        {
            result="Low";
        }
        if(avg>18.5&&avg<25){
            result="Moderate";
        }
        if(avg>25&&avg<30)
        {
            result="Hight";
        }
        if(avg>30){
            result="Very High";
        }
        
     $("#result").text(result);
    }
    else
    {
           
            var alrt="";
            if(name.toString()!="true"){
                if(alrt==""){
               alrt+="the name is not correct  ";
                }
                else
                {
                    alrt+="and the name is not correct  ";
                }
            }
            if(weight.toString()!="true"){
                if(alrt==""){
               alrt+="the weight is not correct  ";
                }
                else
                {
                    alrt+="and the weight is not correct  ";
                }
            }
            if(height.toString()!="true"){
                if(alrt==""){
               alrt+="the height is not correct  ";
                }
                else
                {
                    alrt+="and the height is not correct  ";
                }
            }
            alert(alrt);
    }
    

    return false;
     
 });
$("#page_2 .form_1 form").submit(function(){
     
    $('#page_2').slideUp(300);
    $('#page_3').slideDown(1000); 
    return false;
     
 });    
});