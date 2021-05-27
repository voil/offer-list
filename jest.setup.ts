import "@testing-library/jest-dom/extend-expect";
import next from 'next';
import dotenv from 'dotenv';

next({ dev: true });
dotenv.config({ path: '.env' });