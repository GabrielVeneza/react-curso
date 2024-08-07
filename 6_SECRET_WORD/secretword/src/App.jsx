
// css
import './App.css'

// react
import { useCallback, useEffect, useState } from 'react'

// data
import { wordsList } from './data/words'

// components
import StartScreen from './components/StartScreen'
import Game from './components/Game'
import GameOver from './components/GameOver'

const stages = [
  {id:1, name: 'start'},
  {id:2, name: 'game'},
  {id:3, name: 'end'},
]

const guessQty = 3

function App() {

  const [gameStage, setGameStage] = useState(stages[0].name)
  const [words] = useState(wordsList)

  const [pickedWord, setPickedWord] = useState()
  const [pickedCategory, setPickedCategory] = useState()
  const [letters, setLetters] = useState([])

  const [guessedLetters, setGuessedLetters] = useState([])
  const [wrongLetters, setWrongLetters] = useState([])
  const [guesses, setGuesses] = useState(guessQty)
  const [score, setScore] = useState(0)

  const pickWordAndCategory = useCallback(() => {
    // pick a random  category
    const categories = Object.keys(words)
    const category = 
      categories[Math.floor(Math.random() * Object.keys(categories).length)]

    // pick a random word
    const word = 
      words[category][Math.floor(Math.random() * words[category].length)]


    return {word, category}
  },[words])

  
  // Starts the secret word game
  const startGame = useCallback(() => {
    clearLetterStates()


    // pick word and pick category
    const {word, category} = pickWordAndCategory()

    // create array of letters

    let wordLetters = word.split("")

    wordLetters = wordLetters.map((l) => l.toLowerCase())

    setPickedWord(word)
    setPickedCategory(category)
    setLetters(wordLetters)
    setGameStage(stages[1].name)
  }, [pickWordAndCategory])

  // process the latter input
  const verifyLetter = (letter) => {
    const normalizedLetter = letter.toLowerCase()
    
    
    // check if letter has already benn utilized
    if (guessedLetters.includes(normalizedLetter) || wrongLetters.includes(normalizedLetter))
      {
        return
      }

    // push guesses letter or remove a guess
    if (letters.includes(normalizedLetter))
      {
        setGuessedLetters((actualGuessedLeters) =>[
          ...actualGuessedLeters,
          normalizedLetter,
        ])
      }
    else{
      setWrongLetters((actualWrongGuessedLeters) =>[
        ...actualWrongGuessedLeters,
        normalizedLetter,
      ])
      setGuesses((guesses) => 
        guesses - 1
      )
    }    
  }

  const clearLetterStates = () => {
    setGuessedLetters([])
    setWrongLetters([])
  }

  //check if guesses ended
  useEffect(() =>  {
    if(guesses <= 0){

      //reset all states
      clearLetterStates()

      setGameStage(stages[2].name)
    }
  }, [guesses])

  //check win condition
  useEffect(() => {

    const uniqueLetters = [...new Set(letters)]

    //win condition
    if (guessedLetters.length === uniqueLetters.length) {
      // add score
      setScore((actualScore) => actualScore += 100)

      //restart game with a new word
      startGame()
    }

    console.log(uniqueLetters)

  }, [guessedLetters, letters, startGame])

  // restarts the game
  const retry = () => {
    setScore(0)
    setGuesses(guessQty)
    setGameStage(stages[0].name)
  }

  return (
    <div className='App'>
      {gameStage === 'start' && <StartScreen startGame={startGame} />}
      {gameStage == 'game' && (
        <Game 
          verifyLetter={verifyLetter} 
          pickedWord={pickedWord} 
          pickedCategory={pickedCategory} 
          letters={letters}
          wrongLetters={wrongLetters}
          guesses={guesses}
          guessedLetters={guessedLetters}
          score={score} 
        />
      
      )}
      {gameStage == 'end' && <GameOver retry={retry} score={score} />}
    </div>
  )
}

export default App