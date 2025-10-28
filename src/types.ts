export interface Question {
  id: number;
  text: string;
  recommendation: string;
}

export interface TestResult {
  totalScore: number;
  questionScores: number[];
  recommendations: string[];
  level: 'low' | 'medium' | 'high';
  levelText: string;
  interpretation: string;
}

export interface TestConfig {
  questions: Question[];
  levels: {
    low: { min: number; max: number; text: string; interpretation: string };
    medium: { min: number; max: number; text: string; interpretation: string };
    high: { min: number; max: number; text: string; interpretation: string };
  };
}
