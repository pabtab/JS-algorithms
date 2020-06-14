const arr = [1, 2, 3, 4, 5]


// [1, 2, 3, 4, 5]
function sumNumbers(numbers) {
  let result = 0; // 1
  for (let i = 0; i < numbers.length; i++) { // 1
    result += numbers[i] ; //5 => n
  }

  console.log(result) //1

  // T = 1 + 1 + 1 + n => 3 + n
  // T = n
}

function constantTime(arr) {
  // const result = arr.reduce((acum, curr) => curr + acum, 0)
  // We dont have alternative as a constant time complexity
  console.log(result)
}


const start = performance.now()
sumNumbers(arr)
const end = performance.now()
console.log(end - start)




/// Exercise in the pic

// Return a function that returns if two strings have the same letters

// Cuadratic O(n^2)
function cuadratic(string1, string2) {
  const str1Len = string1.length
  const str2Len = string2.length
  const count = 0
  const arr = []


  if (str1Len !== str2Len) return false

  for (let i = 0; i < string1; i++) {
    for (let j = 0; j < str2Len; j++) {
      if (string1.indexOf(j) === -1) {
        if (string1[i] === string2[j]) {
          count++
          arr.push(j)
          break;
        }
      }
      
    }
    
  }

  return string1 === count
}


function bestSolution(string1, string2) {
  if (string1.length !== string2.length) 
    return false

  const isSimiliar1 = !string2.split('').some(cha => string1.indexOf(cha) === -1)
  const isSimiliar2 = !string1.split('').some(cha => string2.indexOf(cha) === -1)
  
  return isSimiliar1 && isSimiliar2
}

const result = bestSolution('moon', 'mona')
console.log(result)
