var min=0;var prev_min=0;
var sec=0;var prev_sec=0;
var dsec=0;var prev_dsec=0;
var lapno=0;
var clockstatus = 0;
var check;var previouslap;
function startandstop()
{
if(clockstatus == 0)
{clockstatus  = 1;
document.getElementById('startandstopbutton').value = 'stop';
check = setInterval(call_time,100);
}
else 
{
clockstatus = 0;
document.getElementById('startandstopbutton').value = 'start';
clearInterval(check);
}
}
function call_time()
{ dsec++;
if(dsec>9)
    {   sec++;
        dsec=0;
	}
if(sec>59)
{
sec=0;min++;
}
var watch;
if(min<10)
	watch = '0'+min;
else
	watch = min;
if(sec<10)
	watch += ':0'+sec;
else
	watch += ':'+sec;
if(dsec<10)
	watch += ':0'+dsec;
else
	watch += ':'+dsec;

document.getElementById("stopwatch").value = watch;
}
function resetstopwatch()
{
min = sec = dsec = lapno = 0;
if(clockstatus==1) clockstatus=0;
document.getElementById("stopwatch").value="00:00:00";
clearInterval(check);
document.getElementById('startandstopbutton').value = 'start/stop';
document.getElementById("lapdetails").value = '';
}

function marklap()
{	
	if(clockstatus==1){lapno++;
           document.getElementById("lapdetails").value += timediff() + '\n' + lapno +'. '+ document.getElementById("stopwatch").value  ;
      prev_min=min;
      prev_sec=sec;
      prev_dsec=dsec;
     }    
}
function timediff()
{
if(lapno == 1)return '';

var split;
var diff_dsec,diff_sec,diff_min;
if((dsec - prev_dsec) < 0){
		diff_dsec = dsec - prev_dsec + 10;
prev_sec++;}
else
	diff_dsec = dsec - prev_dsec;
if((sec - prev_sec)<0){
	diff_sec = sec - prev_sec + 60;
prev_min++;}
else
	diff_sec = sec - prev_sec;

diff_min = min - prev_min;

if(diff_min<10)
	split = '	  +0'+diff_min;
else
	split = '	+'+diffmin;
if(diff_sec<10)
	split += ':0'+diff_sec;
else
	split += ':'+diff_sec;
if(diff_dsec<10)
	split += ':0'+diff_dsec;
else
	split += ':'+diff_dsec;

return split;
}






