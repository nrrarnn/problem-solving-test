const denseRanking = (scores, gitsScores) => {
  const uniqueScores = [...new Set(scores)].sort((a, b) => b - a);
  const rank = [];

    gitsScores.forEach(gitsScore => {
    let position = 1;
    while (position <= uniqueScores.length && gitsScore < uniqueScores[position - 1]) {
      position++;
    }
    rank.push(position); 
  });

  return rank.join(" ");
}

const scores = [100, 100, 50, 40, 40, 20, 10];
const gitsScores = [5, 25, 50, 120];

console.log(denseRanking(scores, gitsScores));