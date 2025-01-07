import Link from 'next/link';
import { PiPlusBold } from 'react-icons/pi';
import { routes } from '@/config/routes';
import { Button } from 'rizzui';
import { shipmentData } from '@/data/shipment-data';
import PageHeader from '@/app/shared/page-header';
import ExportButton from '@/app/shared/export-button';
import Modalbutton from './modal-button';

const pageHeader = {
  title: 'Store',
  breadcrumb: [
    {
      name: 'Store List',
    },
  ],
};

interface HeaderProps {
  className?: string;
}

export default function ShipmentPageHeader({ className }: HeaderProps) {
  return (
    <PageHeader title={pageHeader.title} breadcrumb={pageHeader.breadcrumb}>
      <div className="mt-4 flex flex-col items-center gap-3 @sm:flex-row @lg:mt-0">
        {/* <ExportButton
          data={shipmentData}
          fileName="shipment_data"
          header="ID,Tracking ID,Date,Sender,Receiver,Origin,Destination,Payment Method,Status"
        /> */}
        <Modalbutton />
      </div>
    </PageHeader>
  );
}
