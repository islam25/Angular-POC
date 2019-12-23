export class User{
    Id: Number;
    Name: string;
    Type: string;
    Password: string;

    constructor(_Id: Number , _Name: string , _Type: string, _Password: string){
        this.Id = _Id;
        this.Name = _Name;
        this.Type = _Type;
        this.Password = _Password;
    }
}