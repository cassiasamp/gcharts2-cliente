function desenharGraficoBolhas() {
//grafico de bolhas
      var tabela = google.visualization.arrayToDataTable([
	['Mês',   'Valor',       'Rendimento', ''],
        ['Jan',    80.66,              1.67, ''],
        ['Fev',    79.84,              1.36, ''],
        ['Mar',    78.6,               1.84, ''],
        ['Abr',    72.73,              2.78, ''],
        ['Mai',    80.05,              2, ''],
        ['Jun',    72.49,              1.7, ''],
        ['Jul',    68.09,              4.77, ''],
        ['Ago',    81.55,              2.96, ''],
        ['Set',    68.6,               1.54, ''],
        ['Out',    78.09,              2.05, ''],
        ['Nov',    78.09,              2.05, ''],
        ['Dez',    78.09,              2.05, '']
      ]);

      var opcoes = {
        title: 'Correlação entre mês, rendimento ' +
               'valor investido (2017)',
        hAxis: {title: 'Valor investido'},
        vAxis: {title: 'Percentual de crescimento'},
        bubble: {textStyle: {fontSize: 11}},
	width: 900,
	height: 500
      };

      var grafico = new google.visualization.BubbleChart(document.getElementById('graficoBolhas'));
      grafico.draw(tabela, opcoes);
}