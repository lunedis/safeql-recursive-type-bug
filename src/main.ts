import postgres from "postgres";

export const sql = postgres(
  "postgres://postgres:postgres@localhost:5432/postgres", {
    transform: postgres.camel,
  }
);

// safeql generates wrong type assertions
sql<{ id: number | null; name: string | null; bossName: string | null; }[]>`
    SELECT 
      employees.id,
      employees.name,
      bosses.name AS boss_name
    FROM employees
    LEFT OUTER JOIN employees AS bosses ON (employees.boss_id = bosses.id);`;

// safeql generates wrong type assertions
sql<{ id: number | null; name: string | null; bossName: string | null; }[]>`
    SELECT 
      e.id,
      e.name,
      bosses.name AS boss_name
    FROM employees AS e
    LEFT OUTER JOIN employees AS bosses ON (e.boss_id = bosses.id);`;
