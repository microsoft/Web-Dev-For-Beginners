
function sayHello()
{
    console.log("Hello");
}


function introduceYourself(name)
{
    console.log(`Hi, my name is ${name}`);
}

function greetPerson(name, greeting='Hello' )
{
    console.log(`${greeting}, ${name}!`);
}

 /* setTimeout((time) => {
  console.log('3 seconds has elapsed');
  return time;
 }, 3000); */

const addNumbers = (num1, num2) => num1 + num2;

const createFullName = (firstName, lastName) => `${firstName} ${lastName}`;
   /* {
    const FullName = `${firstName} ${lastName}`;
    return FullName;
     }*/

const calculateTip = (billAmount, tipPercentage = 15) => billAmount * (tipPercentage/100);
/* {
    const Tip = billAmount * (tipPercentage/100);
    return Tip;
} */


//Default test calls

sayHello();
introduceYourself("Sarah");
greetPerson("Alex");
greetPerson("Maria", "Hi");

const sum = addNumbers(5, 3);
console.log(`The sum is: ${sum}`);

const fullName = createFullName("John", "Doe");
console.log(`Full name: ${fullName}`);

const tip = calculateTip(50);
console.log(`Tip for $50 bill: $${tip}`);


