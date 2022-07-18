const KeyManager = require("../lib/KeyManager");
const CryptoAPI = require("../lib/CryptoAPI");

const check = {
  async price(cmd) {
    try {
      const keyManager = new KeyManager();
      const key = keyManager.getKey();

      const api = new CryptoAPI(key);
      const priceOutputDate = await api.getPriceData(cmd.coin, cmd.cur);
      console.log(priceOutputDate);
    } catch (err) {
      console.error(err.message.red);
    }
  },
};

module.exports = check;
