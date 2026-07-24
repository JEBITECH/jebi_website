'use client'

import { useEffect, useState } from 'react'

// VRMA 26 Nashville — October 4, 2026
const EVENT_DATE = new Date('2026-10-04T09:00:00-05:00').getTime()

function getTimeLeft() {
  const now = Date.now()
  const diff = Math.max(0, EVENT_DATE - now)

  const days = Math.floor(diff / (1000 * 60 * 60 * 24))
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))
  const seconds = Math.floor((diff % (1000 * 60)) / 1000)

  return { days, hours, minutes, seconds }
}

export default function VRMACountdown() {
  const [time, setTime] = useState<{ days: number; hours: number; minutes: number; seconds: number } | null>(null)

  useEffect(() => {
    setTime(getTimeLeft())
    const interval = setInterval(() => setTime(getTimeLeft()), 1000)
    return () => clearInterval(interval)
  }, [])

  const units = [
    { value: time?.days ?? 0, label: 'Days' },
    { value: time?.hours ?? 0, label: 'Hours' },
    { value: time?.minutes ?? 0, label: 'Min' },
    { value: time?.seconds ?? 0, label: 'Sec' },
  ]

  return (
    <div className="flex items-center gap-2 sm:gap-3">
      {units.map((u, i) => (
        <div key={u.label} className="flex items-center gap-2 sm:gap-3">
          <div className="flex flex-col items-center">
            <div className="bg-white/10 border border-white/15 rounded-xl px-3 sm:px-4 py-2 min-w-[52px] sm:min-w-[60px] text-center">
              <span className="text-lg sm:text-xl font-bold text-white tabular-nums">
                {time ? String(u.value).padStart(2, '0') : '--'}
              </span>
            </div>
            <span className="text-[10px] text-white/50 uppercase tracking-wider font-semibold mt-1">{u.label}</span>
          </div>
          {i < units.length - 1 && <span className="text-white/20 text-lg font-light">:</span>}
        </div>
      ))}
    </div>
  )
}
