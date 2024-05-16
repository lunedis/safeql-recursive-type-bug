module.exports = {
  env: {
    node: true,
  },
  extends: ["eslint:recommended"],
  overrides: [
    {
      files: ["*.ts", "*.tsx"],
      parser: "@typescript-eslint/parser",
      parserOptions: {
        project: "./tsconfig.json",
      },
      plugins: ["@ts-safeql/eslint-plugin"],
      rules: {
        "@ts-safeql/check-sql": [
          "error",
          {
            connections: {
              // The URL of the database:
              databaseUrl:
                "postgres://postgres:postgres@localhost:5432/postgres",
              targets: [
                {
                  // Check all of the queries that are used with the `sql` tag:
                  tag: "sql",
                  // Postgres.js type should be an array, so we add an extra "[]" after the generated type:
                  transform: "{type}[]",
                },
              ],
              overrides: {
                columns: {
                  'test.value': 'Entries',
                },
              },
            },
          },
        ],
      },
    },
  ],
};
