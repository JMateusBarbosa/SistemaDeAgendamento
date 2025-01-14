import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://mzixdrjtjkuedbjlciqj.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im16aXhkcmp0amt1ZWRiamxjaXFqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzY4MDEyMzMsImV4cCI6MjA1MjM3NzIzM30.r8OFIss9BKbsfeTE49-RiZPnisQ36i2aGJHZsln4GrQ";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);