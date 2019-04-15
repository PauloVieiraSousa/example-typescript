import PeopleInterface from "../interface/people.interface";

class PeopleModel implements PeopleInterface {

    firstname: string;
    lastname: string;
    age: number;
    active: boolean;


    public setFirstName (firstname: string){
        this.firstname = firstname;
    }

    public setLastName (lastname: string){
        this.lastname = lastname;
    }

    public setAge (age: number){
        this.age = age;
    }

    public setActive (active: boolean = true){
        this.active = active;
    }


    public getFullName (): String{
        return this.firstname + ' ' + this.lastname; 
    }

    public getAge (): Number{
        return this.age; 
    }

    public getActive (): boolean {
        return this.active;
    }


}

export default PeopleModel;