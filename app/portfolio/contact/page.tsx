import Block from '@components/Block';
import Divider from '@components/Divider';
import Button from '@components/Button';

export default function ContactPage() {
  return (
    <div style={{ padding: '2ch' }}>
      <Block>
        <h1>Contact</h1>
        <p>Ways to reach out or follow along.</p>
      </Block>
      <Divider />
      <ul>
        <li>Email: <a href="mailto:you@example.com">you@example.com</a></li>
        <li>GitHub: <a href="https://github.com/your-handle" target="_blank">github.com/your-handle</a></li>
        <li>LinkedIn: <a href="https://www.linkedin.com/in/your-handle" target="_blank">linkedin.com/in/your-handle</a></li>
      </ul>
      <Divider />
      <Button as="a" href="/portfolio" theme="SECONDARY">Back</Button>
    </div>
  );
}
