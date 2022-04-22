const { getJestProjects } = require('@nrwl/jest');

module.exports = {
  projects: [
    ...getJestProjects(),
    '<rootDir>/apps/server',
    '<rootDir>/apps/server',
    '<rootDir>/libs/server/graphql-api',
    '<rootDir>/libs/server/environments',
    '<rootDir>/libs/server/providers',
  ],
};
