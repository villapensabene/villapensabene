"use client"

import { useEffect, useState } from "react"
import Image from "next/image"

export default function SplashScreen() {
    const [isVisible, setIsVisible] = useState(true)
    const [shouldRender, setShouldRender] = useState(true)

    useEffect(() => {
        // Show splash for at least 1.5 seconds, then fade out
        const timer = setTimeout(() => {
            setIsVisible(false)
        }, 1500)

        // Remove from DOM after fade out animation (500ms)
        const removeTimer = setTimeout(() => {
            setShouldRender(false)
        }, 2000)

        return () => {
            clearTimeout(timer)
            clearTimeout(removeTimer)
        }
    }, [])

    if (!shouldRender) return null

    return (
        <div
            className={`fixed inset-0 z-[9999] flex items-center justify-center bg-white transition-opacity duration-500 ease-in-out ${isVisible ? "opacity-100" : "opacity-0"
                }`}
        >
            <div className="relative w-64 h-64 animate-pulse">
                <Image
                    src="/logo.png"
                    alt="Villa Pensabene Logo"
                    fill
                    className="object-contain"
                    priority
                />
            </div>
        </div>
    )
}
