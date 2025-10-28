'use client'
import useInclement from '@/lib/stores/useCounterStore';
import Link from 'next/link';


export default function Counter() {
  const { count, increment, decrement, reset } = useInclement()
  return (
    <div className="p-4 border rounded-md">
        <h2>Counter 1</h2>
      <Link href="/about">Next</Link>
      <div className="flex items-center gap-4">
        <button onClick={() => decrement()} className="px-3 py-1 rounded">Aroni</button>
        <div className="text-lg">{count}</div>
        <button onClick={() => increment()} className="px-3 py-1 rounded">Takbir</button>
        <button onClick={() => reset()} className="px-3 py-1 rounded">Reset</button>
      </div>
    </div>
  )
}
