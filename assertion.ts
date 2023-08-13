// assertion - утверждение

const inputElement = document.querySelector('input')
const value = inputElement?.value
const value1 = (inputElement as HTMLInputElement).value
const value2 = (<HTMLInputElement>inputElement).value

// not Null assertion
const getLength = (text: string | null): number => {
    return text!.length
}

getLength('wrapper') // 7
getLength(null) // compilation error