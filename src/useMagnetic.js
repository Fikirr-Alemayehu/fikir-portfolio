import { useState, useRef, useEffect } from 'react';

export function useMagnetic() {
  const ref = useRef(null);
  const [transform, setTransform] = useState('');

  useEffect(() => {
    if (!ref.current) return;

    const element = ref.current;

    const handleMouseMove = (e) => {
      const rect = element.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;

      setTransform(`translate(${x * 0.3}px, ${y * 0.3}px)`);
    };

    const handleMouseLeave = () => {
      setTransform('translate(0, 0)');
    };

    element.addEventListener('mousemove', handleMouseMove);
    element.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      element.removeEventListener('mousemove', handleMouseMove);
      element.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return { ref, style: { transform } };
}
