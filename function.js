
function calculate(a, b, callback) {
    console.log(`Performing calculation with ${a} and ${b}`);
    const result = callback(a, b);  
    return result;
  }
  
  function add(x, y) {
    return x + y;
  }
  
  
  function multiply(x, y) {
    return x * y;
  }
  
  
  const sum = calculate(5, 3, add);
  console.log('Sum:', sum);  
  
  const product = calculate(5, 3, multiply);
  console.log('Product:', product); 
  