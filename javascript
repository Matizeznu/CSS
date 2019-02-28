# CSS
<html>
<head>
	<script type="text/javascript">
	
	/* funkcja do obliczania średniej */
		function avg(a,b)
		{	return (a+b)/2;
		}
		/* funkcja do obliczania średniej
		function avg_tab (tab){
		var sum = 0;
		console.log (tab);
		for(var i = 0;i<tab.length;i++){
		sum= sum + tab[i];
		}
		return sum / tab.length;
		}
		*/
		document.write(avg(2,10));
		document.write("<br>");
		document.write(avg_tab([2,10]));
		
		function nowe_obliczenie() {
		let a = document.getElementById("c").value;
		let b = document.getElementById("d").value;
		a= parseInt(a);
		b= parseInt(b);
		let c = avg(a,b);
		window.alert(c);
		}
	</script>
</head>
<body>
<div>
	<h1>ŚREDNIA</h1>
		<form action="#" class="">
			<input id="c" type="number" min="0" >
			<input id="d" type="number" min="0" >
			<button onclick="nowe_obliczenie()">OBLICZ </button>
		</form>
</div>
</body>
</html>

