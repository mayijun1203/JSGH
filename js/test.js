var url = 'http://documentation.carto.com/api/v2/viz/2b13c956-e7c1-11e2-806b-5404a6a683d5/viz.json';

cartodb.createVis('map', url)
  .done(function(vis, layers) {
  });