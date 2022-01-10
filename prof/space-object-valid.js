// https://nodejs.org/en/docs/guides/simple-profiling/
// npm run prof
// node --prof-process isolate-0xnnnnnnnnnnnn-v8.log > processed.txt

const Benchmark = require('benchmark')
const { getType } = require('../lib/space-object/io-ts')

const io = getType()
const suite = new Benchmark.Suite()

const input = {
  type: 'ship',
  location: [1, 2, 3],
  mass: 4,
  name: 'foo',
  crew: [
    {
      name: 'bar',
      age: 44,
      rank: 'captain',
      home: {
        type: 'planet',
        location: [5, 6, 7],
        mass: 8,
        population: 1000,
        habitable: true,
      },
    },
  ],
}

suite
  .add('io-ts', () => {
    io.decode(input)
  })
  .on('cycle', (event) => {
    console.log(event.target.toString())
  })
  .on('complete', (e) => {
    const { currentTarget: suite } = e
    console.log(`Fastest is ${suite.filter('fastest').map('name')}\n`)
  })
  .run({ async: true })
