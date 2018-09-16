const {
  deepEqual,
} = require('fast-equals')

const countOccurrences = (arr, val) => arr.reduce((a, v) => (v === val ? a + 1 : a), 0);
const sum = (arr) => arr.reduce((acc, val) => acc + val, 0);

module.exports = {
  equallyGraded: (key, submitted) => {
    const graded = (k) => {
      const equalweight = 1/k.length
      return submitted.map((ea, index) => {
        const correct = deepEqual(ea, k[index])
        return {
          answer: ea,
          correct,
          grade: correct ? equalweight : 0,
        }
    })}

    const grades = graded(key)

    return { 
      ...grades, 
      total: sum(grades.map(ea=>ea.grade)),
      correctAnswers: countOccurrences(grades.map(ea => ea.correct), true),
    }
  }
} 