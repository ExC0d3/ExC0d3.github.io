function typeWriter(l,s,a,i){
        var track = "";
        var len = s.length;
        var n = 0;
        var aud = new Audio(a);
        $(l).text("");
        var si = setInterval(function(){
        if(!aud.paused){    
            aud.pause();
            aud.currentTime = 0;
        }
        var res = track + s.charAt(n);
        $(l).text(res);
        if(s.charAt(n)!==" "){    
            aud.play();
        }
        track = res;
        if(n===len-1){
            clearInterval(si);
        }
        n = n + 1;
    },i);
}