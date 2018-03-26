function desenharGraficoAreasEmpilhadasGastos(){
    //grafico de area com gastos
var tabela = google.visualization.arrayToDataTable([
        ['Faculdade', 'Transporte', 'Lazer', 'Internet', 'Cartão de crédito',
         'Alimentação', { role: 'annotation' } ],
        ['2014', 10, 24, 20, 32, 18, ''],
        ['2015', 16, 22, 23, 30, 16, ''],
        ['2016', 28, 19, 29, 30, 12, ''],
        ['2017', 28, 19, 29, 30, 12, '']
      ]);


       var opcoes = {	
       		height: 300,
        	width: 650,
         	legend: {position: 'right', maxLines: 3},
          	vAxis: {
            		minValue: 0,
          	},
          	title: 'Gastos por categorias',
          	isStacked: true
        };

      var grafico = new google.visualization.AreaChart(document.getElementById("graficoAreasEmpilhadasGastos"));
      grafico.draw(tabela, opcoes);
}