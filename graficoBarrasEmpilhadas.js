function desenharGraficoBarrasEmpilhadas(){
    //grafico de barras empilhadas
	var tabela = new google.visualization.DataTable();	

	tabela.addColumn('date','anos');
	tabela.addColumn('number','Conta poupança');
	tabela.addColumn('number','Conta salário');
	tabela.addColumn('number','Conta corrente');
	tabela.addColumn('number','Cartão de crédito');

	tabela.addRows([
		[new Date('2012'),600,130,230,700],
		[new Date('2013'),200,175,210,150],
		[new Date('2014'),150,500,220,900]
	]);
    
   /* var tabela = google.visualization.arrayToDataTable(
		[	

			['Conta poupança','Conta salário','Conta corrente','Cartão de crédito'],
			[600, 500, 230, 900]
			
		]);*/

	//opcoes que customizam o grafico
		var opcoes = {

			title:'Tipos de contas por categoria',
			height: 400,
			width: 900,
			legend: 'labeled',	
			isStacked: 'absolute',
			bar: { groupWidth: '55%' },
			hAxis: {minValue: 0, gridlines: {color:'transparent'}},
			//vAxis: { gridlines: { count: 3 } }
			//vAxis: {format: 'yy'}
		};

	//desenhando grafico
	var grafico = new google.visualization.BarChart(document.getElementById('graficoBarrasEmpilhadas'));
			grafico.draw(tabela, opcoes);
}