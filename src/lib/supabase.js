import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://kakwiqtnpudmztfybpav.supabase.co/rest/v1/'
const supabaseAnonKey = 'sb_publishable_RwYNY5aOh4nJdpYXFVoA6A_xGXLFtPY'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)