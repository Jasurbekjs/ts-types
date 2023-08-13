interface IUser {
    name: string
    email: string
}

interface IUserAge extends IUser {
    age: number
}

const user: IUserAge = {
    name: 'JM',
    email: 'info@gmail.com',
    age: 27
}