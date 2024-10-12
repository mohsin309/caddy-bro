import { NextResponse } from 'next/server'
import { supabase } from '@/app/lib/supabaseClient'

export async function GET(req) {
  const { searchParams } = new URL(req.url)
  const code = searchParams.get('code')
  const domain = req.headers.get('host')

  // Remove '.sht.mohsindev.com' from the domain if present
  const customDomain = domain.endsWith('.sht.mohsindev.com')
    ? domain.slice(0, -'.sht.mohsindev.com'.length)
    : domain

  const { data, error } = await supabase
    .from('links')
    .select('original_url')
    .eq('short_code', code)
    .eq('custom_domain', customDomain)
    .single()

  if (error || !data) {
    return NextResponse.redirect('https://sht.mohsindev.com')
  }

  return NextResponse.redirect(data.original_url)
}