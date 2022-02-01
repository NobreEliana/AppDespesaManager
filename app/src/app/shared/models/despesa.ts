export interface IDespesa {
    id: number,
    date: string,
    type: string,
    value: number,
    description: string
}

export class Despesa implements IDespesa {
    constructor(public id: number, public date: string, public type: string, public value: number, public description: string) {
    }
}