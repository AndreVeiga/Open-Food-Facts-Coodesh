import * as dotenv from 'dotenv';
import { EnvValidator  } from '@/config/env';

dotenv.config();

const props = {
  httpPort: parseInt(process.env.HTTP_PORT || '3000', 10),
  limit_from_products: parseInt(process.env.LIMIT_FROM_PRODUCTS || '100', 10),
  db_port: parseInt(process.env.DB_PORT || '0', 10),
  db_host: process.env.DB_HOST,
  db_user: process.env.DB_USER,
  db_password: process.env.DB_PASSWORD,

  amqp_host: process.env.AMPQ_HOST,
  amqp_user: process.env.AMPQ_USER,
  amqp_password: process.env.AMPQ_PASSWORD,
  amqp_port: parseInt(process.env.AMQP_PORT || '0', 10), 
  amqp_v_host:process.env.AMQP_V_HOST
};

export const env = new EnvValidator(props);
