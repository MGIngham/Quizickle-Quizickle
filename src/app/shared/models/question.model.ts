export class Question {

    id?: number;
    quizId: number;
    questionNumber: number;
    questionType: number;
    questionText: string;
    isTrueFalse: boolean;
    answerText: string;
    optionOne: string;
    optionTwo: string;
    optionThree: string;

    constructor(quizId: number,
        questionNumber: number,
        questionType: number,
        questionText: string,
        isTrueFalse: boolean,
        answerText: string,
        optionOne: string,
        optionTwo: string,
        optionThree: string) {
            this.quizId = quizId;
            this.questionNumber = questionNumber;
            this.questionType = questionType;
            this.questionText = questionText;
            this.isTrueFalse = isTrueFalse;
            this.answerText = answerText;
            this.optionOne = optionOne;
            this.optionTwo = optionTwo;
            this.optionThree = optionThree;

    }
}