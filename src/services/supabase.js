import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://xrhrqugwurbbrjinvysj.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhyaHJxdWd3dXJiYnJqaW52eXNqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzc1MzgwMTksImV4cCI6MjA1MzExNDAxOX0.DkWOTNWPtwuSQy5q5BZYgRhS3NYfUuxzJrE6P-AUgng";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
