import { useEffect, useState } from 'react'
import Landing from './components/Landing.jsx'
import Studio from './studio/Studio.jsx'

function useHashRoute() {
  const [hash, setHash] = useState(() => window.location.hash)
  useEffect(() => {
    const onChange = () => setHash(window.location.hash)
    window.addEventListener('hashchange', onChange)
    return () => window.removeEventListener('hashchange', onChange)
  }, [])
  return hash
}

export default function App() {
  const hash = useHashRoute()

  if (hash.startsWith('#/studio')) {
    const q = new URLSearchParams(hash.split('?')[1] || '')
    return (
      <Studio
        initialPrompt={q.get('prompt') || ''}
        initialMode={q.get('mode') || 'image'}
      />
    )
  }

  return <Landing />
}
