const person = {
  firstName: 'Carolina',
  lastName: 'Carmona',
  hobby: 'Dancing'
};
console.log(person);

var fullName = person['firstName'] + ' ' + person['lastName'];
console.log("The person's name is:", fullName, '.');

person.job = 'Waitress';
console.log("The person's current job is:", person.job, '.');

person.previousJob = 'Cashier';
console.log("The person's previous job is:", person.previousJob, '.');

console.log("The complete person's object:", person);
