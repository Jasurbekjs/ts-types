/*
    To work with docrators, you need to add a property to the tsconfig file:
    "experimentalDecorators": true

    Version for typescript use v4.9.4
*/

function LogClass(constructor: Function) {
    console.log(constructor.name)
}

function LogMethod(target: Object, key: string, descriptor: PropertyDecorator){
    console.log(key)
}


@LogClass
class Plane {
    private id: number

    constructor(id: number) {
        this.id = id    
    }

    @LogMethod
    getId(){
        return this.id
    }
}