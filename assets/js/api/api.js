import axios from 'axios';
import { userStore } from '@/stores';

class Api {
  // static SERVER = import.meta.env.VITE_LOCAL_API;

  static TOKEN;

  //  callAxios 方法
  // 先包裝 reqHeader 並定義與規範預設值 並傳入 5 個參數
  static async callAxios(method, url, params, contentType, responseType, auth) {
    const reqHeaders = {};

    // reqHeaders['Content-Type'] = contentType || 'application/json';

    const responseTypeText = responseType || 'json';
    if (auth) {
      const store = userStore();
      // 若有 權杖則先存取在 state.user 中
      // const { token } = this.$store.state.user.token;
      const { token } = store.$state;
      // 並存取在 reqHeader 裡
      // reqHeaders['Auth-token'] = `${token}`;
      reqHeaders.Authorization = `${token}`;
    }

    try { //
      const { status, data, headers } = await axios({
        headers: reqHeaders, // 放上方放置的 reqHeader
        method,
        url,
        // url: this.SERVER + url,
        data: params,
        responseType: responseTypeText, // 上方定義的接收資料格式
      });

      data.headers = headers;

      return new Promise((resolve, reject) => {
        if (status === 200) {
          resolve(data);
        } else {
          // reject(new Error(''));
          // this.$message.error(data.message);
          reject(data);
        }
      });
    } catch (error) {
      return error;
    }
  }
}

export default Api;
