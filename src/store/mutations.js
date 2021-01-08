export default {
    // 切换语言
    changeLanguage(state, val) {
        state.language = val;
    },
    // 手势密码
    changeVueGesture(state, key, val) {
        state[key] = val;
    }
};
