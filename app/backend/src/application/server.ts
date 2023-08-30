import { App } from './app';

const DEFAULT_PORT = 3001;
const port = process.env.APP_PORT ? parseInt(process.env.APP_PORT, 10) : DEFAULT_PORT;

const app = new App();

(async () => {
  try {
    await app.start(port);
    console.log(`Running server on port: ${port}`);
  } catch (error) {
    console.log('Connection with database generated an error:\r\n');
    console.error(error);
    console.log('\r\nServer initialization cancelled');
    process.exit(0);
  }
})();
