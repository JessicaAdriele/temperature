var TempService = {
    
    getCalc: function(temp,callback){
        $.ajax({
            url: 'BackEnd/TempController.class.php',
            data: {'temp': temp},
            success: function(result) {
                callback(parseFloat(result));
            },
            error: function() {
		      	callback(null);
            }
		});
    }
}