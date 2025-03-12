//Type of the data returned by the quizz API
export type QuizzType = {
  category: string
  difficulty: string
  question: string
  correct_answer: string
  incorrect_answers: string[]
  type: string
  id: string
  answer: string
}

