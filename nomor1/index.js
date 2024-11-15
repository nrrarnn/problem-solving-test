const centralPolygonalNumbers = (n) => {
  let sequence = [];
  let result = 1;

  for (let i = 0; i < n; i++) {
    if(i > 0){
      result += i;
    }
    sequence.push(result);
  }

  return sequence.join("-");
}

console.log(centralPolygonalNumbers(7));