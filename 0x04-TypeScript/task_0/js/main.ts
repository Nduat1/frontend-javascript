interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: 'Jane',
  lastName: 'Rose',
  age: 20,
  location: 'Nairobi',
};

const student2: Student = {
  firstName: 'Sam',
  lastName: 'Smith',
  age: 22,
  location: 'Mombasa',
};

const studentsList: Student[] = [student1, student2];

const table = document.createElement('table');
const tbody = document.createElement('tbody');

studentsList.forEach((student) => {
  const row = document.createElement('tr');
  const fNameCell = document.createElement('td');
  const lNameCell = document.createElement('td');

  fNameCell.textContent = student.firstName;
  lNameCell.textContent = student.location;

  row.appendChild(fNameCell);
  row.appendChild(lNameCell);
  table.appendChild(row);
});

table.appendChild(tbody);
document.body.appendChild(table);
