import PeopleInterface from './interface/people.interface';
import PeopleModel from './model/people.model';
import PeopleView from './view/people.view';

class PeopleController {

    people:PeopleModel;
    peopleView: PeopleView = new PeopleView();

    constructor (){
        this.addPeople('Paulo', 'Gabriel', 30);
        debugger;
    }

    addPeople (firstName: string, lastName:string, age: number){
        const people: PeopleModel = new PeopleModel();

        people.setFirstName('Paulo');
        people.setLastName('Vieira de Sousa');
        people.setAge(30);
        people.setActive();

        this.people = people;
    }


    view(){
        return this.peopleView.template(this.people);
    }
}
export default PeopleController;