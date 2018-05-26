export default function counter(state = 0, action) {
    switch (action.type) {
        case 'INC':
            return state + 1;
            break;
        case 'DEC':
            return state - 1;
            break;
        default:
            return state;
    }
}
