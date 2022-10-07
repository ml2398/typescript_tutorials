//Functions
//TS infers retun type. You can also specify return types
//Good practice to let TS infer
function add( n1: number, n2: number): number {
    return n1 + n2;
}

//in TS, a function which has no return is of type 'void'
//if there is a return with no value, it return undefined
//Both 'void' and 'undefined' are valid data types, but different
function printResult (num: number): void {
    console.log('Result is ' + num);
}

printResult(add(5, 7));

//You can also define a variable of type function
let combineValues: Function;
combineValues = add;
console.log(combineValues(5,5));

//You can specify the function type definition using arrow notation
let specificFunction: (a: number, b: number) => number;//return type
specificFunction = add;
//specificFunction = printResult; //error

console.log(specificFunction(1,1));

//Function type definition is useful to make callback function types clear
function addAndHandle(n1: number, n2: number, callback: (num: number) => void) {
    const result = n1 + n2;
    callback(result);//This calls another function to do something
};

//This function uses JS arrow notation not TS type definition
//TS infers the type from the callback function definition 
//If you return a value in the anonymous function being passed into the callback, it will be 
//irrelevant since we set the return type of the callback as void
addAndHandle(10, 20, (result) => {
    console.log(result);
});




