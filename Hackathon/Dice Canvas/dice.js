document.addEventListener("DOMContentLoaded",function(){
    const canvas=document.getElementById("dicecanvas");
    const context=canvas.getContext('2d');
    function drawDiceFace(number){
        context.clearRect(0,0,canvas.width,canvas.height);
        context.fillStyle='white';
        context.fillRect(0,0,canvas.width,canvas.height);
        context.fillStyle="black";
        const dotRadius=10;
        const dotPositions={
            1 : [[100,100]],
            2 : [[50,50],[150,150]],
            3 : [[50,50],[100,100],
        [150,150]],
        4 : [[50,50],[150,50],
    [50,150],[150,150]],
    5 : [[50,50],[150,50],
[50,150],[150,150],[100,100]],
6 : [[50,50],[50,100],[50,150],[150,50],[150,100],[150,150]]
        };
        if(dotPositions[number]){
        dotPositions[number].forEach(([x,y])=>
            {
                context.beginPath();
                context.arc(x,y,dotRadius,0,2*Math.PI);
                context.fill();
            });
        }
    }
    function rollDice(){
        return Math.floor(Math.random()*6)+1;
    }
    document.addEventListener('keydown',function(event){
        if(event.code==='Space'){
            const diceNumber=rollDice();
            drawDiceFace(diceNumber);
        }
    });
   drawDiceFace(rollDice());
});