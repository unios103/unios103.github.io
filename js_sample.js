
    function addZero(num){
        if(num<10){
            num='0'+num;
        }
        return num;
    }
    function goTime ()
    {
    var now = new Date();

    var seconds=now.getSeconds();
    seconds=addZero(seconds);

    var minutes=now.getMinutes();
    minutes=addZero(minutes);

    var hours=now.getHours();
    hours=addZero(hours);

    var msg=hours+':'+minutes+':'+seconds;
    document.getElementById('time').innerHTML=msg;
    }   
setInterval('goTime()',1000);