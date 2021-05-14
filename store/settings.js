export const state = () => ({
    darkMode: false,
});

export const getters = {
    getSetting(state) {
        return state;
    },
    isDarkMode(state) {
        return !!state.darkMode;
    }
};

export const mutations = {
    setDarkMode(state, payload) {
        if (typeof payload === 'boolean') {
            state.darkMode = payload;
        } else {
            return false;
        }
    }
};

export const actions = {};