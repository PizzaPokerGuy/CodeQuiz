import { QuestionType, QuestionTopic } from "../../";

export class InputMultiple {
    public id: string;
    public questionTopic: QuestionTopic;
    public options: string[];
    public questionType: QuestionType;
    public questionText: string[];
    public answer: string[];
    public helpInfo: string;

    constructor(data?: any) {
        const defaults = {
            questionType: QuestionType.InputMultiple,
            questionText: '',
            answer: [],
            options: [],
            helpInfo: '',
            ...data
        };

        this.questionType = defaults.questionType;
        this.questionText = defaults.questionText;
        this.answer = defaults.answer;
        this.helpInfo = defaults.helpInfo;
        this.questionTopic = defaults.questionTopic;
        this.options = defaults.options;
        this.id = defaults.id;
    }
}