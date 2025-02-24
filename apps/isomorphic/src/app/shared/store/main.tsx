'use client';

import cn from '@core/utils/class-names';
import { toCurrency } from '@core/utils/to-currency';
import ShipWithContainer from '@core/components/icons/ship-with-container';
import ShippingBox from '@core/components/icons/shipping-box';
import CargoPallet from '@core/components/icons/cargo-pallet';
import MoneyInHand from '@core/components/icons/money-in-hand';
import Containers from '@core/components/icons/containers';
import SimpleBar from '@core/ui/simplebar';
import TableComponent from './list/table';
import useExampleStore from '@/store/plant/store/store.service';
import { useEffect } from 'react';

type StatType = {
    id: number;
    count: number | string;
    icon: React.ReactNode;
    label: string;
};

type Props = {}

const Main = (props: Props) => {

    return (
        <>
            {/* <SimpleBar>
                <div className="grid grid-flow-col gap-5">
                    {data.map((item) => (
                        <ShipmentStat key={item.id} {...item} />
                    ))}
                </div>
            </SimpleBar> */}
            {
                <TableComponent />
            }
        </>
    )
}
function ShipmentStat({ count, icon, label }: StatType) {
    return (
        <div
            className={cn(
                'grid w-72 grid-cols-[56px_1fr] items-start gap-4 rounded-lg border border-gray-300 px-6 py-6 3xl:w-auto'
            )}
        // style={{ borderColor: bgColor }}
        >
            <figure className="relative flex items-center justify-center rounded-full [&>svg]:h-12 [&>svg]:w-12">
                {icon}
            </figure>
            <div>
                <p className="text-2xl font-bold text-gray-900">{count}</p>
                <p className="mt-0.5 text-sm text-gray-500">{label}</p>
            </div>
        </div>
    );
}


export default Main