import { createContext, useContext } from 'react'

export type ScoreContext = {
  score: number
  setScore: (n: number) => void
}

export const MyScoreContext = createContext<ScoreContext>({
  score: 0,
  setScore: () => { }
})

export const useScoreContext = () => useContext(MyScoreContext)