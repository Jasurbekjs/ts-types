class Car {
    name: string
    price: number

    constructor(name: string, price: number){
        this.name = name
        this.price = price
    }

    protected getInfo(): string{
        return `${this.name} - ${this.price}`
    }

    info(){
        this.getInfo()
    }
}

class Bus extends Car {
    constructor(name: string, price: number){
        super(name, price)
    }

    info(): void {
        this.getInfo()
    }

}

new Car('BMW', 100000).info()
new Bus('Mers', 50000).info()