var rep = prompt("Cuantas veces deseas que se repita el formulario.");

document.write("Tu formulario" + "<br>")
for(var i = 1;i <= rep; i++){
    var nombre = prompt("Cual es tu nombre?");
    var edad   = prompt("Cuantos años tienes?");
    var escuela = prompt("Cuál es tu escuela?");
    var materia = prompt("Cual es tu materia favorita?");   
    document.write(i + nombre + "<br>")
    document.write(i + edad + "<br>")
    document.write(i + escuela + "<br>")
    document.write(i + materia + "<br>")
}