const Benchmark = require('benchmark')

const { getType: getRuntypeType } = require('../lib/space-object/runtypes')
const { getType: getIOType } = require('../lib/space-object/io-ts')
const { getType: getTCombType } = require('../lib/space-object/tcomb-validation')
const { getType: getJoiType } = require('../lib/space-object/joi')
const { getType: getAJVType } = require('../lib/space-object/ajv')
const { getType: getZodType } = require('../lib/space-object/zod')

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

console.log('Lambda Test: Valid Input')
suite
  .add('zod', () => {
    const t = getZodType()
    t.safeParse(input)
  })
  .add('runtypes', () => {
    const t = getRuntypeType()
    t.validate(input)
  })
  .add('io-ts: decode', () => {
    const t = getIOType()
    t.decode(input)
  })
  .add('io-ts: is', () => {
    const t = getIOType()
    t.is(input)
  })
  .add('tcomb-validation', () => {
    const { validate, type } = getTCombType()
    validate(input, type)
  })
  .add('joi', () => {
    const t = getJoiType()
    t.validate(input)
  })
  .add('ajv', () => {
    const t = getAJVType()
    t(input)
  })
  .on('cycle', (event) => {
    const { mean } = event.target.stats
    const ms = (mean * 1000).toFixed(4)
    console.log(`${event.target.toString()} / ${ms}ms`)
  })
  .on('complete', (e) => {
    const { currentTarget: suite } = e
    console.log(`Fastest is ${suite.filter('fastest').map('name')}\n`)
  })
  .run({ async: true })
