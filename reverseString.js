function reverseString(str) {
    
    const charArray = str.split('');
    
    
    const reversedArray = charArray.reverse();
    
    
    const reversedString = reversedArray.join('');
    
   
    return reversedString;
  }
  

  const inputString = "Hello, World!";
  const result = reverseString(inputString);
  
  console.log(`Original String: ${inputString}`);
  console.log(`Reversed String: ${result}`);
  