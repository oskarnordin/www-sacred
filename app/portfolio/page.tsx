import Divider from '@components/Divider';
import Card from '@components/Card';
import ListItem from '@components/ListItem';

const cardStyle: React.CSSProperties = { width: '100%' };

export default function PortfolioHome() {
  return (
    <div style={{ padding: '2ch' }}>
      <div>
        <div>
          <h1 style={{ margin: 0 }}>Hello World</h1>
          <p style={{ marginTop: '0.5ch', maxWidth: '72ch' }}>
            Welcome. This space highlights selected work, experiments, and interests.
          </p>
        </div>
      </div>
      <Divider />
      <div
        style={{
          display: 'grid',
          gap: '2ch',
          gridTemplateColumns: 'repeat(auto-fill,minmax(32ch,1fr))',
          marginTop: '2ch',
        }}
      >
        <Card title="Things I'm proud of">
          <ListItem>Finishing my <a href="https://www.technigo.io">Technigo.io</a> education and becoming a developer.</ListItem>
          <ListItem>Going to European Dodgeball Championship 2025 in Limerick, Ireland and competing with the best.</ListItem>
          <ListItem>Being a good listener to my friends.</ListItem>
          <ListItem>Going outside my comfort zone regularly.</ListItem>
        </Card>
                  <Card title="Things I believe">
          <ListItem>Accessibility is a fundamental right.</ListItem>
          <ListItem>Design should be inclusive and user-centered.</ListItem>
          <ListItem>Continuous learning is essential in tech.</ListItem>
        </Card>
      </div>
    </div>
  );
}