
function getName(name:string){

    return "hi"+ name
}
let msg=getName("Pratik");

  console.log(msg);
// in built datatypes in Typescript
//1]Number
let first:number= 12;
console.log(first);

//String 
let studName:string = "Pratik"
let studClass:string="7th standard"

// ANy datatype
let val: any = 'Hi';  
val = 555;  
val = true;           

function ProcessData(x: any, y: any) {  
                 return x * y;  
      }  
      let result: any;  
      result = ProcessData("Hello ", "Any!"); 
      result = ProcessData(2, 3); 

   console.log(result);
   

  function addNumbers(a, b):number {  
    return a + b;  
}  
var sum = addNumbers(10, 25);  
console.log('Sum of the numbers is: ' + sum);  

//User defined datatypes

//Array, class, Touple, Enum, Interface,Function

class myClass{

    constructor(private name:string){}
    sayMyName():any{
        return "Pratik" +" "+ this.name;
    }
}

let a = new myClass("Chougule");
let msg1= a.sayMyName();
console.log(msg1);




class Student  
{  
    RollNo: number=1;  
    Name: string="Pratik";   
    constructor(RollNo: number, Name: string)   
    {  
        
    }  
    showDetails()  
    {  
        console.log(this.RollNo + " : " + this.Name);  
    }  
}  