// lib/supabaseClient.js
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://uywhnsnhfezwwwjwemrp.supabase.co'
const supabaseServiceRoleKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV5d2huc25oZmV6d3d3andlbXJwIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcyNTk2OTQ5NCwiZXhwIjoyMDQxNTQ1NDk0fQ.H48ClNnOvLqZmDno1w-Utp14KgXdjUmSpiwN6f51bs0'

export const supabase = createClient(supabaseUrl, supabaseServiceRoleKey)
