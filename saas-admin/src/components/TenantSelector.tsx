import { useState, useEffect } from 'react'
import { setTenant, httpClient } from '../data/httpClient'

interface Site { id: string; name: string }

export default function TenantSelector() {
    const [sites, setSites] = useState<Site[]>([])
    const [current, setCurrent] = useState<string | null>(null)

    useEffect(() => {
        // fetch sites for selection
        httpClient.get('/sites').then(res => setSites(res.data?.items ?? res.data)).catch(() => {})
    }, [])

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const siteId = e.target.value || null
        setCurrent(siteId)
        setTenant(siteId)
    }

    return (
        <select value={current ?? ''} onChange={handleChange}>
            <option value="">Select Site</option>
            {sites.map(s => (
                <option key={s.id} value={s.id}>{s.name}</option>
            ))}
        </select>
    )
}
