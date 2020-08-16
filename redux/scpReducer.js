const SET_WHO_HIDDEN = 'scp/SET_WHO_HIDDEN';

const initialState = {
    scpList: [
        [
            {id: 1, name: 'One-0'},
            {id: 2, name: 'Two-0'},
            {id: 3, name: 'Three-0'},
            {id: 4, name: 'Four-0'},
            {id: 5, name: 'Five-0'},
            {id: 6, name: 'Six-0'},
        ],
        [
            {id: 1, name: 'One-1'},
            {id: 2, name: 'Two-1'},
            {id: 3, name: 'Three-1'},
            {id: 4, name: 'Four-1'},
            {id: 5, name: 'Five-1'},
            {id: 6, name: 'Six-1'},
        ],
        [
            {id: 1, name: 'One-2'},
            {id: 2, name: 'Two-2'},
            {id: 3, name: 'Three-2'},
            {id: 4, name: 'Four-2'},
            {id: 5, name: 'Five-2'},
            {id: 6, name: 'Six-2'},
        ],
        [
            {id: 1, name: 'One-3'},
            {id: 2, name: 'Two-3'},
            {id: 3, name: 'Three-3'},
            {id: 4, name: 'Four-3'},
            {id: 5, name: 'Five-3'},
            {id: 6, name: 'Six-3'},
        ],
        [
            {id: 1, name: 'One-4'},
            {id: 2, name: 'Two-4'},
            {id: 3, name: 'Three-4'},
            {id: 4, name: 'Four-4'},
            {id: 5, name: 'Five-4'},
            {id: 6, name: 'Six-4'},
        ],
        [
            {id: 1, name: 'One-5'},
            {id: 2, name: 'Two-5'},
            {id: 3, name: 'Three-5'},
            {id: 4, name: 'Four-5'},
            {id: 5, name: 'Five-5'},
            {id: 6, name: 'Six-5'},
        ],
    ],
    levelList: ['lvl-0', 'lvl-1', 'lvl-2', 'lvl-3', 'lvl-4', 'lvl-5',],
    level: 0,
    who: null,
    endRound: false,
    attemptScore: 0,
    totalScore: 0,
    endGame: false,
};

const scpReducer = (state = initialState, action) => {
    switch (action.type) {
    case SET_WHO_HIDDEN: {
        return {
            ...state,
            who: action.value,
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

export const chooseHidden = () => (dispatch) => {
    const random = Math.floor(Math.random() * 5) + 1;
    dispatch(setWhoHidden(random))
};

export default scpReducer;
