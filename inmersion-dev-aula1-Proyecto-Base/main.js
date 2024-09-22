let cantidad = document.getElementById('cantidad');
let botton = document.getElementById('generar');
contrasena = document.getElementById('contrasena');

const cadenaCaracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()'

function generar(){

    let numeroDigitado = parseInt (cantidad.value);
    console.log(numeroDigitado);

    if ( numeroDigitado < 8){ 
        alert("la cantidad de caracteres tiene que ser mayor que 8");

    }

    let password =' ';

    for (let i=0; i < numeroDigitado; i++  ){

        let caracteraleatorio = cadenaCaracteres[Math.floor(Math.random() * cadenaCaracteres.length)];
        console.log (caracteraleatorio);

        password += caracteraleatorio;
    }
   contrasena.value = password
}










