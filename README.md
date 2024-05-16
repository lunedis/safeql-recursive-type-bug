# ts-safeql recursive json type bug

Reproduction repo for https://github.com/ts-safeql/safeql/issues/218

## How to reproduce

1) Start database:
```
docker compose up -d
```

2) Run eslint with `--fix`

```
npx eslint --fix .
```

3) See output: 

```
  21:5  error  Query has incorrect type annotation.
        Expected: { id: number; value: ({ type: 'entry'; name: string } | { type: 'group'; entries: Entry[] })[] }[]
          Actual: { id: number; value: Entry[] }[]  @ts-safeql/check-sql
```

4) Note that it does not fix the issue. 

5) Change the `'test.value': 'Entry[]'` line in `.eslintrc.js` to `'test.value': 'Entries'` (no need to define Entries anywhere). 

6) Run eslint

7) Note the maximum call stack size exceeded error

```
Oops! Something went wrong! :(

ESLint: 8.57.0

RangeError: Maximum call stack size exceeded
Occurred while linting /home/kalu/bw/safeql-recursive-type-bug/src/main.ts:21
Rule: "@ts-safeql/check-sql"
    at getSourceTextOfNodeFromSourceFile (/home/kalu/bw/safeql-recursive-type-bug/node_modules/typescript/lib/typescript.js:13387:45)
    at getTextOfNode (/home/kalu/bw/safeql-recursive-type-bug/node_modules/typescript/lib/typescript.js:13407:12)
    at declarationNameToString (/home/kalu/bw/safeql-recursive-type-bug/node_modules/typescript/lib/typescript.js:13680:62)
    at getNameOfSymbolAsWritten (/home/kalu/bw/safeql-recursive-type-bug/node_modules/typescript/lib/typescript.js:54415:18)
    at createAccessFromSymbolChain (/home/kalu/bw/safeql-recursive-type-bug/node_modules/typescript/lib/typescript.js:52297:27)
    at symbolToTypeNode (/home/kalu/bw/safeql-recursive-type-bug/node_modules/typescript/lib/typescript.js:52274:28)
    at typeToTypeNodeWorker (/home/kalu/bw/safeql-recursive-type-bug/node_modules/typescript/lib/typescript.js:50900:18)
    at typeToTypeNodeHelper (/home/kalu/bw/safeql-recursive-type-bug/node_modules/typescript/lib/typescript.js:50749:26)
    at typeReferenceToTypeNode (/home/kalu/bw/safeql-recursive-type-bug/node_modules/typescript/lib/typescript.js:51326:33)
    at typeToTypeNodeWorker (/home/kalu/bw/safeql-recursive-type-bug/node_modules/typescript/lib/typescript.js:50905:85)
```

