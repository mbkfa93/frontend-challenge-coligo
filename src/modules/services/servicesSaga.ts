import {yieldCombinedSagas} from "../../sagas/sagaHelper";
import {quizSaga} from "./quiz/quizServices";



export default function* saga_services() {
    yield yieldCombinedSagas([
        quizSaga
    ]);
};


