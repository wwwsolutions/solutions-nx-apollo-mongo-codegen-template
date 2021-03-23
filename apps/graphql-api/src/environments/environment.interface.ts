export interface Environment {
  production: boolean;
  apollo: {
    introspection: boolean;
    playground: boolean;
  };
  port: number | string;
}
