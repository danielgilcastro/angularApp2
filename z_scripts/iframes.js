//chamando a função que esta na pagina pai pelo iframe

function testePai() { //na pagina pai
    console.log("teste da função que esta na pai");
}

window.parent.testePai(); //na pagina filho



//chamando a função que esta na pagina do iframe pela a pagina atual
$('#myIframe')[0].contentWindow.minhaFuncao();