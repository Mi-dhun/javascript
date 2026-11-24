let array1=[1,2,3,4,5,'red','blue','green','orange'];
console.log(array1);
console.log(array1.length);
console.log(array1[2]);
array1.push('yellow');
array1.pop();
console.log(array1);
array1.unshift('purple');
console.log(array1);
array1.shift('');
console.log(array1);
let array2=array1.slice(2,5);
console.log(array2);
array1.splice(2,3,'black','white');
console.log(array1);

let person={
    firstName:'midhun',
    age:22,
    place:'palakkad'
}
console.log(person.place);
console.log(person['age']);

let company={
    companyName:'TCSION',
    start:2000,
    place:'Trivandrum'

}
console.log(company['companyName']);

class Car{
    constructor(brand,model,year){
        this.brand=brand;
        this.model=model;
        this.year=year;
    }
}
let car1 = new Car("Toyota", "Fortuner", 2024);

console.log(car1);
let car2 = new Car("Mahindra","THAR",2025);
console.log(car2);
let students=[
    { firstName: 'midhun', age: 22 },
    { firstName: 'amal', age: 21 }
  ]
  console.log(students[1].age);

  let midhun={
    address:'thanbanoor',
    city:'Trivandrun',
    state:'Kerala'
  }
console.log(midhun);
// functions
function addnum(a,b){
    var sum=a+b;
    //console.log(`Sum of two number is ${sum}`);
    return sum;
}
 var result=addnum(50,50);
 console.log(`Sum of two number is ${result}`);

 function mul(i,j){
    var multiple=i*j;
    return multiple;
 }
 var result=mul(10,5);
 console.log(`multiple two numbers is ${result}`);
 //arrow function
 let addnumber=(a,b)=>{
    return a+b;
 }
 let result1=addnumber(20,30);
 console.log(`sum of two numbers ${result1}`);

 let person2={
    firstName:'nithin',
    lastName:'K',
    fullName:()=>{
        return`${person2.firstName} ${person2.lastName}`;
    }
 }
 console.log(person2.fullName());

 let numbers=[1,2,3,4,5];
 numbers.forEach((item,ind,arr3)=>{
    arr3[ind]=item>2;
 })
 console.log(numbers);

 let ages=[21,23,24,26,27];
 let adult=ages.filter((ages)=>{
    return ages>=24;
    
 })
 console.log(adult);

 let arr4=[1,2,3];
 let arr1=[30,40,50];
 let arr6=[...arr4,...arr1];
 console.log(arr6)

 let arr7=[1,2,3];
 let [a,b]=[...arr4,...arr7,10];






