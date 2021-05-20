export const state = () => ({
    checkEnabled: true,
    colorGroups: true,
    lang: 'de',
    sorted: true,
    type: 'short',
});

export const getters = {
    getConfig(state) {
        return state;
    },
    getLang(state) {
        return state.lang;
    },
    getLangType(state) {
        return state.type;
    },
    isCheckEnabled(state) {
        return state.checkEnabled;
    },
    isColorGroups(state) {
        return state.colorGroups;
    },

    isSorted(state) {
        return state.sorted;
    },
};

export const mutations = {
    setConfig(state, p) {
        for (let key in state) {
            if (p.hasOwnProperty(key))
                state[key] = p[key];
        }
    }
};

export const actions = {};