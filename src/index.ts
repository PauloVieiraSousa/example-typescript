import PeopleController from './modules/people/people.controller';

debugger;
const application = document.getElementById('application');
const peopleController = new PeopleController();
application.innerHTML = peopleController.view();