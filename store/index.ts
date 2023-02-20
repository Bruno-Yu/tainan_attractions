import useAppStore from './modules/app';
import {userStore} from './modules/user';

const store = () => ({
  app: useAppStore(),
  userStore: userStore()
})

export default store
