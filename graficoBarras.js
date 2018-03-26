function desenharGraficoBarrasEstatico(){
    //grafico de barras
	var dadosJson = $.ajax({
		url: 'https://gist.githubusercontent.com/cassiass/818b5ffe45b97d2eee6c07733666d3d3/raw/3d43823ceea735ddbd0590fda254214fb8613273/dados.json',
		dataType: 'json',
		async: false
	}).responseText

	var tabela = new google.visualization.DataTable(dadosJson);
	
	//ordenando a tabela pela coluna de indice 1
		tabela.sort([{ column: 1, desc: true }]);

		var opcoes = {
			title: 'Tipos de Gastos',
			height: 400,
			width: 800,
			vAxis: {
					gridlines: 
					{ 
						count: 0, color: 'transparent'
					}},
			legend: 'none',
			hAxis: { 
					gridlines: 
						{
							color: 'transparent'
						},
					format: 'currency',
					textPosition: 'none'
					},
			annotations: 
					{
						alwaysOutside: true
					}
		}	

	
		var grafico = new google.visualization.BarChart(
			document.getElementById('graficoBarras'));
		grafico.draw(tabela, opcoes);
}