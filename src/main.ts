import postgres from "postgres";

export const sql = postgres(
  "postgres://postgres:postgres@localhost:5432/postgres", {
    transform: postgres.camel,
  }
);

interface Text {
  type: 'entry';
  name: string;
}

interface Group {
  type: 'group';
  entries: Entry[];
}

type Entry = Text | Group;

sql<{ id: number; value: Entry[] }[]>`
    SELECT 
      id, COALESCE(value, '[]'::jsonb) AS value
    FROM test;`;
