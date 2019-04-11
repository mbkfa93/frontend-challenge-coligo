import {call, delay, spawn} from 'redux-saga/effects'

/**
 * @description To handle restarting of a saga, in case it failed.
 * used with root sagas only
 * @param saga
 * @returns {Function}
 */
const makeSagasRestartable = (saga: any) => {
    return function* () {
        yield spawn(function* () {
            while (true) {
                try {
                    yield call(saga);
                    console.error("unexpected root saga termination. The root rootSagaHandler are supposed to be rootSagaHandler that live during the whole app lifetime!", saga);
                } catch (e) {
                    console.error("Saga error, the saga will be restarted", e);
                }
                yield delay(1000);
            }
        })
    };
};


function* yieldCombinedSagas(sagas: any) {
    yield* sagas.map(function* (saga: any) {
        yield  saga();
    });
}

export {makeSagasRestartable, yieldCombinedSagas};


