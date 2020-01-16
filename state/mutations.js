export default {
    setState(state,payload){
            state = {...state, ...payload};
    console.log(state);
    return state;
    },
    updateUser(state, payload) {
       state = {...state, user:payload}; 
        return state;
    },
    updateFileList(state, payload) {
        state = {...state, fileList:payload}; 
         return state;
     },
     setFolders(state, payload) {
        state = {...state, folders:payload}; 
         return state;
    },
    updateFolders(state, payload) {
        state = {...state, folders:[...state.folders, payload]}; 
         return state;
    },
    updateProfile(state, payload) {
        state = {...state, profile:payload}; 
         return state;
     },
    setProfileType(state, payload) {
        state = {...state, profileType:payload}; 
         return state;
     },
    setIdToken(state, payload) {
        state = {...state, idToken:payload}; 
         return state;
     },
     setAccessToken(state, payload) {
        state = {...state, accessToken:payload}; 
         return state;
     },
     setExpiresAt(state, payload) {
        state = {...state, expiresAt:payload}; 
         return state;
     },
    updateAuth(state, payload) {
        state = {...state, authenticated:payload}; 
         return state;
     },
     updateGeo(state, payload) {
        state = {...state, geo:payload}; 
         return state;
     },
    updateLoading(state, payload) {
        state = {...state, loading:payload}; 
         return state;
     },
     updateOffline(state, payload){
        state = {...state, offline:payload}; 
  
        return state;
     },
     updateFinishSpeakingDelay(state,payload){
        state = {...state, finishSpeakingDelay:payload}; 
        return state;
     },
     updateFinishSpeakingThreshold(state,payload){
        state = {...state, finishSpeakingThreshold:payload}; 
        return state;
     },
     updateCurrentListing(state, payload) {
        state = {...state, currentListing:payload}; 
        return state;
        
    },
     updateDrawerOpened(state, payload){
        state = {...state, drawerOpen:payload}; 
        return state;
     },
};