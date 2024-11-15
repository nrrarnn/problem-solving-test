const balancedBracket = (brackets) => {
  const stack = [];
  const matchingBrackets = {
    ')': '(',
    '}': '{',
    ']': '['
  };

  for (let char of brackets) {
    if (char === '(' || char === '{' || char === '[') {
      stack.push(char); 
    } else if (char === ')' || char === '}' || char === ']') {
      if (stack.length === 0 || stack.pop() !== matchingBrackets[char]) {
        return "NO";
      }
    }
  }

  return stack.length === 0 ? "YES" : "NO";
}

console.log(balancedBracket("{[()]}"));      
console.log(balancedBracket("{[(])}"));      
console.log(balancedBracket("{(([])[[]])[[]]}")); 