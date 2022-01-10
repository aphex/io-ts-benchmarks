# Setup

```sh
git clone https://github.com/gcanti/io-ts-benchmarks.git
cd io-ts-benchmarks
npm i
npm run build
npm start
```

# Results

## space-object

```
node --version
v14.16.0
```

Valid input

```
zod x 25,015 ops/sec ±0.45% (90 runs sampled) / 0.0400ms
runtypes x 54,437 ops/sec ±0.63% (94 runs sampled) / 0.0184ms
io-ts: decode x 177,285 ops/sec ±0.50% (96 runs sampled) / 0.0056ms
io-ts: is x 208,791 ops/sec ±0.36% (91 runs sampled) / 0.0048ms
tcomb-validation x 28,298 ops/sec ±0.42% (96 runs sampled) / 0.0353ms
joi x 3,142 ops/sec ±0.91% (87 runs sampled) / 0.3183ms
ajv x 116 ops/sec ±3.28% (77 runs sampled) / 8.6465ms
Fastest is io-ts: is
```

Invalid input

```
zod x 13,037 ops/sec ±3.06% (84 runs sampled) / 0.0767ms
runtypes x 17,220 ops/sec ±2.84% (81 runs sampled) / 0.0581ms
io-ts: decode x 170,409 ops/sec ±0.88% (93 runs sampled) / 0.0059ms
io-ts: is x 204,928 ops/sec ±0.47% (93 runs sampled) / 0.0049ms
tcomb-validation x 23,248 ops/sec ±0.96% (90 runs sampled) / 0.0430ms
joi x 2,917 ops/sec ±1.43% (88 runs sampled) / 0.3428ms
ajv x 112 ops/sec ±4.02% (75 runs sampled) / 8.9632ms
Fastest is io-ts: is
```
