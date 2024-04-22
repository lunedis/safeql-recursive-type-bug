# ts-safeql recursive outer join bug

Reproduction repo for https://github.com/ts-safeql/safeql/issues/204

## How to reproduce

1) Start database:
```
docker compose up -d
```

2) "Fix" the problem by using `sql<{ id: number; name: string | null; bossName: string; }[]>` in `main.ts`.

3) Run ESLINT

```
npx eslint .
```

4) See wrong output: 

```
  10:5  error  Query has incorrect type annotation.
        Expected: { id: number; name: string | null; bossName: string }[]
          Actual: { id: number | null; name: string | null; bossName: string | null }[]  @ts-safeql/check-sql
```

5) run `--fix`

6) ts-safeql generates wrong types


