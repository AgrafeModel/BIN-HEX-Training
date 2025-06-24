// The main structure of exercise
export type Exo = {
  id: number;
  title: string;
  description: string;
  hint: string;
  difficulty: Difficulty;
  tags: string[];
  code: string; // the starting code
  solution: string; // An example of solution (used for hint)
};

// The difficulty of the exercise
export const Difficulty = {
  EASY: "easy",
  MEDIUM: "medium",
  HARD: "hard",
} as const;
export type Difficulty = (typeof Difficulty)[keyof typeof Difficulty];
