export default {
    updateProfile(context, payload) {
        console.log(context);
        context.commit('updateProfile', payload);
 
    },
    updateUser(context, payload) {
        console.log(context);
        context.commit('updateUser', payload);
       
    },
    updateFileList(context,payload){
        context.commit('updateFileList', payload);
    },
    updateFolders(context,payload){
        context.commit('updateFolders', payload);
    },
    setFolders(context, payload) {
        console.log(context);
        context.commit('setFolders', payload);
    },
    setProfileType(context, payload) {
        console.log(context);
        context.commit('setProfileType', payload);
    },
    setIdToken(context, payload) {
        console.log(context);
        context.commit('setIdToken', payload);

    },
    setAccessToken(context, payload) {
        console.log(context);
        context.commit('setAccessToken', payload);
     
    },
    setExpiresAt(context, payload) {
        console.log(context);
        context.commit('setExpiresAt', payload);
  
    },
    updateGeo(context, payload) {
        console.log(context);
        context.commit('updateGeo', payload);
        
    },
    updateAuth(context, payload) {
        context.commit('updateAuth', payload);
        
    },
    updateCurrentListing(context, payload) {
        context.commit('updateCurrentListing', payload);
        
    },
    updateFinishSpeakingThreshold(context, payload) {
        context.commit('updateFinishSpeakingThreshold', payload);
        
    },
    updateFinishSpeakingDelay(context, payload) {
        context.commit('updateFinishSpeakingDelay', payload);
        
    },
    updateLoading(context, payload) {
        context.commit('updateLoading', payload);
        
    },
    updateDrawerOpened(context, payload) {
        context.commit('updateDrawerOpened', payload);

    },
    updateUtterances(context, payload) {
        context.commit('updateUtterances', payload);
    },
    updateOffline(context, payload) {
        context.commit('updateOffline', payload);
        // socket.emit('UPDATE_OFFLINE', payload);
    },
    setState(context,payload){
         context.commit('setState', payload);
    }
};