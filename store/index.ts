import useAppStore from './modules/app';
import {userStore} from './modules/user';

const useStore = () => ({
  app: useAppStore(),
  userStore: userStore()
})

export default useStore
