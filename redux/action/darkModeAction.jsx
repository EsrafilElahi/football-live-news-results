
export const setDarkMode = () => {
    return async (dispatch) => {
        await dispatch({ type: 'SET_DARKMODE' })
    }
}
