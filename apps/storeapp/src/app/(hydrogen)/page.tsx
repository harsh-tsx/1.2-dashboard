import FileDashboard from '@/app/shared/file/dashboard';
import { metaObject } from '@/config/site.config';
import { useSession } from 'next-auth/react';
import LogisticsListPage from './sample/list/page';
import LogisticsDashboard from '../shared/logistics/dashboard';

export const metadata = {
  ...metaObject(),
};

export default function FileDashboardPage() {

  return <LogisticsDashboard />;
}
