module.exports = {
  Query: { 
    async mapServer (parentValue, { url }, context) {
      const { services: { featureService } } = context
      context.serviceUrl = url
      return featureService.get(url)
    }
  },
  Layer: {
    async fields (parentValue, args, context) {
      const { serviceUrl, services: { layerService } } = context
      const layer = await layerService.get(serviceUrl, parentValue.id)
      return layer.fields
    }
  }
};
