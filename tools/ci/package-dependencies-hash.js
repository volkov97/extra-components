const crypto = require('crypto');
const { dependencies } = require('../../package-lock.json');

const { log } = console;

const dependenciesSha1 = crypto
  .createHash('sha1')
  .update(JSON.stringify({ dependencies }))
  .digest('hex');

log(dependenciesSha1);
