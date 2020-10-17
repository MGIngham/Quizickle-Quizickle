export class Quiz {
    
    public id?: number;
    public quizName: string;
    public backgroundColour: string;

    constructor(id: number, name: string, colour: string){
        this.id = id;
        this.quizName = name;
        this.backgroundColour = colour;
    }
}