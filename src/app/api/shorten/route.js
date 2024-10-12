import { NextResponse } from 'next/server'
import { supabase } from '@/app/lib/supabaseClient'
import crypto from 'crypto'

export async function POST(req) {
  const { url, customDomain } = await req.json()
  
  // Generate a short code
  const shortCode = crypto.randomBytes(4).toString('hex')

  // Insert into Supabase
  const { data, error } = await supabase
    .from('links')
    .insert({ original_url: url, short_code: shortCode, custom_domain: customDomain })
    .select()

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }

  return NextResponse.json({ shortCode, customDomain })
}