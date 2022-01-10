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
jsonschema x 8,663 ops/sec ±5.22% (92 runs sampled) / 0.1154ms
zod x 24,477 ops/sec ±1.72% (91 runs sampled) / 0.0409ms
runtypes x 55,345 ops/sec ±0.30% (98 runs sampled) / 0.0181ms
io-ts: decode x 174,807 ops/sec ±0.52% (94 runs sampled) / 0.0057ms
io-ts: is x 210,652 ops/sec ±0.24% (95 runs sampled) / 0.0047ms
tcomb-validation x 28,837 ops/sec ±0.31% (98 runs sampled) / 0.0347ms
joi x 3,232 ops/sec ±1.66% (89 runs sampled) / 0.3094ms
ajv x 123 ops/sec ±2.27% (79 runs sampled) / 8.1404ms
Fastest is io-ts: is
```

Invalid input

```
jsonschema x 8,549 ops/sec ±0.84% (94 runs sampled) / 0.1170ms
zod x 13,034 ops/sec ±0.97% (86 runs sampled) / 0.0767ms
runtypes x 19,071 ops/sec ±2.43% (88 runs sampled) / 0.0524ms
io-ts: decode x 166,472 ops/sec ±0.41% (97 runs sampled) / 0.0060ms
io-ts: is x 206,836 ops/sec ±0.47% (97 runs sampled) / 0.0048ms
tcomb-validation x 24,178 ops/sec ±1.39% (89 runs sampled) / 0.0414ms
joi x 2,950 ops/sec ±1.69% (87 runs sampled) / 0.3390ms
ajv x 121 ops/sec ±2.24% (78 runs sampled) / 8.2925ms
Fastest is io-ts: is
```
