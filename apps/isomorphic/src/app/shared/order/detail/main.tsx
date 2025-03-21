'use client';

import cn from '@core/utils/class-names';
import { toCurrency } from '@core/utils/to-currency';
import ShipWithContainer from '@core/components/icons/ship-with-container';
import ShippingBox from '@core/components/icons/shipping-box';
import CargoPallet from '@core/components/icons/cargo-pallet';
import MoneyInHand from '@core/components/icons/money-in-hand';
import Containers from '@core/components/icons/containers';
import SimpleBar from '@core/ui/simplebar';
import InTableComponent from './in/table';
import OutTableComponent from './out/table';
import useExampleStore from '@/store/plant/order/order.service';
import { useEffect } from 'react';
import useOrderStoreScansStore from '@/store/plant/order/order-store-scans.service';
import { PiArrowDownBold, PiArrowUpBold, PiEyeLight } from 'react-icons/pi';
import { Box, Flex } from 'rizzui';
import DetailTableComponent from './table';
import useOrderStoreScansOutStore from '@/store/plant/order/order-store-scans-out.service';

type StatType = {
    id: number;
    count: number | string;
    icon: React.ReactNode;
    label: string;
};

type Props = {}

const Main = (props: Props) => {
    const { example: { total: inTotal } } = useOrderStoreScansStore();
    const { example: { total: outTotal } } = useOrderStoreScansOutStore();

    return (
        <Box className='p-2' >
            <SimpleBar>
                <div className="grid grid-flow-col gap-5 mb-1">
                    <DetailTableComponent />
                </div>
                <div className="grid grid-flow-col gap-5">
                    <ShipmentStat key={"1"} {...{ count: inTotal, icon: <PiArrowDownBold />, id: 1, label: "IN" }} />
                    <ShipmentStat key={"1"} {...{ count: outTotal, icon: <PiArrowUpBold />, id: 1, label: "OUT" }} />
                </div>
            </SimpleBar>
            <br />
            <Flex align='start' justify='between' >
                <InTableComponent />
                <OutTableComponent />
            </Flex>
        </Box>
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