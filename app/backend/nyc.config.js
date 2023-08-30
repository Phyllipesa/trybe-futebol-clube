module.exports = {
  all: true,
  extends: "@istanbuljs/nyc-config-typescript",
  exclude: [
    'src/tests',
    'src/infra/database/config',
    'src/infra/database/migrations',
    'src/infra/database/seeders',
    'src/infra/database/models'
  ],
  include: ['src/**/*.ts']
};
