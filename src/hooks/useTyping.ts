import { useEffect, useState } from 'react'

enum TypePhase {
  Typing,
  Pausing,
  Deleting,
}

const getRandomTypingInterval = () => Math.floor(Math.random() * (150 - 80 + 1)) + 80;

const useTyping = ( superpowers: string[] ) => {
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [phase, setPhase] = useState(TypePhase.Typing)
  const [typed, setTyped] = useState('')

  useEffect(() => {
    switch (phase) {
      case TypePhase.Typing: {
        const nextTyped = superpowers[selectedIndex].slice(
          0,
          typed.length + 1
        )

        if (nextTyped === typed) {
          setPhase(TypePhase.Pausing)
          return
        }

        const timeout = setTimeout(() => {
          setTyped(nextTyped)
        }, getRandomTypingInterval())

        return () => clearTimeout(timeout)
      }
      case TypePhase.Deleting: {
        if (!typed) {
          const timeout = setTimeout(() => {
            const nextIndex = selectedIndex + 1
            setSelectedIndex(superpowers[nextIndex] ? nextIndex : 0)
            setPhase(TypePhase.Typing)
          }, 500)
          return () => clearTimeout(timeout)
        }

        const nextRemaining = superpowers[selectedIndex].slice(
          0,
          typed.length - 1
        )

        const timeout = setTimeout(() => {
          setTyped(nextRemaining)
        }, 50)

        return () => clearTimeout(timeout)
      }
      case TypePhase.Pausing:
      default:
        const timeout = setTimeout(() => {
          setPhase(TypePhase.Deleting)
        }, 2000)

        return () => clearTimeout(timeout)
    }
  }, [superpowers, typed, selectedIndex, phase])

  return typed
}

export default useTyping