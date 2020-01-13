module.exports = {
  Query: { 
    async featureService (parentValue, { url }, context) {
      const { services: { featureService } } = context
      context.serviceUrl = url
      return featureService.get(url)
    }
  },
  FeatureService: {
    capabilities ({ capabilities }, args, context) {
      if (capabilities.length) {
        return capabilities.split(',').map(c => c.toLowerCase())
      }

      return []
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
