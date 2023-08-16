interface ICar {
    id: number
    name: string
    price: number
    year: number
}

interface ICarAdd extends Omit<ICar, 'id'>{} // without 'id'
interface ICarId extends Pick<ICar, 'id'>{} // only 'id'

interface IOptionalCar extends Partial<ICar>{} // all properties is iptions ?
interface IRequiredCar extends Required<ICar>{} // all properties is required
interface IReadonlyCar extends Readonly<ICar>{} // readonly

type TCarReacord = Record<'name' | 'price', string | number> // new record type

type TGetName = () => string // return typr
type Return = ReturnType<TGetName> //

type Any = Extract<'max' | 'andrey' , 'andrey' | 'misha'> // extract type = andrey
type First = Exclude<'max' | 'andrey' , 'andrey' | 'misha'> // exclude type = max
type NotNull = NonNullable<string | number | null | undefined> // nonNullable (string | number)