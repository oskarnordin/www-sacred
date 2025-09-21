import Block from '@components/Block';
import Divider from '@components/Divider';
import Button from '@components/Button';

export default function ContactPage() {
  return (
    <div style={{ padding: '2ch' }}>
        <h1>Hello World</h1>
          <p style={{ marginTop: '0.5ch', maxWidth: '72ch' }}>
            Welcome. This space highlights selected work, experiments, and interests.
          </p>
      <Divider />
      <p>Ways to reach out or follow along.</p>
      <ul>
        <li>Email: <a href="mailto:oskarnordin1@gmail.com">oskarnordin1@gmail.com</a></li>
        <li>GitHub: <a href="https://github.com/oskarnordin" target="_blank">github.com/oskarnordin</a></li>
        <li>LinkedIn: <a href="https://www.linkedin.com/in/oskarnordin" target="_blank">linkedin.com/in/oskarnordin</a></li>
      </ul>

    </div>
  );
}
