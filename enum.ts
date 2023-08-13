enum ERoles {
    ADMIN = 0, 
    GUEST = 1, 
    USER = 2
}

const enum EColors {  // for optimze
    BLACK, RED, BLUE
}

interface IUserOne {
    role: ERoles,
    color: EColors
}

const userOne: IUserOne = {
    role: ERoles.ADMIN,
    color: EColors.RED
}

console.log(ERoles[ERoles.ADMIN]) // ADMIN - reverse mapping