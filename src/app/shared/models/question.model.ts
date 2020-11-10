export class Question {

    id?: number;
    quizId: number;
    roundNumber: number;
    questionType: number;
    questionText: string;
    isTrueFalse: boolean;
    answerText: string;
    optionOne: string;
    optionTwo: string;
    optionThree: string;

    constructor(quizId: number,
        roundNumber: number,
        questionType: number,
        questionText: string,
        answerText: string,
        isTrueFalse: boolean,
        optionOne: string,
        optionTwo: string,
        optionThree: string) {
            this.quizId = quizId;
            this.roundNumber = roundNumber;
            this.questionType = questionType;
            this.questionText = questionText;
            this.answerText = answerText;
            this.isTrueFalse = isTrueFalse;
            this.optionOne = optionOne;
            this.optionTwo = optionTwo;
            this.optionThree = optionThree;
    }
}