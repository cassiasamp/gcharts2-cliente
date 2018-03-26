function desenharGraficoColunhasEmpilhadas(){

//grafico de colunas
/* no contexto do Bytebank, poderíamos falar que o banco passou a oferecer aos clientes o benefício de milhas (ou pontos). 
 Aí podemos montar um gráfico que mostra quantas milhas um usuário conseguiu juntar a cada mês. */
 /*o Bytebank costuma aumentar o limite de crédito quanto mais a pessoa usa o cartão. 
 Assim, faríamos no eixo y os valores dos limites e no eixo x tipo *1º aumento*, *2º aumento*,... 
 aí, o gráfico mostraria as categorias de gastos, se cresceu ou diminuiu conforme o usuário recebeu um aumento de crédito. 
 Acho que seria um gráfico interessante para o banco, nem tanto para o usuário final, 
 mas até aí podemos falar que eles pediram para que montássemos uma visualização para uma apresentação institucional, 
 onde eles queriam observar se as pessoas passam a gastar mais, conforme recebem mais crédito e em que áreas especificamente.*/
//grafico de colunas empilhadas

    var tabela = google.visualization.arrayToDataTable([	

      	['aumentos','1 aumento', '2 aumento', '3 aumento', '4 aumento', '5 aumento',
         '6 aumento', { role: 'annotation' } ],
        [new Date('2012, 12, 16'), 10, 24, 20, 32, 18, 5, ''],
        [new Date('2013, 12, 16'), 16, 22, 23, 30, 16, 9, ''],
        [new Date('2014, 12, 16'), 28, 19, 29, 30, 12, 13, '']
			
	]);

	//opcoes que customizam o grafico
		var opcoes = {

			title:'Aumentos por mês',
			height: 400,
			width: 800,
			legend: 'labeled',	
			isStacked: 'absolute',
			vAxis: {minValue: 0, gridlines: {color:'transparent'}},
			hAxis: { gridlines: { count: 0 } },
      bar: { groupWidth: '25%' }
      
		};

	//desenhando grafico
	var grafico = new google.visualization.ColumnChart(document.getElementById('graficoColunasEmpilhadas'));
			grafico.draw(tabela, opcoes);
}