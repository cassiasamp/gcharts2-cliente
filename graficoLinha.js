function desenharGraficoLinha(){
//grafico de linha
	tabela = new google.visualization.DataTable();
	//colunas da tabela
	tabela.addColumn('string','ano');
	tabela.addColumn('number', 'Conta poupança');
	tabela.addColumn('number', 'Conta salário');
	tabela.addColumn('number', 'Conta corrente');
	tabela.addColumn('number', 'Cartão de crédito');
	tabela.addColumn('number', 'Conta de cartão');
	//linhas da tabela
		tabela.addRows([
			['2012', 200, 275, 343, 470, 322],
			['2013', 221, 340, 380, 476, 346],
			['2014', 343, 331, 376, 450, 351],
			['2015', 442, 391, 387, 510, 357],
			['2016', 465, 400, 412, 532, 360]
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
					maxLines: 1,
					textStyle: 
						{
							color: '#928e8a', 
							fontSize: 16
						}
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
				},
			series: {
						0: { color: '#3682ff', lineWidth: 4 },
						1: { color: '#a6a6a6' },
						2: { color: '#a6a6a6' },
						3: { color: '#a6a6a6' },
						4: { color: '#a6a6a6' },
						5: { color: '#a6a6a6' }
				  },
			vAxis: { 
						maxValue: 560
					}
			}


	var grafico = new google.visualization.LineChart(document.getElementById('graficoLinha'));
	grafico.draw(tabela, opcoes);

 }