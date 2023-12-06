
function imc ()
{
    var Nome = document.querySelector("#inNome");
    var Alturatag = document.querySelector("#inAltura");
    var Pesotag = document.querySelector("#inPeso");

    var Altura = Alturatag.value / 100;
    var Peso = Pesotag.value;

    var imc = Peso / Altura **2;
    if(imc < 18.5)
    {
        alert('Olá ' + Nome.value + ', você está magro');
    }
    else if(imc < 24.9)
    {
        alert('Olá ' + Nome.value + ', você está normal');
    }
    else if(imc < 29.9)
    {
        alert('Olá ' + Nome.value + ',você está acima do peso');
    }
    else if(imc < 39.9)
    {
        alert('Olá ' + Nome.value + ', você está obeso');
    }
    else if(imc> 39.9)
    {
        alert('Olá ' + Nome.value + ', você está em obesidade morbida');
    }
}

