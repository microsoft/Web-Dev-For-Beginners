
function sayHello()
{
    console.Log("Hello");
}


function introduceYourself(name)
{
    console.Log(`Hi, my name is ${name}`);
}

function greetPerson(name, greeting='Hello' )
{
    console.Log(`${greeting}, ${name}!`);
}

// setTimeout(() => {
  // console.log('3 seconds has elapsed');
// }, 3000);

function addNumbers(num1, num2)
{
 sum = num1 + num2;
 return sum;
}

function createFullName(firstName, lastName)
    {
    FullName = `${firstName} ${lastName}`;
    return FullName;
    }

function calculateTip(billAmount, tipPercentage = 15) 
{
    Tip = billAmount * (tipPercentage/100);
    return Tip;
}


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