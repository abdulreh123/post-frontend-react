
export const loadUser = (username) => (dispatch) => {
    dispatch({
        type: "USER_LOADED",
        payload: username,
    })
}
export const unLoadUser = () => (dispatch) => {
    dispatch({
        type: "USER_UNLOADED",
    })
}
export const reLoadUser = () => (dispatch) => {
    dispatch({
        type: "USER_RELOADED",
    })
}