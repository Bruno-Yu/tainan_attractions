import Api from '@/assets/js/api/api';
// import qs from 'qs';

// const apiPrefix = import.meta.env.VITE_APP_API;
// const apiPrefix = process.env.API_BASE_URL;
// const apiPath = import.meta.env.VITE_APP_PATH;
// const apiPath = process.env.API_BASE_URL_PATH;
// const apiPrefix = import.meta.env.VITE_LOCAL_API;
const apiPrefix = 'https://vue3-course-api.hexschool.io/v2/';
const apiPath = 'brunoyu2023';

// Api 自 Api 繼承所有屬性與方法
class atrApi extends Api {
  // static apiPrefix = process.env.API_BASE_URL;
  // static apiPath = process.env.API_BASE_URL_PATH;
  // http://localhost:3000/;
  // https://vue3-course-api.hexschool.io/v2/;
  // brunoyu2023

  // 登入
  static async login({ username, password }) {
    const params = {
      username, password,
    };
    const res = await this.callAxios('POST', `${apiPrefix}admin/signin`, params, undefined, undefined, false);
    return res;
  }

  // 登出
    static async logOut() {
    const res = await this.callAxios('POST', `${apiPrefix}logout`, null, undefined, undefined, true);
    return res;
  }

  // 確認是否是登入狀態
    static async checkLoginStatus() {
    const res = await this.callAxios('POST', `${apiPrefix}api/user/check`, null, undefined, undefined, true);
    return res;
  }

    // 前台取得景點
  static async getProducts( page=1, category='') {
    const queryPage = `?page=${page}`;
    const queryCategory = category? `?category=${category}`: '';
    const res = await this.callAxios('GET', `${apiPrefix}api/${apiPath}/products${queryPage}${queryCategory}`, null, undefined, undefined, false);
    return res;
  }

  // 新增購物車
  static async addToCart({data}) {
      const params = {
      data,
    };
    const res = await this.callAxios('POST', `${apiPrefix}api/${apiPath}/cart`, params, undefined, undefined, false);
    return res;
  }


  // 取得購物車
    static async getCart() {
    const res = await this.callAxios('GET', `${apiPrefix}api/${apiPath}/cart`, null, undefined, undefined, false);
    return res;
  }

  // 更新購物車數量
  static async editCart({ data }, id) {
    const params = {
      data,
    }
    const res = await this.callAxios('PUT', `${apiPrefix}api/${apiPath}/cart/${id}`, params, undefined, undefined, false);
    return res;
  }

    // 刪除購物車單一產品
  static async deleteCartProduct(id) {
    const res = await this.callAxios('DELETE', `${apiPrefix}api/${apiPath}/cart/${id}`, null, undefined, undefined, false);
    return res;
  }

      // 刪除購物車全部產品
  static async deleteCartAll() {
    const res = await this.callAxios('DELETE', `${apiPrefix}api/${apiPath}/carts`, null, undefined, undefined, false);
    return res;
  }


  // admin取得景點
  static async getAdminProducts() {
    const res = await this.callAxios('GET', `${apiPrefix}api/${apiPath}/admin/products/all`, null, undefined, undefined, true);
    return res;
  }

  // 更新
  static async editAdminProduct(id, {title, category, origin_price, rating, num, price, unit, description, content, is_enabled,imageUrl, imagesUrl }) {
    const params = {
    'data':{ 
      title,
      category,
      origin_price,
      rating,
      price,
      unit,
      num,
      description,
      content,
      is_enabled,
      imageUrl,
      imagesUrl,
      }
    };
    const res = await this.callAxios('PUT', `${apiPrefix}api/${apiPath}/admin/product/${id}`, params, undefined, undefined, true);
    return res;
  }
    // 新增
  static async addAdminProduct( {title, category, rating, origin_price, price, num, unit, description, content, is_enabled,imageUrl, imagesUrl }) {
    const params = {
    'data':{ 
      title,
      category,
      origin_price,
      price,
      unit,
      num,
      rating,
      description,
      content,
      is_enabled,
      imageUrl,
      imagesUrl,
      }
    };
    const res = await this.callAxios('POST', `${apiPrefix}api/${apiPath}/admin/product/`, params, undefined, undefined, true);
    return res;
  }

  // 刪除
    static async deleteAdminProduct(id) {
    const res = await this.callAxios('DELETE', `${apiPrefix}api/${apiPath}/admin/product/${id}`, null, undefined, undefined, true);
    return res;
  }
}

export default atrApi;
