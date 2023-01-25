import * as dotenv from 'dotenv';
import { EnvValidator  } from '@/config/env';

dotenv.config();

const props = {
  httpPort: parseInt(process.env.HTTP_PORT || '3000', 10),
  limit_from_products: parseInt(process.env.LIMIT_FROM_PRODUCTS || '100', 10)
};

export const env = new EnvValidator(props);
