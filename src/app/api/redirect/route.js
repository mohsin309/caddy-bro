import { NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'

export async function GET(req) {
  const { searchParams } = new URL(req.url)
  const code = searchParams.get('code')
  const domain = req.headers.get('host')

  const { data, error } = await supabase
    .from('links')
    .select('original_url')
    .eq('short_code', code)
    .eq('custom_domain', domain)
    .single()

  if (error || !data) {
    return NextResponse.redirect('/')
  }

  return NextResponse.redirect(data.original_url)
}