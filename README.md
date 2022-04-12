**quizzical App**

## App for quizz questions.

## First page ask to start quizz

There is a button asking if the user wants to start the quizz.
If he clicks another page is rendered (state to check if the user wants to starts StartState)

## Pull 5 questions from a DB

once he clicks 5 questions are pulled from the API DB (UseEffect on the StartState)

## let user choose answers

multiple choice answer (create an object containing all answer of a question with its status false or true and if it is choosen)

## check if answers are ok

if the choosen answer is correct display it in green and add 1 to the score

