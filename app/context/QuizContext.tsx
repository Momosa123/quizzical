import { createContext, useContext, useReducer, ReactNode } from 'react';

interface Question {
  id: string;
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
}

interface QuizState {
  questions: Question[];
  userAnswers: Record<string, string>; // { questionId: selectedAnswer }
  score: number;
  isComplete: boolean;
}

function calculateScore(questions: Question[], userAnswers: Record<string, string>): number {
  return questions.reduce((score, question) => {
    return userAnswers[question.id] === question.correct_answer ? score + 1 : score;
  }, 0);
}

type QuizAction = 
  | { type: 'SET_ANSWER'; questionId: string; answer: string }
  | { type: 'COMPLETE_QUIZ' }
  | { type: 'RESET_QUIZ' };

const initialState: QuizState = {
  questions: [],
  userAnswers: {},
  score: 0,
  isComplete: false
};

function quizReducer(state: QuizState, action: QuizAction): QuizState {
  switch (action.type) {
    case 'SET_ANSWER':
      return {
        ...state,
        userAnswers: {
          ...state.userAnswers,
          [action.questionId]: action.answer
        }
      };
    case 'COMPLETE_QUIZ':
      const score = calculateScore(state.questions, state.userAnswers);
      return {
        ...state,
        score,
        isComplete: true
      };
    case 'RESET_QUIZ':
      return initialState;
    default:
      return state;
  }
}

const QuizContext = createContext<{
  state: QuizState;
  dispatch: React.Dispatch<QuizAction>;
} | undefined>(undefined);

export function QuizProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(quizReducer, initialState);

  return (
    <QuizContext.Provider value={{ state, dispatch }}>
      {children}
    </QuizContext.Provider>
  );
}

export function useQuiz() {
  const context = useContext(QuizContext);
  if (context === undefined) {
    throw new Error('useQuiz must be used within a QuizProvider');
  }
  return context;
} 