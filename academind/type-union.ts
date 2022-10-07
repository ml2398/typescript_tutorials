//Union types allow for multiple data entry options
function combine (n1: number | string , n2: number | string) {
    //const result = n1 + n2;     
    //TS does not analyse what data types are in the union
    //It may be necessary to have an if check to ensure the operations carried out
    //in the code block are acceptable. In this case we don't need an if check
    let result;
    if (typeof n1 === 'number' && typeof n2 === 'number') {
        result = n1 + n2;
    } else {
        result = n1.toString() + ' ' + n2.toString();
    };
    
    console.log(result);
}; 

 combine(5, 6);

 combine('Michael', 'Lewis');

