import PeopleInterface from "../interface/people.interface";

class PeopleView {
    template (people: PeopleInterface){
      return `<p>Nome: ${people.firstname + people.lastname} </p>
              <p>Idade: ${people.age}</p>
              <p>Status: ${people.active}</p>`;
    }
}

export default PeopleView;