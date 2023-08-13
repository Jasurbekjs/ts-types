type TUser = {
    name: string
    age: number
}

type TAddress = {
    country: string
    city: string
    address: string
}

let user: TUser
let address: TAddress

user = {
    age: 24,
    name: 'Jas'
}

address = {
    country: "Russia",
    city: "Moscow",
    address: "Addresss"
}

let common: TUser & TAddress

common = {
    ...user, ...address
}