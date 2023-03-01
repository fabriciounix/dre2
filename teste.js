function DRE(){
			var a = document.forms["formulario"]["receitaBruta"].value;
		
			var b = document.forms["formulario"]["impostoVendas"].value;
			
			
			
			var c = document.forms["formulario"]["materiaPrima"].value;
			
			var d = document.forms["formulario"]["mod"].value;
			
			var e = document.forms["formulario"]["depreciacao"].value;
			
			var f = document.forms["formulario"]["cip"].value;
			
			var cpv = parseInt(c) + parseInt(d) + parseInt(d) + parseInt(f);
			
			
			
			var g = document.forms["formulario"]["despesasComerciais"].value;
			
			var h = document.forms["formulario"]["despesasAdministrativas"].value;
			
			var i = document.forms["formulario"]["despesasFinanceiras"].value;
			
			var j = document.forms["formulario"]["amortizacao"].value;
			
			var k = document.forms["formulario"]["juros"].value;
			
			var l = document.forms["formulario"]["irpj"].value;
			
			var m = document.forms["formulario"]["csll"].value;
			
			var n = document.forms["formulario"]["amortizacao"].value;
			
			var resultado = parseInt(a) - parseInt(b);
			
			var lucroBruto = resultado - cpv;
			
			var dos = parseInt(g) + parseInt(h) + parseInt(i) + parseInt(j);
			
			var lajir = lucroBruto - dos;
			
			var lair = lajir - parseInt(k);
			
			var resultadoOL = lair - parseInt(l) - parseInt(m);
			
			var ebitda = lajir + parseInt(n) + parseInt(e);
			
			var fluxoCaixa = resultadoOL + parseInt(j) + parseInt(e);
			
			document.getElementById("teste").innerHTML = "Receita Operacional Líquida:  " + resultado;
			
			document.getElementById("teste2").innerHTML = "cpv  " + cpv;
			
			document.getElementById("teste3").innerHTML = "lucroBruto  " + lucroBruto;
			
			document.getElementById("teste3").innerHTML = "lajir  " + lajir;
			
			document.getElementById("teste4").innerHTML = "lair  " + lair;
			
			document.getElementById("teste5").innerHTML = "resultadoOL  " + resultadoOL;
			
			document.getElementById("teste6").innerHTML = "ebitda  " + ebitda;
			
			document.getElementById("teste7").innerHTML = "fluxoCaixa  " + fluxoCaixa;
			
				
		     alert("Receita Operacional Líquida:  " + resultado + "cpv: " + cpv + "lucor bruto: " + lucroBruto
				+ "lajir " + lajir + "lair " + lair + "resultaod ol: " + resultadoOL + "ebtida "  + ebitda +
				"fluxo caixa : " + fluxoCaixa
			 );
			
			
			
			
		}