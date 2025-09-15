import Block from '@components/Block';
import Card from '@components/Card';
import Divider from '@components/Divider';

export default function ProjectsPage() {
  return (
    <div style={{ padding: '2ch' }}>
      <Block>
        <h1>Projects</h1>
        <p>Selected work and experiments.</p>
      </Block>
      <Divider />
      <div style={{ display: 'grid', gap: '2ch', gridTemplateColumns: 'repeat(auto-fill,minmax(32ch,1fr))', marginTop: '2ch' }}>
        <Card title="Interface Lab">Collection of UI explorations.</Card>
        <Card title="Realtime Dash">Metrics & live data streams.</Card>
        <Card title="Viz Engine">Custom data visualization toolkit.</Card>
      </div>
    </div>
  );
}
