const gql = require('graphql-tag');

module.exports = gql`
  type Query {
    mapServer(url: String!): MapServer
  }

  type MapServer {
    serviceUrl: ID!
    mapName: String!
    currentVersion: Float!
    serviceDescription: String
    layers: [Layer]
  }

  type LayerSummary {
    id: Int!
    type: String!
    name: String
    parentLayerId: Int
    defaultVisibility: Boolean
    minScale: Int
    maxScale: Int
    geometryType: String
  }

  type Layer {
    id: Int!
    type: String!
    description: String
    geometryType: String
    sourceSpatialReference: SpatialReference
    parentLayer: String
    fields: [Field]!
    extent: Extent
    data(params: FeatureServiceQuery!): String 
  }

  type Field {
    name: String!
    type: String!
  }

  type Extent {
    xmin: Float
    ymin: Float
    xmax: Float
    ymax: Float
    spatialReference: SpatialReference
  }

  type SpatialReference {
    wkid: Int
    latestWkid: Int 
  }

  input FeatureServiceQuery {
    where: String!
    resultOffset: Int
    resultRecordCount: Int
  }
`;