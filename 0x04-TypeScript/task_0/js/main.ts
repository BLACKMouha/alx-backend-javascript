interface Student {
  firstName: string,
  lastName: string,
  age: number,
  location: string
}

const student1: Student = {
  firstName: 'Betty',
  lastName: 'Linter',
  age: 43,
  location: 'Holberton',
}

const student2: Student = {
  firstName: 'Shell',
  lastName: 'Check',
  age: 34,
  location: 'Neverland',
}

const studentsList: Array<Student> = [student1, student2];

const body = document.getElementsByTagName('body')[0];
const table = document.createElement('table');
const thead = document.createElement('thead');
const thFirstName = document.createElement('th');
const thLocation = document.createElement('th');
const tbody = document.createElement('tbody');

table.style.borderCollapse = 'collape';
table.style.border = '1px solid black'; 

thFirstName.appendChild(document.createTextNode('Fistname'));
thLocation.appendChild(document.createTextNode('Location'));

studentsList.forEach((student) => {
  const entries = [student.firstName, student.location];
  const tr = document.createElement('tr');
  entries.forEach((data) => {
    const td = document.createElement('td');
    td.appendChild(document.createTextNode(data));
    td.style.border = '1px solid black';
    td.style.padding = '14px';

    tr.appendChild(td);
    tr.style.border = '1px solid black';
  });
  tbody.appendChild(tr);
});

thead.appendChild(thFirstName);
thead.appendChild(thLocation);

table.appendChild(thead);
table.appendChild(tbody);

body.appendChild(table);
