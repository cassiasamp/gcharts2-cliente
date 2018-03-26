function desenhaGraficoDashboardComposto(){   
 
//filtro com colunas tipo 2
	var controle = new google.visualization.ControlWrapper({
	    controlType: 'ChartRangeFilter',
	    containerId: 'amplitudeDoFiltro',
	    options: {
		//filtrar pelo eixo da data
		    'filterColumnIndex': 0,
            ui: {
                    chartType: 'LineChart',
                    chartOption: {
                        chartArea: {width: '90%'},
                        hAxis: {baselineColor: 'none'}},
                    //mostrar os valores
                    chartView: {
                        columns: [0, 3]},
                    // 1 dia em milisegundos = 24 * 60 * 60 * 1000 = 86,400,000
                    minRangeSize: 86400000
                }
            },
	      // limite inicial: 2012-02-09 to 2012-03-20.
	      state: {range: {start: new Date(2012, 1, 9), end: new Date(2012, 2, 20)}}
	    });


	    var grafico = new google.visualization.ChartWrapper({
	      chartType: 'ColumnChart',
	      containerId: 'graficoDoFiltro',
	      options: {
                        //usar a mesma largura do grafico para o controle, alinhando os dois
                        chartArea: { height: '80%', width: '90%' },
                        hAxis: { slantedText: false },
                        vAxis: {viewWindow: {min: 0, max: 2000}},
                        legend: { position: 'none' },
                        title: 'Selecionar o mês para ver o balanço (precisa ainda ser melhorado)',
                        width: 915,
                        height: 300
	                },
	
	      //converter a primeira coluna de data para string
	      view: {
                    columns: [
                        {
                            calc: function(tabela, rowIndex) {
                            return tabela.getFormattedValue(rowIndex, 0);
                        },
                        type: 'string'}, 1, 2, 3, 4]
                }
	    });


	    var tabela = new google.visualization.DataTable();
	    tabela.addColumn('date', 'Date');
	    tabela.addColumn('number', 'Saídas');
	    tabela.addColumn('number', 'Entradas');
	    tabela.addColumn('number', 'Baixa');
	    tabela.addColumn('number', 'Crescimento');


	    //criando dados randômicos e adicionando na tabela
	    var entrada, saída = 300;
	    var baixa, crescimento;
	    for (var dia = 1; dia < 121; ++dia) {
	      var mudança = (Math.sin(dia / 2.5 + Math.PI) + Math.sin(dia / 3) - Math.cos(dia * 0.7)) * 150;
	      mudança = mudança >= 0 ? mudança + 10 : mudança - 10;
	      entrada = saída;
	      saída = Math.max(50, entrada + mudança);
	      baixa = Math.min(entrada, saída) - (Math.cos(dia * 1.7) + 1) * 15;
	      baixa = Math.max(0, baixa);
	      crescimento = Math.max(entrada, saída) + (Math.cos(dia * 1.3) + 1) * 15;
	      var data = new Date(2012, 0 ,dia);
	      tabela.addRow([data, Math.round(baixa), Math.round(entrada), Math.round(saída), Math.round(crescimento)]);
	    }

    
	    var dashboard = new google.visualization.Dashboard(document.getElementById('dashboardDoFiltro'));
	    dashboard.bind(controle, grafico);
	   	dashboard.draw(tabela);
};