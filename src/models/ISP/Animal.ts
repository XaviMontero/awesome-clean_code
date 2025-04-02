interface Animal {
    eat(): void;
    sleep(): void;
}

interface Bird extends Animal {
    fly(): void;
}

interface Fish extends Animal {
    swim(): void;
}

interface Ladradores extends Animal {
    bark(): void;
}

export class Perro implements Ladradores {
    eat(): void {
        console.log("El perro está comiendo");
    }
    sleep(): void {
        console.log("El perro está durmiendo");
    }
    bark(): void {
        console.log("El perro está ladrando");
    }
}

export class Gato implements Animal {
    eat(): void {
        console.log("El gato está comiendo");
    }
    sleep(): void {
        console.log("El gato está durmiendo");
    }
}

export class Pajaro implements Bird {
    eat(): void {
        console.log("El pájaro está comiendo");
    }
    sleep(): void {
        console.log("El pájaro está durmiendo");
    }
    fly(): void {
        console.log("El pájaro está volando");
    }
}

export class Pez implements Fish {
    eat(): void {
        console.log("El pez está comiendo");
    }
    sleep(): void {
        console.log("El pez está durmiendo");
    }
    swim(): void {
        console.log("El pez está nadando");
    }
}











