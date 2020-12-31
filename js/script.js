$(document).ready(function(){

	var generate = new QRCode(document.getElementById('qrcode'));

	$("#genBttn").click(function(){

	var data = $("#userInput").val();

	generate.makeCode(data);
	});

	$("#downloadBttn").click(function(){

		$source = $("#qrcode img").attr('src');

		if($source === undefined){
			alert("Input Text First!");
		}else{
			download($source,"qrcode.png","image/png");
		}

	});
});
