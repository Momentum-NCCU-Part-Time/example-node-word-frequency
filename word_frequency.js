const fs = require('fs')
const path = require('path')
const filePath = process.argv[2]

const STOP_WORDS = [
  'a',
  'an',
  'and',
  'are',
  'as',
  'at',
  'be',
  'by',
  'for',
  'from',
  'has',
  'he',
  'i',
  'in',
  'is',
  'it',
  'its',
  'of',
  'on',
  'that',
  'the',
  'to',
  'were',
  'will',
  'with',
]

function printWordFreq(file, callback) {
  // Read in `file` and print out the frequency of words in that file.
  fs.readFile(file, 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading the file:', err)
      process.exit(1)
    }
    // make all words lowercase
    data = data.toLowerCase()
    // remove all punctuation
    // you could do this several different ways
    // here it is with a for...of loop:
    let newData = ''
    const punctuation = [',', '.', '!', '?', ':', ';', '"']
    for (let char of data) {
      if (!punctuation.includes(char)) {
        newData += char
      }
    }
    data = newData
    // remove newline characters using a regular expression and replace them with spaces
    data = data.replace(/\n/g, ' ')
    // split the string into an array of words
    data = data.split(' ')
    console.log(data)
    // remove all stop words
    data = data
      .filter((word) => !STOP_WORDS.includes(word))
      .filter((word) => word !== '')
    // create an object to hold the word counts
    const wordCount = {}
    // loop over the array of words
    // determine the length of the longest word at the same time (this is for the formatting later)
    let longestWordLength = 0
    for (const word of data) {
      // if the word is in the object, increment the count
      if (wordCount[word]) {
        wordCount[word] += 1
      } else {
        // if the word is not in the object, add it as a key, with a count value of 1
        wordCount[word] = 1
      }
      if (word.length > longestWordLength) {
        longestWordLength = word.length
      }
    }
    // sort this object by the count in descending order using Object.entries and the sort method
    const sortedWordCounts = Object.entries(wordCount).sort(
      (a, b) => b[1] - a[1]
    )
    // format the output
    let formattedOutput = []
    for (let [word, count] of sortedWordCounts) {
      // pad the word with spaces so all words are the same length
      // this will allow the counts to line up in the printout
      let padding = longestWordLength
      word = word.padStart(padding, ' ')
      // add the formatted word and count to the array
      formattedOutput.push(`${word} | ${count} ${'*'.repeat(count)}`)
    }
    // call the callback function with the formatted output
    // join the array with newline characters so it prints out nicely
    callback(formattedOutput.join('\n'))
  })
}

printWordFreq(filePath, (wordCount) => {
  console.log(wordCount)
})


