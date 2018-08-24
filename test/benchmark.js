const Benchmark = require('benchmark')
var suite = new Benchmark.Suite;

// add tests
suite.add('#parseInt', function() {
  parseInt('123')
})
.add('#number', function() {
  Number("123")
})
// add listeners
.on('cycle', function(event) {
  console.log(String(event.target));
})
.on('complete', function() {
  console.log('Fastest is ' + this.filter('fastest').map('name'));
})
// run async
.run({ 'async': true });