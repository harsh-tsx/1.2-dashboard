import { metaObject } from '@/config/site.config';
import { routes } from '@/config/routes';
import { shipmentData } from '@/data/shipment-data';
import PageHeader from './page-header';
import ExportButton from '@/app/shared/export-button';
import Main from '@/app/shared/sample/main';
import Modalbutton from './modal-button';

export const metadata = {
  ...metaObject('Sample List'),
};

export default function LogisticsListPage() {
  return (
    <>
      <PageHeader />
      <div className="flex flex-col gap-10">
        <Main />
      </div>
    </>
  );
}
