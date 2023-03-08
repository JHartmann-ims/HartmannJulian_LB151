import { collection, onSnapshot, QuerySnapshot } from "firebase/firestore";
import React, { useState, useEffect } from "react";
import { db } from "../firebase";
import { query } from "firebase/firestore";

import { AiFillHeart } from "react-icons/ai";

const Content = () => {
  const [randomNumber, setRandomNumber] = useState(null);
  const [lastRandomNumber, setLastRandomNumber] = useState("...");
  const [remainingLives, setRemainingLives] = useState(3);
  const [bankAccount, setBankAccount] = useState(0);
  const [word, setWord] = useState("Mercedes");
  const [guessedLetters, setGuessedLetters] = useState([]);
  const [consonantToGuess, setConsonantToGuess] = useState(null); // Zustand hinzufügen

  const vowels = ["a", "e", "i", "o", "u"];
  const fields = [];

  useEffect(() => {
    const q = query(collection(db, "Automarke"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const words = [];
      querySnapshot.forEach((doc) => {
        words.push({...doc.data(), id: doc.id})
      });
      const randomIndex = Math.floor(Math.random() * words.length);
      const chosenWord = words[randomIndex].word;
      setWord(chosenWord.split(""));
      setRandomNumber(randomIndex);
    });
    return () => {
      unsubscribe();
    };
  }, []);
  

  for (let i = 0; i < word.length; i++) {
    let letter = word.charAt(i);
    let isVowel = vowels.includes(letter.toLowerCase());
    let isGuessed = guessedLetters.includes(letter.toLowerCase());

    // Prüfen, ob der Buchstabe erraten wurde oder ob es ein Vokal ist
    if (isGuessed) {
      fields.push(
        <div
          className="w-10 h-10 bg-neutral flex justify-center items-center rounded-md mx-1"
          key={i}
        >
          <div className="w-4 h-4 border-b-2 border-primary flex justify-center items-center">
            <h1>{letter.toUpperCase()}</h1>
          </div>
        </div>
      );
    } else {
      // Wenn es ein Konsonant ist, wird ein Eingabefeld angezeigt
      fields.push(
        <div
          className="w-10 h-10 bg-neutral flex justify-center items-center rounded-md mx-1"
          key={i}
        >
          <div className="w-4 h-4 border-b-2 border-primary flex justify-center items-center">
            {consonantToGuess === letter.toLowerCase() ? (
              <h1>{letter.toUpperCase()}</h1>
            ) : (
              <h1></h1>
            )}
          </div>
        </div>
      );
    }
  }

  function showLetter(event) {
    // read the input field value to get the entered letter
    const inputLetter = event.target.previousSibling.value.toLowerCase();
    if (inputLetter && !vowels.includes(inputLetter)) {
      setConsonantToGuess(inputLetter);
      setGuessedLetters([...guessedLetters, inputLetter]);
    } else {
      const updatedRemainingLives = remainingLives - 1;
      setRemainingLives(updatedRemainingLives);
    }
  }
  

  function getRandomNumber() {
    const randomNumber = Math.floor(Math.random() * 11) * 10;
    return randomNumber;
  }

  function handleSpinClick() {
    const possibleMoney = getRandomNumber();
    setRandomNumber(possibleMoney === 0 ? "dead" : possibleMoney);
    setLastRandomNumber(randomNumber);

    if (possibleMoney > 0) {
      setBankAccount(bankAccount + possibleMoney);
    }
  }

  function handleVowelClick() {
    const vowelPrice = 50;
    if (bankAccount >= vowelPrice) {
      // remove vowel from remaining vowels
      const remainingVowels = vowels.filter((vowel) => !word.includes(vowel));
      if (remainingVowels.length > 0) {
        // choose random vowel from remaining vowels
        const randomVowel =
          remainingVowels[Math.floor(Math.random() * remainingVowels.length)];
        // add vowel to word and deduct price from bank account
        const updatedWord = word + randomVowel;
        const updatedBankAccount = bankAccount - vowelPrice;
        setWord(updatedWord);
        setBankAccount(updatedBankAccount);
      }
    }
  }

  return (
    <div className="w-full h-screen pt-[90px]">
      <div className="pt-10 flex justify-center items-center">
        <div className="w-2/3 h-[600px] rounded-lg shadow-md">
          <div className="flex">
            <AiFillHeart />
            <AiFillHeart />
            <AiFillHeart className="" />
          </div>
          <div className="flex">{fields}</div>
          <h1>Hello</h1>
          <div className="stats shadow bg-neutral">
            <div className="stat">
              <div className="stat-title">Prize</div>
              <div className="stat-value">{randomNumber}</div>
              <div className="stat-desc">bank account: {bankAccount}</div>
            </div>
          </div>
          <button onClick={handleSpinClick} className="btn btn-primary">
            spin wheel
          </button>
          <button onClick={handleVowelClick} className="btn btn-primary">
            Vokal kaufen
          </button>
        </div>
      </div>
      <div className="form-control w-full max-w-xs">
        <label className="label">
          <span className="label-text">Gebe Konsonant an</span>
        </label>
        <input
          type="text"
          placeholder="Type here"
          maxLength="1"
          value={consonantToGuess || ""}
          className="input input-bordered w-full max-w-xs"
          onChange={(event) => setConsonantToGuess(event.target.value.toLowerCase())}
        />
        <button className="btn btn-primary" onClick={(event) => showLetter(event)}>enter Konsonant</button>
        <div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Gebe Wort an</span>
            </label>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
            />
            <button className="btn btn-primary">enter word</button>
          </div>
        </div>
        <p>{remainingLives}</p>
      </div>
    </div>
  );
};

export default Content;
