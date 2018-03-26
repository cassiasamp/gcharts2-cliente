function desenharGraficoColunasPlanilha() {
//spreadsheets

    var query = new google.visualization.Query('https://docs.google.com/spreadsheets/d/13epzrwlE6qfX8piGd2545Evztpl_S0eGvHDp4GhHUWM/gviz/tq?&range=A1:B7');
    query.send(handleQueryResponse);
      
  
  function handleQueryResponse(response) {
    var tabela = response.getDataTable();
    var opcoes = {
                    title: 'Grafico populado por tabela do google charts', 
                    vAxis:{
                            gridlines:{color:'transparent'}
                        }, 
                    width:900, 
                    height:500, 
                    legend: 'none'
                };
    var grafico = new google.visualization.ColumnChart(document.getElementById('graficoPlanilha'));
    grafico.draw(tabela, opcoes);
    }
}