export class Answer {
    //questionNumber: number;
    roundNumber: number;
    questionText: string;
    correctAnswer: string;
    givenAnswer: string;
    isCorrectAnswer: boolean;

    constructor(
        //questionNumber: number,
        roundNumber: number,
        questionText: string,
        correctAnswer: string,
        givenAnswer: string,
        isCorrectAnswer: boolean
    ) {
        //this.questionNumber = questionNumber;
        this.roundNumber = roundNumber;
        this.questionText = questionText;
        this.correctAnswer = correctAnswer;
        this.givenAnswer = givenAnswer;
        this.isCorrectAnswer = isCorrectAnswer;
    }
}