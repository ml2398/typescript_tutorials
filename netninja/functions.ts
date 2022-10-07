//functions
let greet: Function; //Can declare function type with capital F

greet = () => {
    console.log('hello, world');
};

//optional paramater with a default value (don't use both - bad practice)
const add = (a: number, b: number, c?: number | string = 10) => {
    console.log(a+b);
    console.log(c); 
};

add(5,10);

const minus = (a: number, b: number): number => {
    return (a-b);
};

let result = minus(10,7);
