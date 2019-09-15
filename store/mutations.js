const mutation = {
    setInitialSnapshots(state, payload) {
        state.snapshots = payload;
    },
    setUser(state, payload) {
        state.user = payload.user;
        state.token = payload.token;
        state.isLoggedIn = true;
    },
    logOut(state, payload) {
        state.user = {};
        state.token = "";
        state.isLoggedIn = false;
    },
    changeMode(state, payload) {
        state.viewMode = payload;
    },
    postCreated(state, payload) {
        state.user.snaps.push(payload);
    }
}

export default mutation