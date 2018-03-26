function desenharGraficoBarrasSocket(){

		//grafico de barras com socket e json
	const socket = io.connect('https://gcharts2-servidor.herokuapp.com/');
	
	
	 var graficoBarra = new google.visualization.BarChart(document.getElementById('graficoBarrasJson'));

	socket.on('atualizaBarras', function(dadosJson){
	      var tabela = new google.visualization.DataTable(dadosJson);

		 var opcoesBarra = {
		      title: 'Usuários e Poupanças',
		      height: 400,
		      width: 800,
		      legend: 'none',
		      format: 'currency',
		      hAxis: {
			gridlines: {
			  color: 'transparent'
			},
			textPosition: 'none'
		      },
		      annotations: 
		      {
			alwaysOutside: true
		      }
    		}

	      tabela.sort([{ column: 1, desc: true }]);
		graficoBarra.draw(tabela, opcoesBarra);
			
		});
}