
function customMap(array, callback) {
    const result = [];
    for (let i = 0; i < array.length; i++) {
      result.push(callback(array[i], i, array));
    }
    return result;
  }
  
  
  function customReduce(array, callback, initialValue) {
    let accumulator = initialValue === undefined ? array[0] : initialValue;
    let startIndex = initialValue === undefined ? 1 : 0;
    
    for (let i = startIndex; i < array.length; i++) {
      accumulator = callback(accumulator, array[i], i, array);
    }
    return accumulator;
  }
  
 
  function customFilter(array, callback) {
    const result = [];
    for (let i = 0; i < array.length; i++) {
      if (callback(array[i], i, array)) {
        result.push(array[i]);
      }
    }
    return result;
  }
  
  
  function customFlatMap(array, callback) {
    const result = [];
    for (let i = 0; i < array.length; i++) {
      const mappedValue = callback(array[i], i, array);
     
      if (Array.isArray(mappedValue)) {
        result.push(...mappedValue);
      } else {
        result.push(mappedValue);
      }
    }
    return result;
  }
  
  
  const numbers = [1, 2, 3, 4];

  const mappedNumbers = customMap(numbers, (num) => num * 2);
  console.log('Mapped Numbers:', mappedNumbers);  // Output: [2, 4, 6, 8]
  

  const sum = customReduce(numbers, (acc, num) => acc + num, 0);
  console.log('Sum:', sum);  // Output: 10
  

  const filteredNumbers = customFilter(numbers, (num) => num > 2);
  console.log('Filtered Numbers:', filteredNumbers);  // Output: [3, 4]
  
  
  const flatMappedNumbers = customFlatMap(numbers, (num) => [num, num * 2]);
  console.log('FlatMapped Numbers:', flatMappedNumbers);  // Output: [1, 2, 2, 4, 3, 6, 4, 8]
  