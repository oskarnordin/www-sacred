import BlockLoader from '@components/BlockLoader';

export default function Loading() {
  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        background: 'rgba(255, 255, 255, 0.8)',
        display: 'grid',
        placeItems: 'center',
        zIndex: 9999,
        color: 'lightgray',
        fontFamily:
          'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
      }}
      aria-live="polite"
      aria-busy="true"
      role="status"
    >
      <div
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '1ch',
          fontSize: '1.0rem',
          padding: '0.75rem 1rem',
          background: 'rgba(255, 255, 255, 1.0)',
          borderRadius: 6,
        }}
      >
        <BlockLoader mode={11} interval={80} aria-hidden="true" />

      </div>
    </div>
  );
}