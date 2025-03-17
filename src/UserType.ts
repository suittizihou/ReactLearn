export class UserType{
    name: string;
    age: number;

    constructor(name: string, age: number){
        this.name = name;
        this.age = age;
    }

    SetName(newName:string) {
        this.name = newName;
    }
};