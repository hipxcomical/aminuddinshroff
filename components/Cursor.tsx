import React, { useState, useEffect, useRef } from 'react';

const Cursor: React.FC = () => {
    const [position, setPosition] = useState({ x: -100, y: -100 });
    const [ringPosition, setRingPosition] = useState({ x: -100, y: -100 });
    const [isPointer, setIsPointer] = useState(false);
    const [visible, setVisible] = useState(false);
    
    const rafId = useRef<number | null>(null);
    const latestPosition = useRef(position);

    // Update the ref to the latest position on each render
    useEffect(() => {
        latestPosition.current = position;
    }, [position]);

    // Setup event listeners and animation loop
    useEffect(() => {
        const onMouseMove = (e: MouseEvent) => {
            setPosition({ x: e.clientX, y: e.clientY });

            const target = e.target as HTMLElement;
            // A more robust check for interactive elements
            const isInteractive = target && (
                target.closest('a') ||
                target.closest('button') ||
                target.closest('[role="button"]') ||
                target.closest('input') ||
                target.closest('select') ||
                target.closest('textarea') ||
                window.getComputedStyle(target).getPropertyValue('cursor') === 'pointer'
            );
            setIsPointer(!!isInteractive);
        };
        
        const onMouseEnter = () => setVisible(true);
        const onMouseLeave = () => setVisible(false);

        document.addEventListener("mousemove", onMouseMove);
        document.documentElement.addEventListener("mouseenter", onMouseEnter);
        document.documentElement.addEventListener("mouseleave", onMouseLeave);

        const followMouse = () => {
            setRingPosition(prev => {
                // Lerp (linear interpolation) for a smooth follow effect
                const newX = prev.x + (latestPosition.current.x - prev.x) * 0.2;
                const newY = prev.y + (latestPosition.current.y - prev.y) * 0.2;
                return { x: newX, y: newY };
            });
            rafId.current = requestAnimationFrame(followMouse);
        };
        
        rafId.current = requestAnimationFrame(followMouse);

        return () => {
            document.removeEventListener("mousemove", onMouseMove);
            document.documentElement.removeEventListener("mouseenter", onMouseEnter);
            document.documentElement.removeEventListener("mouseleave", onMouseLeave);
            if (rafId.current) {
                cancelAnimationFrame(rafId.current);
            }
        };
    }, []); // Run only once

    const ringSize = isPointer ? 40 : 24;
    const dotSize = isPointer ? 0 : 8;

    const ringStyle: React.CSSProperties = {
        position: 'fixed',
        top: `${ringPosition.y}px`,
        left: `${ringPosition.x}px`,
        width: `${ringSize}px`,
        height: `${ringSize}px`,
        border: `2px solid #FF6A13`,
        backgroundColor: isPointer ? 'rgba(255, 106, 19, 0.2)' : 'transparent',
        borderRadius: '50%',
        pointerEvents: 'none',
        transform: 'translate(-50%, -50%)',
        transition: 'width 0.3s ease, height 0.3s ease, background-color 0.3s ease',
        zIndex: 9999,
        opacity: visible ? 1 : 0,
    };

    const dotStyle: React.CSSProperties = {
        position: 'fixed',
        top: `${position.y}px`,
        left: `${position.x}px`,
        width: `${dotSize}px`,
        height: `${dotSize}px`,
        backgroundColor: '#FF6A13',
        borderRadius: '50%',
        pointerEvents: 'none',
        transform: 'translate(-50%, -50%)',
        transition: 'width 0.3s ease, height 0.3s ease',
        zIndex: 9999,
        opacity: visible ? 1 : 0,
    };


    return (
        <>
            <div style={ringStyle} />
            <div style={dotStyle} />
        </>
    );
};

export default Cursor;
