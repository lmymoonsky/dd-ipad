$(document).ready(function(){
	  var downloadWapperH = window.screen.height;
	  var ddClientH = downloadWapperH/11;
	  $("#download_wapper").css("height",downloadWapperH+"px");
	  $("#dd_client").css("height",ddClientH+"px");

	addFlip();
    })

function addFlip() {
			var sx = 0;
			var sy = 0;
			var cx = 0;
			var cy = 0;
			var flag = {};
			flag.w = parseInt(screen.width / 3);
			flag.h = parseInt(screen.height / 3);
			document.body.addEventListener('touchstart',_init, false);
			document.body.addEventListener('touchmove',_move, false);
			function _init(evt){
				evt.preventDefault();
				sx = evt.touches[0].screenX; 
				sy = evt.touches[0].screenY;
			}
			function _move(evt){
				cx = evt.touches[0].screenX;
				cy = evt.touches[0].screenY;
				evt.preventDefault(); 
				if((cx < sx) && (sx - cx > flag.w) && (Math.abs(cy - sy) < flag.h)) {
					$('#mask_area').animate({left:'-1800'+'px'},1000,function(){
						document.body.removeEventListener('touchstart',_init);
			            document.body.removeEventListener('touchmove',_move);
			 	       document.body.addEventListener('touchstart', function() {
						}, false);
						document.body.addEventListener('touchmove', function() {
							
						}, false);
					});
				}else if((sx < cx) && (cx - sx > flag.w) && (Math.abs(cy - sy) < flag.h)) {
					$('#mask_area').animate({left:'1800'+'px'},1000,function(){
						document.body.removeEventListener('touchstart',_init);
			            document.body.removeEventListener('touchmove',_move);
			 	       document.body.addEventListener('touchstart', function() {
						}, false);
						document.body.addEventListener('touchmove', function() {
							
						}, false);
					});
				}else if((sy < cy) && (cy - sy > flag.h) && (Math.abs(cx - sx) < flag.w)) {
					$('#mask_area').animate({top:'1800'+'px'},1000,function(){
						document.body.removeEventListener('touchstart',_init);
			            document.body.removeEventListener('touchmove',_move);
			 	       document.body.addEventListener('touchstart', function() {
						}, false);
						document.body.addEventListener('touchmove', function() {
							
						}, false);
					});
				}else if((cy < sy) && (sy - cy > flag.h) && (Math.abs(cx - sx) < flag.w)) {
					$('#mask_area').animate({top:'-1800'+'px'},1000,function(){
						document.body.removeEventListener('touchstart',_init);
			            document.body.removeEventListener('touchmove',_move);
			 	       document.body.addEventListener('touchstart', function() {
						}, false);
						document.body.addEventListener('touchmove', function() {
							
						}, false);
					});
				}
			}
			document.getElementById('close_mask').addEventListener('touchstart',function(evt){
				$('#mask_area').hide();
			},false);
			document.getElementById('look_btn').addEventListener('touchstart',function(evt){
				$('#mask_area').hide();
			},false);
			
        }

    