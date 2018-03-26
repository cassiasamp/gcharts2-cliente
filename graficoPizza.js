function desenharGraficoPizza(){

//grafico de pizza
	var tabela = new google.visualization.DataTable();
	//colunas da tabela
	tabela.addColumn('string','categorias');
	tabela.addColumn('number', 'valores');
	//linhas da tabela
		tabela.addRows([
			['Educação',2000],
			['Transporte',500],
			['Lazer',230],
			['Saúde',50],
			['Cartão de crédito',900],
			['Alimentação',260]
		]);	
	//opcoes que customizam o grafico
		var opcoes = {
			title:'Tipos de Gastos',
			height: 400,
			width: 800,
			is3D: true,
			legend: 'labeled',
			pieSliceText: 'value',
			//colors:['grey', 'red', 'yellow', 'blue', 'pink', 'purple']
			slices: 
				{
					1:{color:'grey'},
					2:{color:'#a6a6a6'},
					4:{offset: 0.4},
					3:{color:'grey'},
					5:{color:'grey'}
				}
			};
	//desenhando grafico
	var grafico = new google.visualization.PieChart(document.getElementById('graficoPizza'));
            grafico.draw(tabela, opcoes);
    
    }