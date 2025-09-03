'use client';

export function FloatingElements() {
  const elements = [
    { size: 'w-4 h-4', position: 'top-20 left-1/4', delay: '0s', color: 'bg-accent' },
    { size: 'w-6 h-6', position: 'top-40 right-1/3', delay: '2s', color: 'bg-primary' },
    { size: 'w-3 h-3', position: 'top-60 left-3/4', delay: '4s', color: 'bg-accent' },
    { size: 'w-5 h-5', position: 'bottom-40 left-1/5', delay: '1s', color: 'bg-primary' },
    { size: 'w-4 h-4', position: 'bottom-60 right-1/4', delay: '3s', color: 'bg-accent' },
  ];

  return (
    <>
      {elements.map((element, index) => (
        <div
          key={index}
          className={`floating-element ${element.size} ${element.position} ${element.color}`}
          style={{ animationDelay: element.delay }}
        />
      ))}
    </>
  );
}
