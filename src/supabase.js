import { createClient } from '@supabase/supabase-js';

// Replace these with your actual Supabase URL and anon key
const supabaseUrl = 'https://nbqizueuqzgagdxhywpw.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5icWl6dWV1cXpnYWdkeGh5d3B3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzI1NTEzMzcsImV4cCI6MjA4ODEyNzMzN30.UpK7XkGLNgFAXd0hQeALwe44SyJ3p354-EdVWV0klzw';

export const supabase = createClient(supabaseUrl, supabaseKey);
