const Logger = (state) => (next) => (action) => {
    console.log(state);
    console.log(next);
    next(action);
    console.log(action);
}
export default Logger;