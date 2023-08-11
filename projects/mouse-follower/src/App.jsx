import { useEffect, useState } from "react"

const FollowMouse = () => {
  const [enabled, setEnabled] = useState(false)

  const [position, setPosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    console.log('effect ', { enabled })
    const handleMove = (event) => {
      const { clientX, clientY } = event
      setPosition({ x: clientX, y: clientY })
    }

    if (enabled)
      window.addEventListener('pointermove', handleMove)

    // This return function is called when the component is unmounted
    // or when dependencies change.
    // It's a good place to clean up event listeners
    return () => {
      console.log('Cleanup')
      window.removeEventListener('pointermove', handleMove)
    }
  }, [enabled])
  return (
    <>
      <div
        style={{
          position: 'absolute',
          backgroundColor: '#09f',
          borderRadius: '50%',
          opacity: 0.8,
          pointerEvents: 'none',
          left: -20,
          top: -20,
          width: 40,
          height: 40,
          transform: `translate(${position.x}px, ${position.y}px)`,
        }}
      />
      <button onClick={() => setEnabled(!enabled)}>
        {enabled ? 'Disable' : 'Enable'} following
      </button>
    </>
  )
}

function App() {
  const [mounted, setMounted] = useState(true)

  return (
    <main>
      {mounted && <FollowMouse />}
      <button onClick={() => setMounted(!mounted)}>
        {mounted ? 'Unmount' : 'Mount'} the mouse follower
      </button>
    </main>
  )
}

export default App
