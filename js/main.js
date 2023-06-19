function borrar() {
    const elements = ['nombre', 'apellido', 'direcciondecorreo', 'cantidad', 'categoria', 'total'];
    
    elements.forEach((elementId) => {
        document.getElementById(elementId).value = '';
    });
    
    document.getElementById('categoria').selectedIndex = 0;
    document.getElementById('total').innerHTML = '';
}

function validarDatos(formulario) {
    if (formulario.nombre.value.trim().length == 0) {
        alert("Debe ingresar su nombre.");
        return false;
    }
    if (formulario.apellido.value.trim().length == 0) {
        alert("Debe ingresar su apellido.");
        return false;
    }
    var formato_correo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formato_correo.test(formulario.direcciondecorreo.value)) {
        alert("Debe ingresar un correo válido.");
        return false;
    }
    if (formulario.cantidad.value == "") {
        alert("Debe seleccionar una cantidad.");
        return false;
    }
    if (formulario.categorias.value == "") {
        alert("Debe seleccionar una categoría.");
        return false;
    }
    return true;
}

function resumen() {
    const cantidadEntradas = document.getElementById('cantidad');
    const CategoriaElegida = document.getElementById('categoria');
    const totalAPagar = document.getElementById('total');
    
    const cant = cantidadEntradas.value;
    const opcion = CategoriaElegida.selectedIndex;
    const total = totalAPagar.innerHTML;
    
    let precio;
    if (opcion === 0) {
        precio = cant * 40;
    } else if (opcion === 1) {
        precio = cant * 100;
    } else if (opcion === 2) {
        precio = cant * 170;
    }
    
    const pagar = Number(precio) + Number(total);
    totalAPagar.textContent = pagar;
}

function validarYMostrarResumen() {
    resumen();
    validarDatos(document.getElementById('formulario'));
}