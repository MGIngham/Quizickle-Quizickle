export class Round {
    id?: number;
    quizId: number;
    roundNumber: number;
    roundName: string;

    constructor( 
        quizId: number, 
        number: number,
        name: string){
            this.quizId = quizId;
            this.roundNumber = number;
            this.roundName = name;
    }
}