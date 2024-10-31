import { sql } from '@/db';
 
export const dynamic = 'force-dynamic';
 
export async function GET() {
  await sql.query(`INSERT INTO users (name) VALUES ('John Doe');`);
  return Response.json({ success: true });
}