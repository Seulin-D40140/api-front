export class User 
{
    name : string;
    password : string
    roles : string[]

    constructor(email:string , password:string , roles:string[]){
        this.name = email
        this.password = password
        this.roles = roles
    }
}