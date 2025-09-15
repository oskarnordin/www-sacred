import Block from '@components/Block';
import Divider from '@components/Divider';

export default function AboutPage() {
  return (
    <div style={{ padding: '2ch' }}>
      <Block>
        <h1>About</h1>
        <p>Short bio, values, and approach to creative development.</p>
      </Block>
      <Divider />
      <p>
        I focus on building thoughtful, fast interfaces with a bias toward clarity and minimalism. Passionate about design systems, accessibility, and developer tooling. Always exploring new ways to
        express interaction.
      </p>
    </div>
  );
}
