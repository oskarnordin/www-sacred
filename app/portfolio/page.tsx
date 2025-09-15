import Block from '@components/Block';
import Card from '@components/Card';
import Divider from '@components/Divider';

export default function PortfolioHome() {
  return (
    <div style={{ padding: '2ch' }}>
      {/* Decorative block + heading content */}
      <div style={{ display: 'flex', gap: '1ch', alignItems: 'flex-start', marginBottom: '2ch' }}>
        <Block />
        <div>
          <h1 style={{ margin: 0 }}>Ocke</h1>
          <p style={{ marginTop: '0.5ch', maxWidth: '72ch' }}>
            Welcome. This space highlights selected work, experiments, and interests.
          </p>
        </div>
      </div>
      <Divider />
      {/* Responsive card grid */}
      <div
        style={{
          display: 'grid',
          gap: '2ch',
          marginTop: '2ch',
          gridTemplateColumns: 'repeat(auto-fill, minmax(36ch, 1fr))',
        }}
      >
        <Card title="Project One">Experimental interface / UI study.</Card>
        <Card title="Project Two">Realtime dashboard exploration.</Card>
        <Card title="Project Three">Data visualization concept.</Card>
      </div>
    </div>
  );
}
