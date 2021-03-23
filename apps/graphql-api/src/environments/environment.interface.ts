export interface Environment {
  production: boolean;
  apollo: {
    introspection: boolean;
    playground: boolean;
  };
  mongoDb: {
    databaseName: string;
    url: string;
  };
  port: number | string;
}
