import crypto from 'crypto';

class ProductManager {
    constructor() {
        this.products = [];
    }

    addProduct(producto) {
        // VALIDAR QUE TODOS LOS DATOS SE HAYAN INGRESADO
        const requiredFields = ['title', 'description', 'price', 'thumbnail', 'code', 'stock'];
        const missingFields = requiredFields.filter(field => !producto[field]);

        if (missingFields.length > 0) {
            return `Faltan campos obligatorios: ${missingFields.join(', ')}`;
        }
        // VALIDAR SI EL PRODUCTO YA EXISTE
        const existe = this.products.some(prod => prod.code === producto.code);
        if (existe) {
            return "Producto ya existente";
        } else {
            producto.id = crypto.randomBytes(10).toString('hex');
            this.products.push(producto);
            return "Producto agregado satisfactoriamente";
        }
    }
}


const manager = new ProductManager();
const result = manager.addProduct({
    title: 'Producto',
    description: 'Descripcion del Producto',
    price: 1000,
    thumbnail: 'imagen.jpg',
    code: 'abc123',
    stock: 50,
});

console.log(result); 
console.log(manager.products); 
