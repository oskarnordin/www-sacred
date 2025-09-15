import Link from 'next/link';
import Button from '@components/Button';
import styles from './Landing.module.scss';

export default function LandingPage() {
  return (
    <div className={styles.container}>
      <div className={styles.inner}>
        <div className={styles.buttonWrap}>
          <Link href="/portfolio" passHref>
            <Button as="a" theme="PRIMARY">
              enter here
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
