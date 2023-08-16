type TIsNumber<T> = T extends number ? 'yes' : 'no'

type T1 = TIsNumber<number> // yes
type T2 = TIsNumber<string> // no

// template types
type TBrand = 'bmw' | 'mclaren' | 'mercedes'
type TPrice = '$100000' | '$400000' | '$50000'

type TCar = `${TBrand} ${TPrice}`

const car1:TCar = 'mercedes $100000'
//