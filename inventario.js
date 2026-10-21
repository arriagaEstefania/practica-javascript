function revisarInventario(cantidad) {
    if (typeof cantidad !== "number") {
        return "Dato incorrecto";
    } else if (Number.isNaN(cantidad)) {
        return "La cantidad no es válida";
    } else if (cantidad < 0) {
        return "La cantidad no puede ser negativa";
    } else {
        return "Cantidad válida";
    }
}

console.log(revisarInventario(undefined));