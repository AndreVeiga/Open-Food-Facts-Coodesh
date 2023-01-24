import * as dotenv from 'dotenv';
import { EnvValidator  } from '@/config/env';

dotenv.config();

const props = {
  httpPort: parseInt(process.env.HTTP_PORT || '3000', 10)
};

export const env = new EnvValidator(props);
