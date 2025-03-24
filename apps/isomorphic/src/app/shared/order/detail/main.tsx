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
import OutTableComponent from './scan-out/table';
import useExampleStore from '@/store/plant/order/order.service';
import { useEffect, useState } from 'react';
import useOrderStoreScansStore from '@/store/plant/order/order-store-scans.service';
import { PiArrowDownBold, PiArrowUpBold, PiEyeLight } from 'react-icons/pi';
import { Box, Button, Flex, MultiSelect, Select } from 'rizzui';
import DetailTableComponent from './table';
import useOrderStoreScansOutStore from '@/store/plant/order/order-store-scans-out.service';
import useStoreEmployeeStore from '@/store/plant/employee/store-employee.service';
import useOrderStore from '@/store/plant/order/order.service';
import useWaterCanStore, { watercanStatuses } from '@/store/plant/can/can.service';
import { DatePicker } from '@core/ui/datepicker';
import moment from 'moment';

type StatType = {
    id: number;
    count: number | string;
    icon: React.ReactNode;
    label: string;
};

type Props = {}

const Main = (props: Props) => {
    const { example: { detail } } = useOrderStore()
    const { example: { total: inTotal } } = useOrderStoreScansStore();
    const { example: { total: outTotal } } = useOrderStoreScansOutStore();
    const employeeStore = useStoreEmployeeStore();
    const waterCanStore = useWaterCanStore()

    useEffect(() => {
        employeeStore.get.paginate({ stores: detail?.store?._id })
        waterCanStore.get.paginate({
            statuses: watercanStatuses.filter(f => ![
                "SCANNED IN TO STORE",
                "SCANNED OUT FOR STORE",
                "SCANNED OUT FOR RETURN",
                "DELIVERED",
                "DECOMMISSIONED",
                "DAMAGED",
                "INACTIVE",
            ].includes(f)).join(',')
        })
    }, [])

    return (
        <Box className='p-2' >
            <SimpleBar>
                {/* <div className="grid grid-flow-col gap-5 mb-1">
                    <DetailTableComponent />
                </div> */}

                <div className="grid grid-flow-col gap-5">
                    <ShipmentStat key={"1"} {...{ count: inTotal, icon: <PiArrowDownBold />, id: 1, label: " IN" }} />
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
    const store = useOrderStoreScansStore();
    const { example: { detail } } = useOrderStore();

    const employeeStore = useStoreEmployeeStore();
    const employeeOneOf = employeeStore.example.list.map(item => ({ value: item._id, label: item?.name }))
    const [selectedEmployee, setSelectedEmployee] = useState<{ value: string, label: string }>()

    const waterCanStore = useWaterCanStore()
    const waterCanOneOf = waterCanStore.example.list.map(item => ({ value: item._id, label: `${item?.id}` }))
    const [selectedWaterCans, setSelectedWaterCans] = useState<string[]>()

    const [selectedDate, setSelectedDate] = useState();

    const handleSubmit = async () => {
        const body = {
            employee: selectedEmployee?.value as any,
            order: detail?._id as any,
            watercans: selectedWaterCans?.join(',') as any,
            delivered_at: selectedDate,
        }
        await store.get.add(body)
    }
    return (
        <div
            className={cn(
                'flex w-auto items-start justify-between gap-4 rounded-lg border border-gray-300 px-6 py-6'
            )}
        // style={{ borderColor: bgColor }}
        >
            <figure className="relative flex items-center justify-center rounded-full [&>svg]:h-12 [&>svg]:w-12">
                {icon}
                <div className='flex items-center flex-col' >
                    <p className="text-2xl font-bold text-gray-900">{count}</p>
                    <p className="mt-0.5 text-sm text-gray-500">{label}</p>
                </div>
            </figure>
            <div className='w-3/4 flex items-center h-full' >
                <Select
                    options={employeeOneOf as any[]}
                    onChange={(e) => {
                        console.log("onChange: ", e)
                        setSelectedEmployee(e as any)
                    }}
                    name={"Employee"}
                    placeholder='Employee'
                    value={selectedEmployee}
                    searchable
                    searchType='text'
                    className={"w-1/2 mr-2"}
                />

                <MultiSelect
                    options={waterCanOneOf as any[]}
                    onChange={e => {
                        setSelectedWaterCans(e as string[])
                    }}
                    value={selectedWaterCans}
                    searchDisabled={false}
                    name={"WaterCans"}
                    placeholder='WaterCans'
                    className={"w-1/2 mr-2"}
                    searchable
                    searchType='text'
                    onSearchChange={(search) => {
                        waterCanStore.get.paginate({
                            statuses: watercanStatuses.filter(f => ![
                                "SCANNED IN TO STORE",
                                "SCANNED OUT FOR STORE",
                                "SCANNED OUT FOR RETURN",
                                "DELIVERED",
                                "DECOMMISSIONED",
                                "DAMAGED",
                                "INACTIVE",
                            ].includes(f)).join(','), watercans: search
                        })
                    }}
                />

                <DatePicker
                    showTimeInput
                    title={label}
                    placeholderText={label}
                    value={moment(selectedDate).format("DD-MM-YYYY hh:mm A")}
                    onChange={(value) => {
                        setSelectedDate(value as any);
                    }}
                    dateFormat={"DD-MM-YYYY hh:mm A"}
                    className='z-[99999999]'
                    calendarClassName='z-[99999999]'
                    fixedHeight

                />
                <Button
                    type="submit"
                    className="w-1/3"
                    onClick={handleSubmit}
                >
                    Scan IN
                </Button>
            </div>
        </div>
    );
}


export default Main