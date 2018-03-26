function desenharGraficoHistograma() {
//histograma
  var tabela = google.visualization.arrayToDataTable([
    ['cliente', 'idade'],
    ['Andre Da Costa', 22],
    ['Eduarda Boaron', 30],
    ['Giovanna Pelinski', 28],
    ['José Hugo Silva', 29],
    ['Maíra Bortoluzzi', 26],
    ['Fabio Vinicius Barth', 36],
    ['Larissa Dill Gazzola', 61],
    ['Patryck Garcia Prado', 35],
    ['Emilly Almeida', 58],
    ['Arthur Rodrigues Caetano', 27],
    ['Amanda Franco', 49],
    ['Gabriela Boiago Dias', 27],
    ['Matheus Prince', 32],
    ['Alexandre Toshio', 34],
    ['Gabriel Alves Pinheiro', 55],
    ['Vitor Henrique Soares', 21],
    ['Rafaela Cristina Pereira', 39],
    ['Anna Paula Lopes', 56],
    ['Daphne Zilioto', 43],
    ['Flávio Germano', 51],
    ['Ingrid da Costa', 62],
    ['João Elias Oliveira', 41],
    ['Lucas Gomes Viana', 45],
    ['Matheus Fadel', 23],
    ['Milena Zequim', 30],
    ['Tiago João Kavleski', 52],
    ['Sabrina Conceição Silva', 35],
    ['Thomaz Ziemberg', 18]]);

  var opcoes = {
    title: 'Distribuição de clientes por idade',
    legend: { position: 'none' },
    vAxis:{gridlines:{color:'transparent'}},
    width: 900,
    height: 500
  };

  var grafico = new google.visualization.Histogram(document.getElementById('graficoHistograma'));
  grafico.draw(tabela, opcoes);
}