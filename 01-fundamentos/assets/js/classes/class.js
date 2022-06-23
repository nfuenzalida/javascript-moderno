

class Persona {

    nombre = '';
    codigo = '';
    frase  = '';
    comida = '';

    constructor( nombre = 'Sin nombre', codigo = 'Sin código', frase = 'Sin frase') {
        
        this.nombre = nombre;
        this.codigo = codigo;
        this.frase  = frase;

        quienSoy(); {
            console.log(`Soy ${ this.nombre } y mi identidad es ${ this.codigo }`);
        };
    
        miFrase(); {
            this.quienSoy();
            console.log(`${ this.codigo} dice: ${ this.frase }`);
        }
    }

}

const spiderman = new Persona( 'Peter Parker', 'Spiderman', 'Soy tu amigable vecino Spiderman' );
const ironman   = new Persona( 'Tony Stark', 'Ironman', 'Yo soy Ironman' );

// console.log( ironman );

spiderman.miFrase();
// ironman.miFrase();