function desenharGraficoDashboard() {
    //dashboard com controles
    var tabela = google.visualization.arrayToDataTable([
        ['Mês',   'Valores'],
        ['Jan',    80.66 ],
        ['Fev',    79.84 ],
        ['Mar',    78.6  ],
        ['Abr',    72.73 ],
        ['Mai',    80.05 ],
        ['Jun',    72.49 ],
        ['Jul',    68.09 ],
        ['Ago',    81.55 ],
        ['Set',    68.6  ],
        ['Out',    78.09 ],
        ['Nov',    78.09 ],
        ['Dez',    78.09 ]
  ]);

  //criando o dashboard
  var dashboard = new google.visualization.Dashboard(document.getElementById('graficoDashboard'));

  //criando o filtro com seleção e passando as opções
  var filtro = new google.visualization.ControlWrapper({
        controlType: 'NumberRangeFilter',
        containerId: 'filtroDashboard',
        options: {
                    'filterColumnLabel': 'Valores'
                }
  });

  //criando o gráfico de colunas, passando as opcoes
  var graficoColunas = new google.visualization.ChartWrapper({
        chartType: 'ColumnChart',
        containerId: 'colunaDashboard',
        options: {
                    width: 900,
                    height: 600,
                    legend: 'right',
                    title: 'Valores de crédito por mês'
        }
  });


//estabelecendo as dependências, passando os parâmetros para mostrar que o grafico de colunas
//segue o que foi estabelecido pelo filtro
  dashboard.bind(filtro, graficoColunas);

  //funcao que desenha o dashboard
  dashboard.draw(tabela);
	  
}