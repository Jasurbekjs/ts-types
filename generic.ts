// generic

function entity<T> (args: T): T {
    return args
}

entity<number>(13)
entity<string>('thirteen')

//

const entity2 = <T>(args: T): T => args

// 

class Channel <T> {
    private name: T

    constructor(name: T) {
        this.name = name
    }

    getName():T{
        return this.name
    }
}

new Channel<string>('JM')
new Channel<number>(65)

//

interface IPair<K, V> { // in type don`t works
    key: K
    value: V
}

const pair1: IPair<number, string> = {key: 0, value: 'pair 1'}
const pair2: IPair<string, number> = {key: 'first', value: 1}
const pair3: IPair<string, string> = {key: 'key', value: 'pair 1'}
const pair4: IPair<number, number> = {key: 0, value: 11}

// default

type TLength = {
    length: number
}

function getNameLength <T extends TLength> (iArgs: T): number {
    return iArgs.length
}

getNameLength('wrapper')
getNameLength([1,5,6,8])