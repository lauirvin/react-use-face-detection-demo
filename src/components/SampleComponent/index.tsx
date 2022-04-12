import { memo } from 'react';
import styles from './styles.module.scss';

interface Props {
  foo?: string;
}

export const SampleComponent = memo<Props>(({ foo }) => <div className={styles.container}>SampleComponent</div>);

SampleComponent.displayName = 'SampleComponent';

export default SampleComponent;
