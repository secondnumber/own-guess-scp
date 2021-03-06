import scp from './scpData';

const SET_WHO_HIDDEN = 'scp/SET_WHO_HIDDEN';
const SET_LEVEL= 'scp/SET_LEVEL';
const SET_ATTEMPT_SCORE= 'scp/SET_ATTEMPT_SCORE';
const SET_TOTAL_SCORE= 'scp/SET_TOTAL_SCORE';
const SET_ROUND_END= 'scp/SET_ROUND_END';
const SET_END_GAME= 'scp/SET_END_GAME';
const SET_FULL_END= 'scp/SET_FULL_END';
const SET_DARKNESS= 'scp/SET_DARKNESS';

const initialState = {
    scpList: scp,
    levelList: ['Нейтрализован/не назначен', 'Безопасные', 'Евклид', 'Кетер', 'Таумиэль', 'Нестандартные',],
    level: 0,
    who: null,
    endRound: false,
    attemptScore: 0,
    totalScore: 0,
    endGame: false,
    fullEnd: false,
    darkness: false,
};

const scpReducer = (state = initialState, action) => {
    switch (action.type) {
    case SET_WHO_HIDDEN: {
        return {
            ...state,
            who: action.value,
        }
    }
    case SET_LEVEL: {
        return {
            ...state,
            level: action.value,
        }
    }
    case SET_ATTEMPT_SCORE: {
        return {
            ...state,
            attemptScore: action.value,
        }
    }
    case SET_TOTAL_SCORE: {
        return {
            ...state,
            totalScore: action.value,
        }
    }
    case SET_ROUND_END: {
        return {
            ...state,
            endRound: action.value,
        }
    }
    case SET_END_GAME: {
        return {
            ...state,
            endGame: action.value,
        }
    }
    case SET_FULL_END: {
        return {
            ...state,
            fullEnd: action.value,
        }
    }
    case SET_DARKNESS: {
        return {
            ...state,
            darkness: action.value,
        }
    }
    default:
        return state;
    }
}

const setWhoHidden = (value) => ({
    type: SET_WHO_HIDDEN,
    value
});

const setLevel = (value) => ({
    type: SET_LEVEL,
    value
});

const setAttemptScore = (value) => ({
    type: SET_ATTEMPT_SCORE,
    value
});

const setTotalScore = (value) => ({
    type: SET_TOTAL_SCORE,
    value
});

const setRoundEnd = (value) => ({
    type: SET_ROUND_END,
    value
});

const setEndGame = (value) => ({
    type: SET_END_GAME,
    value
});

const setFullEnd = (value) => ({
    type: SET_FULL_END,
    value
});

const setDarkness = (value) => ({
    type: SET_DARKNESS,
    value
});

export const chooseHidden = (value) => (dispatch) => {
    dispatch(setWhoHidden(value));
};

export const setNextLevel = (level) => (dispatch) => {
    const value = level + 1;
    dispatch(setLevel(value));
};

export const countAttemptScore = (value) => (dispatch) => {
    dispatch(setAttemptScore(value));
};

export const nullifyTotalScore = (value) => (dispatch) => {
    dispatch(setTotalScore(value));
};

export const countTotalScore = (attempt, total) => (dispatch) => {
    const value = total + 5 - attempt;
    dispatch(setTotalScore(value));
};

export const isRoundEnd = (value) => (dispatch) => {
    dispatch(setRoundEnd(value));
};

export const makeGameEnd = (value) => (dispatch) => {
    dispatch(setEndGame(value));
};

export const makeFullEnd = () => (dispatch) => {
    dispatch(setFullEnd(true));
};

export const makeDarkness = () => (dispatch) => {
    dispatch(setDarkness(true));
};

export const initializeNewGame = () => (dispatch) => {
    dispatch(setNextLevel(-1));
    dispatch(countAttemptScore(0));
    dispatch(nullifyTotalScore(0));
    dispatch(isRoundEnd(false));
    dispatch(makeGameEnd(false));
    dispatch(setFullEnd(false));
    dispatch(setDarkness(false));
};

export default scpReducer;
