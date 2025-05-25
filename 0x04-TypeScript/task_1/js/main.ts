// Define Teacher interface with flexible attribute support
interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any;
}

// Director interface extends Teacher
interface Directors extends Teacher {
  numberOfReports: number;
}

interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

const printTeacher: printTeacherFunction = (firstName, lastName) => {
  return `${firstName.charAt(0)}. ${lastName}`;
};

interface StudentConstructor {
  new (firstName: string, lastName: string): StudentClass;
}

interface StudentClass {
  workOnHomework(): string;
  displayName(): string;
}

class Student implements StudentClass {
  constructor(private firstName: string, private lastName: string) {}

  workOnHomework(): string {
    return 'Currently working';
  }

  displayName(): string {
    return this.firstName;
  }
}

// Teacher object 
const teacher: Teacher = {
  firstName: 'John',
  lastName: 'Doe',
  fullTimeEmployee: false,
  location: 'London',
  contract: false,
};

console.log(teacher); 

// Director object
const director: Directors = {
  firstName: 'Jane',
  lastName: 'Smith',
  location: 'New York',
  fullTimeEmployee: true,
  numberOfReports: 17,
};

console.log(director); 

// Student object
const student = new Student('Alice', 'Johnson');
console.log(student.displayName()); // Prints: Alice
console.log(student.workOnHomework()); // Prints: Currently working
