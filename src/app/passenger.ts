export interface Passenger   {
    id: number,
    fullName: string,
    checkedIn: boolean,
    checkInDate: number,
    children?:Object[]
}

export interface Child {
    age: number,
    name: string
}