# 🎯 High-Low Number Guessing Game — Alert and Prompt Edition (29-Stu_HighLow)

Work with a partner to create an interactive **number guessing game** using only JavaScript’s built-in alert, prompt, and confirm functions.

---

## 👤 User Story

> **As a player,**  
> I want to guess a hidden number between 1 and 100,  
> so that I can test my logic and get immediate feedback.

---

## ✅ Acceptance Criteria

- **It’s done when** a random number between 1 and 100 is generated each game.  
- **It’s done when** the player enters a guess using `window.prompt()`.  
- **It’s done when** the game tells the player if their guess is too high, too low, or correct.  
- **It’s done when** the game tracks the number of guesses made.  
- **It’s done when** the game congratulates the player when they win.  
- **It’s done when** the player can choose to play again with `window.confirm()`.  

---

## 🧱 Your Task

1. Create a **function** called `playHighLowGame()`.  
2. Inside the function:
   - Generate a random number between 1 and 100.  
   - Keep track of the number of attempts.  
   - Use a **loop** to repeatedly ask for guesses with `prompt()`.  
   - Validate that the guess is a number between 1 and 100.  
   - Display feedback using `alert()` for each guess:
     - “Too high!”
     - “Too low!”
     - “Correct!”
   - End the loop when the correct number is guessed or the user cancels.  
   - Ask if they want to play again using `confirm()`.  

---

## 💡 Hints

- Use `Math.random()` and `Math.floor()` to generate a number between 1 and 100.  
- Convert string input to a number with `parseInt()`.  
- Use `isNaN()` to handle invalid inputs.  
- Use recursion (call `playHighLowGame()` again) to restart.  
- Make sure to return or `break` to stop loops correctly.  

---

## 🧠 Bonus Challenges

- Limit the number of attempts (e.g., 10 tries maximum).  
- Give hints like “🔥 Very close!” when the guess is within 5 of the number.  
- Track best scores or total games played.  
- Use emojis or fun phrasing to make feedback more engaging.  

---

## ✅ Quick Checklist

- [✅] Random number is generated  
- [✅] Player can enter guesses  
- [✅] Alerts indicate high, low, or correct  
- [✅] Tracks number of attempts  
- [✅] Option to play again  
- [✅] (Bonus) Attempt limits or close-range hints  
