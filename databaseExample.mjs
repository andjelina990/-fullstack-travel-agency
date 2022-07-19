import postgres from 'postgres';
import { config } from 'dotenv-safe';

config();
const sql = postgres();
