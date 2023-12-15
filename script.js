function Generar() {
    var longitud = document.getElementById("longitud").value;
    if (longitud > 0){
        var caracteres = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
        const numeros = "0123456789";
        const simbolos = "!#$%^&*()_-+=";
        var contraseña = "";

        if(checkbox1.checked){ caracteres += numeros; }
        if(checkbox2.checked){ caracteres += simbolos; }

        for ( var i = 0 ; i < longitud ; i++ ) {
            var random = Math.floor(Math.random() * caracteres.length)
            contraseña += caracteres.charAt(random);
        }
        
        document.getElementById("contraseña").textContent = contraseña;
        document.querySelector(".botonCopiar").classList.add("mostrar");
    } else {
        document.getElementById("contraseña").textContent = "Ingrese una longitud valida";
        document.querySelector(".botonCopiar").classList.remove("mostrar");
    }
}
function CopiarPassword() {
    var copiar = document.getElementById("contraseña");
    navigator.clipboard.writeText(copiar.textContent)
    .then(function() {
        alert('Contraseña copiada al portapapeles');
    });
}