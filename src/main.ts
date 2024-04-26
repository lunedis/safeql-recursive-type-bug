import postgres from "postgres";

export const sql = postgres(
  "postgres://postgres:postgres@localhost:5432/postgres", {
    transform: postgres.camel,
  }
);

// safeql generates wrong type assertions
sql<{ id: string; name: string; bossName: string }[]>`
    SELECT 
      employees.id,
      employees.name,
      bosses.name AS boss_name
    FROM employees
    LEFT JOIN employees AS bosses ON (employees.boss_id = bosses.id);`;

// safeql generates wrong type assertions
sql<{ id: string; name: string; bossName: string }[]>`
    SELECT 
      e.id,
      e.name,
      bosses.name AS boss_name
    FROM employees AS e
    LEFT JOIN employees AS bosses ON (e.boss_id = bosses.id);`;
