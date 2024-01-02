# Word Frequency

## Directions

In this project, you will create a command line application in Node.js that will read any text file and output the frequency of words in that file. This project will give you practice with basic Node.js concepts like handing file input and output, using the `fs` module, and using `process.argv` to read command line arguments, basic programming logic, and JavaScript fundamentals like objects and arrays.

To [read a file in Node](https://nodejs.org/en/learn/manipulating-files/reading-files-with-nodejs), you will use the [`fs` module](https://nodejs.org/docs/latest/api/fs.html). To calculate the frequency of words found in that file, you'll need to use basic JavaScript.

Several test files are provided for you to use as input files. You can also use any text file you like, as it should work the same for any file. A good idea would be to make a really short one for testing as you work.

To calculate the frequency of words, you must:

- remove or skip punctuation
- normalize all words to lowercase
- remove or skip the "stop words" -- words used so frequently they are ignored
- go through the file word by word and keep a count of how often each word is used

Run the program from the command line like this:

```
node word_frequency.js praise_song_for_the_day.txt
```

When the program is complete, running the command above will print out a report on the command line showing the number of times each word appears in that file, formatted like this:

```
     we | 7 *******
   each | 5 *****
     or | 5 *****
   need | 5 *****
   love | 5 *****
  about | 4 ****
 praise | 4 ****
   song | 4 ****
    day | 3 ***
    our | 3 ***
```

## Starter Files

A starting program is located in `word_frequency.js`. There are also text files that you can use as your input files.

## References you may find useful for this project

- [MDN JavaScript Object Basics](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Basics)
- [String methods](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)
- [Template literals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals)
- [Array method](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)

## 🌶️ Spicy Options

- Extend the app to display the top _n_ most frequently occurring words in the file, where _n_ is a number provided by the user as a command line argument. For example, if the user runs `node word_frequency.js praise_song_for_the_day.txt 3`, the output would be:

```
     we | 7 *******
   each | 5 *****
     or | 5 *****
```

- A better implementation of the first spicy option would show the top _n_ words in the file, even if there are more than _n_ words that have the same frequency. For example, if the user runs `node word_frequency.js praise_song_for_the_day.txt 3`, the output would be:

```
     we | 7 *******
   each | 5 *****
     or | 5 *****
   need | 5 *****
   love | 5 *****
  about | 4 ****
 praise | 4 ****
   song | 4 ****
```

### Bibliography

- [Elizabeth Alexander, _Praise Song for the Day_](https://www.poetryfoundation.org/poems/52141/praise-song-for-the-day)
- [Richard Blanco, _One Today_](https://poets.org/poem/one-today)
- [Amanda Gorman, _The Hill We Climb_](https://en.wikipedia.org/wiki/The_Hill_We_Climb)
