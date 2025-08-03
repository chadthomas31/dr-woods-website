"use client"

import { useEffect } from 'react'

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-gray-100 p-4">
      <h1 className="text-4xl font-bold mb-4">Something went wrong</h1>
      <p className="mb-6">An unexpected error occurred. Please try again.</p>
      <button
        onClick={() => reset()}
        className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-md"
      >
        Try again
      </button>
    </div>
  )
}
