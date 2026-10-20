
const { randomUUID } = require('crypto');
 
// Generated once on startup and kept in memory
const randomString = randomUUID();
 
const INTERVAL_MS = 5000;
 
const printLine = () => {
  console.log(`${new Date().toISOString()}: ${randomString}`);
};
 
printLine();
const timer = setInterval(printLine, INTERVAL_MS);
 
// Exit cleanly on Ctrl+C or container stop
const shutdown = () => {
  clearInterval(timer);
  process.exit(0);
};
process.on('SIGINT', shutdown);
process.on('SIGTERM', shutdown);