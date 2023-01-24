import { ValidationError } from 'class-validator';

import { env } from '@/config/env'
import { Application } from '@/app';

const application = new Application();

setImmediate(async () => {
  try {
    await application.start();
    console.log(`Server running in port ${env.httpPort}`)
  } catch (err) {
    if (err.length && err[0] instanceof ValidationError) {
      application.throwEnvValidatorErrors(err);
    }
    throw err;
  }
});