function selectAjax(){
    $.ajax({
        url : '/food.json', 
        type : "get",
        dataType : "json",
        success : function(food){
            for(let i = 0; i < food.length; i ++){
                render(food[i])
            }
        },
        fail : function(error){
            console.log(error)
        }
    })
}
