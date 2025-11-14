import React, { useState, useEffect, useRef } from 'react';

const Cursor: React.FC = () => {
    const [position, setPosition] = useState({ x: -100, y: -100 });
    const [ringPosition, setRingPosition] = useState({ x: -100, y: -100 });
    const [isPointer, setIsPointer] = useState(false);
    const [visible, setVisible] = useState(false);
    
    const rafId = useRef<number | null>(null);

    useEffect(() => {
        const onMouseMove = (e: MouseEvent) => {
            if (!visible) setVisible(true);
            setPosition({ x: e.clientX, y: e.clientY });
        };

        const onMouseOver = (e: MouseEvent) => {
             const target = e.target as HTMLElement;
             if (target instanceof HTMLAnchorElement || 
                 target instanceof HTMLButtonElement ||
                 target.closest('a') ||
                 target.closest('button') ||
                 window.getComputedStyle(target).getPropertyValue('cursor') === 'pointer'
                ) {
                setIsPointer(true);
            }
        };
        
        const onMouseOut = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            if (target instanceof HTMLAnchorElement || 
                target instanceof HTMLButtonElement ||
                target.closest('a') ||
                target.closest('button') ||
                window.getComputedStyle(target).getPropertyValue('cursor') === 'pointer'
               ) {
               setIsPointer(false);
           }
        };

        document.addEventListener("mousemove", onMouseMove);
        document.body.addEventListener("mouseover", onMouseOver);
        document.body.addEventListener("mouseout", onMouseOut);

        const followMouse = () => {
            setRingPosition(prev => ({
                x: prev.x + (position.x - prev.x) * 0.2,
                y: prev.y + (position.y - prev.y) * 0.2
            }));
            rafId.current = requestAnimationFrame(followMouse);
        };
        
        rafId.current = requestAnimationFrame(followMouse);

        return () => {
            document.removeEventListener("mousemove", onMouseMove);
            document.body.removeEventListener("mouseover", onMouseOver);
            document.body.removeEventListener("mouseout", onMouseOut);
            if (rafId.current) {
                cancelAnimationFrame(rafId.current);
            }
        };
    }, [position, visible]);

    const ringSize = isPointer ? 32 : 24;

    const ringStyle: React.CSSProperties = {
        position: 'fixed',
        top: `${ringPosition.y}px`,
        left: `${ringPosition.x}px`,
        width: `${ringSize}px`,
        height: `${ringSize}px`,
        border: `2px solid #FF6A13`,
        borderRadius: '50%',
        pointerEvents: 'none',
        transform: 'translate(-50%, -50%)',
        transition: 'width 0.2s ease-in-out, height 0.2s ease-in-out',
        zIndex: 9999,
        opacity: visible ? 1 : 0,
    };

    const dotStyle: React.CSSProperties = {
        position: 'fixed',
        top: `${position.y}px`,
        left: `${position.x}px`,
        width: '8px',
        height: '8px',
        backgroundColor: '#FF6A13',
        borderRadius: '50%',
        pointerEvents: 'none',
        transform: 'translate(-50%, -50%)',
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