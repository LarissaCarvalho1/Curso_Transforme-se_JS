/*9️⃣Polimorfismo prático (formas geométricas)
Crie uma classe Forma com o método area().
Crie duas subclasses:
● Quadrado (com atributo lado) → área = lado * lado
● Triangulo (com base e altura) → área = (base * altura) / 2

Crie objetos das duas classes e mostre a área de cada uma.*/

class Forma {
    Area() {

    }
}

class Quadrado extends Forma {
    Area(lado) {
        let areaQuadrado = lado * lado;
        console.log(`A área do quadrado de lado ${lado} é ${areaQuadrado}m²`);
    }
}

class Triangulo extends Forma {
    Area(base, altura) {
        let areaTriangulo = (base * altura) / 2;
        console.log(`A área do triângulo de base ${base} e altura ${altura} é ${areaTriangulo}m²`);
    }
}

const primeiroQuadrado = new Quadrado();
primeiroQuadrado.Area(5);

const segundoQuadrado = new Quadrado();
primeiroQuadrado.Area(10);

const primeiroTriangulo = new Triangulo();
primeiroTriangulo.Area(10, 7);

const segundoTriangulo = new Triangulo();
primeiroTriangulo.Area(50, 4);