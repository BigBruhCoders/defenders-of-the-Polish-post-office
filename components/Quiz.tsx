import useTranslation from "next-translate/useTranslation";
import {
    AnswerBox,
    AnswerButton, EndBox, EndButton, EndScore, EndText,
    MainBox,
    QuestionBox,
    QuestionText,
    StartBox,
    StartButton,
    StartText
} from "../styles/Quiz";
import {useState} from "react";
import {Question} from "../types";

export const QuizComponent = () => {
    const {t} = useTranslation("quiz");
    const [allQuestions, _setAllQuestions] = useState<Question[]>(t("questions", {count: 0}, {returnObjects: true}));
    const [questions, setQuestions] = useState<Question[]>(allQuestions);
    const [question, setQuestion] = useState<Question | null>(null);
    const [points, setPoints] = useState(0);

    const start = () => {
        setPoints(0);
        let q = shuffle([...allQuestions]);
        setQuestion(q.pop() ?? null);
        setQuestions(q);
    }

    const checkQuestion = (answer: string) => {
        if (answer === question?.good) {
            setPoints(points + 1);
        }
        setQuestion(questions.pop() ?? null);
    }

    return <MainBox>
        {question ? <QuestionBox>
            <QuestionText>{question.question} - {allQuestions.length - questions.length}/{allQuestions.length}</QuestionText>
            <AnswerBox>
                {shuffle(question.wrong.concat(question.good)).map((q, i) => <AnswerButton
                    onClick={() => checkQuestion(q)} key={i}>{q}</AnswerButton>)}
            </AnswerBox>
        </QuestionBox> : questions.length > 0 ?
            <StartBox>
                <StartText>{t("startQuiz")}</StartText>
                <StartButton onClick={start}>START</StartButton>
            </StartBox> : <EndBox>
                <EndText>{t("youAnswered")}</EndText>
                <EndScore>
                    {t("yourScore")} {points}/{allQuestions.length}<br/>
                    {Math.round(points / allQuestions.length * 100)}{"%"}
                </EndScore>
                <EndButton onClick={start}>{t("tryAgain")}</EndButton>
            </EndBox>}
    </MainBox>
}

const shuffle = <T, >(array: T[]): T[] => {
    let currentIndex = array.length, randomIndex;
    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }
    return array;
}