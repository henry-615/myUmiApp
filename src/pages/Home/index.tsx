import DemoLine from '@/components/DemoLine';
import Guide from '@/components/Guide';
import { trim } from '@/utils/format';
import { PageContainer } from '@ant-design/pro-components';
import { useIntl, useModel } from '@umijs/max';
import styles from './index.less';

const HomePage: React.FC = () => {
  const intl = useIntl();
  const myName = intl.formatMessage({
    id: 'user.name',
  });
  const { name } = useModel('global');
  return (
    <PageContainer ghost>
      <div className={styles.container}>
        <Guide name={trim(name) + myName} />
        <DemoLine />
      </div>
    </PageContainer>
  );
};

export default HomePage;
