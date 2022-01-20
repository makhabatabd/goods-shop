const defaultState = {
    currentGood: null
}

export const goodsSlice = (state = defaultState, action) => {
    switch (action.type) {
        case "setCurrentGood":
            return {...state, currentGood: state.currentGood = action.payload}

        default:
            return state;
    }
}
