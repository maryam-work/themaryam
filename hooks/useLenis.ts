import { useEffect, useRef } from 'react';
import Lenis from 'lenis';

export const useLenis = () => {
    const lenisRef = useRef<Lenis | null>(null);

    useEffect(() => {
        // Initialize Lenis with optimized settings for both mobile and desktop
        const lenis = new Lenis({
            duration: 1.2,              // Smooth scroll duration
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Expo easing
            orientation: 'vertical',    // Vertical scrolling
            gestureOrientation: 'vertical',
            smoothWheel: true,          // Smooth mouse wheel
            wheelMultiplier: 1,         // Wheel scroll speed
            touchMultiplier: 2,         // Touch scroll speed (for mobile)
            infinite: false,            // No infinite scrolling
            autoResize: true,           // Auto resize on window resize
        });

        lenisRef.current = lenis;

        // Animation frame loop for Lenis
        function raf(time: number) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        // Cleanup on unmount
        return () => {
            lenis.destroy();
            lenisRef.current = null;
        };
    }, []);

    return lenisRef;
};

// CSS styles to add to your app
export const lenisStyles = `
html.lenis, html.lenis body {
    height: auto;
}

.lenis.lenis-smooth {
    scroll-behavior: auto !important;
}

.lenis.lenis-smooth [data-lenis-prevent] {
    overscroll-behavior: contain;
}

.lenis.lenis-stopped {
    overflow: hidden;
}

.lenis.lenis-scrolling iframe {
    pointer-events: none;
}
`;
