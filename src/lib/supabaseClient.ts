
import { createClient } from '@supabase/supabase-js';

// Use the provided Supabase credentials
const supabaseUrl = 'https://ellukppgdggivtxkxoij.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVsbHVrcHBnZGdnaXZ0eGt4b2lqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQyNzk3NTQsImV4cCI6MjA1OTg1NTc1NH0.euYe5i88z68RV_4Yg2uknYSq7IT4_gGoONEHI816ggI';

export const supabase = createClient(supabaseUrl, supabaseKey);
