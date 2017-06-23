document.addEventListener('DOMContentLoaded', function(){
    var button1 = document.getElementById('prevPicture');
    var button2 = document.getElementById('nextPicture');
    
    var allLi = document.querySelectorAll('.slider li');
    
    var numbers = 0;
    
    console.log(button1, button2, allLi, numbers);
    
    var table = allLi[0].classList.add('visible');
    console.log(table);
    
    button1.addEventListener('click', function(event){
        event.preventDefault();
        allLi[numbers].classList.remove('visible');
        
        numbers++;
        console.log('zwiekszamy' + numbers);
        if(numbers>=allLi.length){
            numbers = allLi.length - 1;
            
            console.log('zmniejszamy bo poza ' + numbers);
            
        }
        allLi[numbers].classList.add('visible');
        
        
        
    })
    
    button2.addEventListener('click', function(event){
        event.preventDefault();
        allLi[numbers].classList.remove('visible');
        numbers--;
        if(numbers<0){
            numbers=0;
            
        }
        allLi[numbers].classList.add('visible');
    })
    
}) //koniec funkcji