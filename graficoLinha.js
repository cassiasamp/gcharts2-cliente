function desenharGraficoLinha(){
//grafico de linha
	tabela = new google.visualization.DataTable();
	//colunas da tabela
	tabela.addColumn('string','ano');
	tabela.addColumn('number', 'Conta poupança');
	tabela.addColumn('number', 'Conta salário');
	tabela.addColumn('number', 'Conta corrente');
	tabela.addColumn('number', 'Cartão de crédito');
	//linhas da tabela
		tabela.addRows([
			['2012', 200, 275, 343, 470],
			['2013', 221, 340, 380, 476],
			['2014', 343, 331, 376, 450],
			['2015', 442, 391, 387, 510],
			['2016', 465, 400, 412, 532]
		]);
	//opcoes que customizam o grafico
		var opcoes = {
			title: 'Quantidade de contas abertas por ano',
			width: 950,
			height: 430,
			vAxis: 
				{
				format: 'currency', 
				gridlines: {
							count:5, 
							color: 'transparent'
							}
				},
			legend: 
				{
					position: 'right', 
					maxLines: 1
				},
			chartArea:
				{
					left: 155,
					top: 100,
					width:'60%',
					height:'70%'
				},
			titleTextStyle: 
				{ 
					color: '#5e5851',
					fontName: 'Arial',
					fontSize: 20,
					bold: true 
				}
			}


	var grafico = new google.visualization.LineChart(document.getElementById('graficoLinha'));
	grafico.draw(tabela, opcoes);

 }