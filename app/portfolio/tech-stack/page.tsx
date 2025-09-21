import Card from '@components/Card';
import Divider from '@components/Divider';
import ListItem from '@components/ListItem';

export default function TechStackPage() {
  return (
    <div style={{ padding: '2ch' }}>
      <div>
        <div>
          <h1 style={{ margin: 0 }}>Tech Stack</h1>
          <p style={{ marginTop: '0.5ch', maxWidth: '72ch' }}>
            The tools and technologies I use most often.
          </p>
        </div>
      </div>
      <Divider />
      <div
        style={{
          width: '100%',
          gap: '2ch',
          marginTop: '2ch',
          gridTemplateColumns: 'repeat(auto-fill, minmax(36ch, 1fr))',
        }}
      >

        <Card title="My Tech Stack">
          <div
            style={{
              display: 'flex',
              width: '100%',
              gap: '2ch',
              flexWrap: 'wrap', 
              justifyContent: 'center',
            }}
          >
            <Card title="Front End" style={{ flex: '1 1 36ch', maxWidth: '30ch' }}>
              <ListItem>JavaScript (ES6+)</ListItem>
              <ListItem>React</ListItem>
              <ListItem>TypeScript</ListItem>
              <ListItem>Node.js</ListItem>
              <ListItem>CSS3 & HTML5</ListItem>
            </Card>
            <Card title="Back End" style={{ flex: '1 1 36ch', maxWidth: '30ch' }}>
              <ListItem>Git</ListItem>
              <ListItem>Docker</ListItem>
              <ListItem>AWS</ListItem>
              <ListItem>Figma</ListItem>
              <ListItem>Postman</ListItem>
            </Card>
          </div>
        </Card>
      </div>
    </div>
  );
}
