type TChannel = {
    name: string
}
function setChannel(name: string): TChannel {
    return { name }
}

type TChannelFunc = (name: string) => TChannel
const getChannel:TChannelFunc = name=> {
    return { name }
}

// rest operators
const getNumbers = (...numbers: number[]) => {
    return numbers
}

//overloads
function getCar (name: string): string
function getCar (name: string, price: number): string

function getCar (name: string, price?: number): string {
    return `Название ${name}${price ? `, Цена ${price}` : ''}`
}

const car1 = getCar('bmw')
const car2 = getCar('mers', 10000)
const car3 = getCar('tayota', 4564)