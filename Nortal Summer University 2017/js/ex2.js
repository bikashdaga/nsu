function send(){var e=document.getElementById("start").value,t=document.getElementById("end").value,n=calculateSpan(e,t);printOutput(e,t,n),emptyFields()}function calculateSpan(e,t){var n=(new Date(t)-new Date(e))/1e3/60/60/24>150&&(new Date(t)-new Date(e))/1e3/60/60/24<300?(new Date(t)-new Date(e))/1e3/60/60/24+1:(new Date(t)-new Date(e))/1e3/60/60/24;return n=new Date(e)<new Date(15828408e5)&&new Date(t)>=new Date(15829272e5)?n-1:n}function printOutput(e,t,n){document.getElementById("startValue").innerHTML+=e?e+"<br/>":"null<br/>",document.getElementById("endValue").innerHTML+=t?t+"<br/>":"null<br/>",document.getElementById("spanValue").innerHTML+=n?n+"<br/>":"null<br/>"}function emptyFields(){document.getElementById("start").value="",document.getElementById("end").value=""}