const got = require('got');

module.exports = {
  featureService: {
    async get (url) {
      const featureService = await got(`${url}?f=json`).json()
      return { ...featureService, serviceUrl: url }
    }
  },
  layerService: {
    async get (url, layerId) {
      return got(`${url}/${layerId}?f=json`).json()
    }
  }
};