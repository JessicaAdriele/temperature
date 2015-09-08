var TempController = {
    
    init: function(){
        TempController.setForm();
    },
    
    setForm: function(){
        var form = document.querySelector('form');
        form.addEventListener('submit', function(event){
             TempController.calculateTemperature(form);                
             event.preventDefault();             
                             
        });       
    },
    
    calculateTemperature: function(form){
        var temp = parseFloat(form.value.value);
        var result = 0;
        
        var callback = function(result){
            TempController.showResult(result);    
        };
        
        TempService.getCalc(temp,callback);
    },
        
    showResult: function(result){
        var spanResult = document.querySelector('.result');
		spanResult.innerHTML = result.toFixed(2);
    }
    
}

// inicialização
TempController.init();