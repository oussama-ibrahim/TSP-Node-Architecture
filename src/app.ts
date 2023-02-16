import "reflect-metadata";
import { server } from './infrastructure/http/server';
import Config from './config';

function start() {
  server(Config.PORT);
}
start();

process.on('uncaughtException', (error) => {
  console.log('UNHANDLED REJECTION! 💥 Shutting down...');
  console.log(error);
  process.exit(1);
});

process.on('unhandledRejection', (error, promise) => {
  console.log('Unhandled Promise Rejection', promise);
  console.log('Promise Rejection Error', error);
  process.exit(1);
});
