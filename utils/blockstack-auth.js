import blockstack from '../node_modules/blockstack/dist/blockstack.js';
const appConfig = new blockstack.AppConfig(['store_write', 'publish_data'])
const userSession = new blockstack.UserSession({ appConfig:appConfig});
export {
    userSession,
    blockstack
}
