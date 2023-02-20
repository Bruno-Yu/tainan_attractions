import dayjs from 'dayjs';

class Helper {
  static generateRandomString(length) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }

  /**
   * 字串中要隱碼的部分
   *
   */
  static formatName(str, start, end = null) {
    const arr = str.split('');
    if (!end) {
      arr[start] = '*';
    } else {
      for (let i = start; i < end; i++) {
        arr[i] = '*';
      }
    }
    const newStr = arr.join('');
    return newStr;
  }

  static formatCustomerName(str, start, end = null) {
    const arr = str.split('');
    if (!end) {
      arr[start] = ' ○ ';
    } else {
      for (let i = start; i < end; i++) {
        arr[i] = ' ○ ';
      }
    }
    const newStr = arr.join('');
    return newStr;
  }

  static formatEmail(str, start = 2, end = null) {
    const acc = str.split('@');
    const arr = acc[0].split('');
    if (arr.length > 2) {
      if (!end) {
        arr[start] = '*';
      } else {
        for (let i = start; i < end; i++) {
          arr[i] = '*';
        }
      }
    }
    const newStr = `${arr.join('')}@${acc[1]}`;
    return newStr;
  }

  static formatAddress(str) {
    const regex = /\d/;
    const newStr = str.replace(regex, '*');
    return newStr;
  }


  // 數字加入千分位
  static numberWithCommas(number) {
    if (number) {
      return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    }
    return 0;
  }

  /**
   * 複製文本內容
   * @param {String} text - 要複製的內容
   * @param {Boolean} showToast - 是否显示讯息
   */
  static copyByText(text) {
    const oInput = document.createElement('input');
    if (text) {
      oInput.value = text;
      document.body.appendChild(oInput);
      oInput.select();
      document.execCommand('Copy');
      oInput.className = 'oInput';
      oInput.parentNode.removeChild(oInput);
      return true;
    }
    return false;
  }

  /**
   * 將阿拉伯數字轉成中文數字
   * @param {Number} num
   */
  static getCHNumber(num) {
    const result = num.toLocaleString('zh-Hans-CN-u-nu-hanidec');
    return result;
  }

  /**
   * 信箱驗證
   *
   */
  static emailVerify(email) {
    const regex = '^\\w{1,63}@[a-zA-Z0-9]{2,63}\\.[a-zA-Z]{2,63}(\\.[a-zA-Z]{2,63})?$';
    const reg = new RegExp(regex);
    return reg.test(email);
  }

  /**
   * 手機驗證
   *
   */
  static telephoneVerify(telephoneNumber) {
    const regex = /^(\+886-?|0)9-?\d{2}-?\d{3}-?\d{3}$/;
    const reg = new RegExp(regex);
    return reg.test(telephoneNumber);
  }

  /**
   * 身分證驗證
   *
   */
  static verifyId(id) {
    id = id.trim();
    const reg = /^[A-Z]{1}[1-2]{1}[0-9]{8}$/; // 身份證的正規表示式
    if (reg.test(id)) {
      const s = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'; // 把A取代成10,把B取代成11...的作法
      const ct = ['10', '11', '12', '13', '14', '15', '16', '17', '34', '18', '19', '20', '21',
        '22', '35', '23', '24', '25', '26', '27', '28', '29', '32', '30', '31', '33'];
      let i = s.indexOf(id.charAt(0));
      const tempid = ct[i] + id.substr(1, 9); // 若此身份證號若是A123456789=>10123456789
      let num = tempid.charAt(0) * 1;
      for (i = 1; i <= 9; i++) {
        num += tempid.charAt(i) * (10 - i);
      }
      num += tempid.charAt(10) * 1;

      if ((num % 10) === 0) {
        return true;
      }

      return false;
    }

    return false;
  }

  /**
   * 室內電話驗證
   *
   */
  static phoneVerify(phoneNumber) {
    const regex = /(\d{2,3}-?|\(\d{2,3}\))\d{3,4}-?\d{4}/;
    const reg = new RegExp(regex);
    return reg.test(phoneNumber);
  }

  /**
   * dash半形轉換全形
   *
   */
  static dashToDBC(txtstring) {
    if (txtstring) {
      const stringList = txtstring.split('');
      const dashPos = stringList.indexOf('-');
      if (dashPos === -1) {
        return null;
      }
      stringList[dashPos] = '－';
      return stringList.join('');
    }
    return null;
  }

  static toRocYear(time, format = 'YYYY/MM/DD HH:mm:ss') {
    if (!time) return null;

    const rocYear = 1911;
    const rocTime = dayjs(time).add(-rocYear, 'years').format(format);

    return rocTime;
  }

  static rocYearToADYear(time, format = 'YYYY/MM/DD HH:mm:ss') {
    if (!time) return null;

    const rocYear = 1911;
    const rocTime = dayjs(time).add(rocYear, 'years').format(format);

    return rocTime;
  }

  static throttle(func, timeout = 250) {
    let last = 0;
    return (e) => {
      const now = new Date();
      if (now - last >= timeout) {
        func(e);
        last = now;
      }
    };
  }

  /**
   * 密碼驗證
   * 密碼長度8~12碼，只允許英數字，英文需區分大小寫，英文大、小寫及數字至少各一碼
   */
  static passwordVerify(password) {
    const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,12}$/;
    const reg = new RegExp(regex);
    return reg.test(password);
  }
}

export default Helper;
