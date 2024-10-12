'use client'

import { useState, useEffect } from 'react'
import { supabase } from '@/app/lib/supabaseClient'

export default function LinkList() {
  const [links, setLinks] = useState([])

  useEffect(() => {
    fetchLinks()
  }, [])

  async function fetchLinks() {
    const { data, error } = await supabase
      .from('links')
      .select('*')
      .order('created_at', { ascending: false })
    
    if (error) console.error('Error fetching links:', error)
    else setLinks(data)
  }

  return (
    <div>
      <h2 className="text-2xl font-bold mb-2">Recent Links</h2>
      <ul>
        {links.map((link) => (
          <li key={link.id} className="mb-2">
            <a href={`https://${link.custom_domain}/${link.short_code}`} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
              {link.custom_domain}/{link.short_code}
            </a>
            <span className="ml-2 text-gray-500">{link.original_url}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}