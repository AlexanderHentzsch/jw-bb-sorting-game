export const state = () => ({
    lang: 'de',
    type: 'short',
    sorted: true,
});

export const getters = {
    getConfig(state) {
        return state;
    },
    getLang(state) {
        return state.lang;
    },
    getType(state) {
        return state.type;
    },
    getSorted(state) {
        return state.sorted;
    }
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