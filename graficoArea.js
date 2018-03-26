function desenharGraficoArea(){

//grafico de area
 var tabela = google.visualization.arrayToDataTable([
          ['Ano', 'Entradas', 'Saídas'],
          ['2013',  1000,      400],
          ['2014',  1170,      460],
          ['2015',  660,       1120],
          ['2016',  1030,      540]
        ]);

        var opcoes = {
        	height: 300,
        	width: 650,
          	title: 'Entradas e saídas anuais',
          	hAxis: {title: 'Ano',  titleTextStyle: {color: '#333'}},
          	vAxis: {minValue: 0}
        };

        var grafico = new google.visualization.AreaChart(document.getElementById('graficoArea'));
        grafico.draw(tabela, opcoes);
}