import Block from '@components/Block';
import Card from '@components/Card';
import Divider from '@components/Divider';
import Button from '@components/Button';

export default function ProjectsPage() {
  const techGroupStyle: React.CSSProperties = {
    marginTop: '0.75ch',
    display: 'flex',
    flexWrap: 'wrap',
    gap: '4px',
  };
  
  const techstackBtn: React.CSSProperties = {
    backgroundColor: 'lightgray',
    color: '#000',
    boxSizing: 'border-box',
    height: '18px',
    minHeight: 0,
    maxHeight: '18px',
    padding: '0 6px',
    fontSize: '0.6rem',
    lineHeight: '18px',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',

    overflow: 'hidden',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
    maxWidth: '80px',
  };

  const cardStyle: React.CSSProperties = { minHeight: '200px' };

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
          gridTemplateColumns: 'repeat(auto-fit, minmax(32ch, 1fr))',
          justifyItems: 'stretch',
          marginTop: '2ch',
        }}
      >
        <div style={{ width: '100%' }}>
          <Card title="Accessibility Quiz" style={cardStyle}>
            <p>An interactive quiz application designed to educate users about web accessibility best practices. It includes multiple-choice questions and provides feedback on answers.</p>
            
            {/* Tech stack */}
            <div style={techGroupStyle} role="group" aria-label="Tech stack">
              <Button style={techstackBtn}>HTML</Button>
              <Button style={techstackBtn}>CSS</Button>
              <Button style={techstackBtn}>JavaScript</Button>
              <Button style={techstackBtn}>WAI-ARIA</Button>
            </div>

            <div style={{ marginTop: '1ch', display: 'flex', gap: '1ch' }}>
              <Button href="https://example.com/interface-lab" target="_blank" rel="noopener noreferrer">Live</Button>
              <Button href="https://github.com/youruser/interface-lab" target="_blank" rel="noopener noreferrer">GitHub</Button>
            </div>
          </Card>
        </div>

        <div style={{ width: '100%' }}>
          <Card title="Weather App" style={cardStyle}>
            <p>A weather app that provides real-time weather information and forecasts for any location. It uses an API to fetch weather data and displays it in a user-friendly interface.</p>

            {/* Tech stack */}
            <div style={techGroupStyle} role="group" aria-label="Tech stack">
              <Button type="button" style={techstackBtn}>React</Button>
              <Button type="button" style={techstackBtn}>TypeScript</Button>
              <Button type="button" style={techstackBtn}>API</Button>
              <Button type="button" style={techstackBtn}>Fetch</Button>
            </div>

            <div style={{ marginTop: '1ch', display: 'flex', gap: '1ch' }}>
              <Button href="https://example.com/realtime-dash" target="_blank" rel="noopener noreferrer">Live</Button>
              <Button href="https://github.com/youruser/realtime-dash" target="_blank" rel="noopener noreferrer">GitHub</Button>
            </div>
          </Card>
        </div>

        {/* Added projects */}
        <div style={{ width: '100%' }}>
          <Card title="Win 98 Style To-Do App" style={cardStyle}>
            <p>A to-do app with a touch of retro. It mimics the look and feel of Windows 98, allowing users to manage their tasks in a nostalgic interface.</p>

            {/* Tech stack */}
            <div style={techGroupStyle} role="group" aria-label="Tech stack">
              <Button type="button" style={techstackBtn}>React</Button>
              <Button type="button" style={techstackBtn}>CSS</Button>
              <Button type="button" style={techstackBtn}>LocalStorage</Button>
            </div>

            <div style={{ marginTop: '1ch', display: 'flex', gap: '1ch' }}>
              <Button href="https://example.com/win98-todo" target="_blank" rel="noopener noreferrer">Live</Button>
              <Button href="https://github.com/youruser/win98-todo" target="_blank" rel="noopener noreferrer">GitHub</Button>
            </div>
          </Card>
        </div>

        <div style={{ width: '100%' }}>
          <Card title="Recipe Library" style={cardStyle}>
            <p>A library of recipes with filters for dietary restrictions, time to cook and random recipe. It allows users to easily find and save their favorite recipes.</p>

            {/* Tech stack */}
            <div style={techGroupStyle} role="group" aria-label="Tech stack">
              <Button type="button" style={techstackBtn}>React</Button>
              <Button type="button" style={techstackBtn}>TypeScript</Button>
              <Button type="button" style={techstackBtn}>Filters</Button>
              <Button type="button" style={techstackBtn}>API</Button>
            </div>

            <div style={{ marginTop: '1ch', display: 'flex', gap: '1ch' }}>
              <Button href="https://example.com/recipe-library" target="_blank" rel="noopener noreferrer">Live</Button>
              <Button href="https://github.com/youruser/recipe-library" target="_blank" rel="noopener noreferrer">GitHub</Button>
            </div>
          </Card>
        </div>

        <div style={{ width: '100%' }}>
          <Card title="Happy Thoughts" style={cardStyle}>
            <p>A simple app where users can share their happy thoughts and like others. It uses a backend API to store and retrieve messages.</p>

            {/* Tech stack */}
            <div style={techGroupStyle} role="group" aria-label="Tech stack">
              <Button type="button" style={techstackBtn}>React</Button>
              <Button type="button" style={techstackBtn}>Node</Button>
              <Button type="button" style={techstackBtn}>Express</Button>
              <Button type="button" style={techstackBtn}>MongoDB</Button>
            </div>

            <div style={{ marginTop: '1ch', display: 'flex', gap: '1ch' }}>
              <Button href="https://example.com/happy-thoughts" target="_blank" rel="noopener noreferrer">Live</Button>
              <Button href="https://github.com/youruser/happy-thoughts" target="_blank" rel="noopener noreferrer">GitHub</Button>
            </div>
          </Card>
        </div>

        <div style={{ width: '100%' }}>
          <Card title="Subscription App" style={cardStyle}>
            <p>A simple app where users can subscribe to their favorite content creators and receive updates. It uses a backend API to manage subscriptions and notifications.</p>

            {/* Tech stack */}
            <div style={techGroupStyle} role="group" aria-label="Tech stack">
              <Button type="button" style={techstackBtn}>React</Button>
              <Button type="button" style={techstackBtn}>Node</Button>
              <Button type="button" style={techstackBtn}>Express</Button>
              <Button type="button" style={techstackBtn}>MongoDB</Button>
            </div>

            <div style={{ marginTop: '1ch', display: 'flex', gap: '1ch' }}>
              <Button href="https://example.com/subscriBee" target="_blank" rel="noopener noreferrer">Live</Button>
              <Button href="https://github.com/youruser/subscriBee" target="_blank" rel="noopener noreferrer">GitHub</Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
