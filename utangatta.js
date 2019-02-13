<script>
var audio = new Audio("1.mp3" ) ;

audio.oncanplaythrough = function(){
audio.play();
}

audio.loop = true;

audio.onended = function(){
audio.play();
}

</script>

<input type="image" src="1.gif" onclick="audio.play()">
