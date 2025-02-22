'use client';

import { getStatusColors } from '@core/components/table-utils/get-status-color';
import TableRowActionGroup from '@core/components/table-utils/table-row-action-group';
import { routes } from '@/config/routes';
import AvatarCard from '@core/ui/avatar-card';
import DateCell from '@core/ui/date-cell';
import { createColumnHelper } from '@tanstack/react-table';
import Link from 'next/link';
import { ActionIcon, Badge, Checkbox, Flex, Text, Title, Tooltip } from 'rizzui';
import { ListTableDataType } from './table';
import { table } from 'console';
import ModalIconButton from '../../modal-icon-button';
import PencilIcon from '@core/components/icons/pencil';
import GlobalSchemaForm from '../../common/GlobalSchemaForm';
import { number, object, string } from 'yup';
import { createExampleSchema } from '@/validators/create-example';
import { injectDefaults } from '@core/utils/yup-helper'
import useExampleStore from '@/store/plant/order/order.service';
import { plantSchema } from '@/validators/plant.schema';
import { PiSealCheckFill, PiWarning } from "react-icons/pi";
import { PiSealCheckLight } from "react-icons/pi";
import cn from '@core/utils/class-names';
import Image from 'next/image';
import Breadcrumb from '@core/ui/breadcrumb';
import { formatDate } from '@core/utils/format-date';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { complaintSchema } from '@/validators/complaint.schema';
import useComplaintStore from '@/store/plant/complaint/complaint.service';

// Import Swiper styles


const columnHelper = createColumnHelper<ListTableDataType>();

const OrderStatus = {
  PENDING: "warning",
  "RESOLVED": "success",
  get: (status: string) => (OrderStatus as any)[status],
};

const statusColors = {
  success: ['text-green-dark', 'bg-green-dark'],
  warning: ['text-orange-dark', 'bg-orange-dark'],
  danger: ['text-red-dark', 'bg-red-dark'],
  default: ['text-gray-600', 'bg-gray-600'],
};

const allStatus = {
  online: statusColors.success,
  offline: statusColors.default,
  pending: statusColors.warning,
  paid: statusColors.success,
  overdue: statusColors.danger,
  completed: statusColors.success,
  cancelled: statusColors.danger,
  publish: statusColors.success,
  approved: statusColors.success,
  rejected: statusColors.danger,
  active: statusColors.success,
  deactivated: statusColors.danger,
  on_going: statusColors.warning,
  at_risk: statusColors.danger,
  delayed: statusColors.default,
  draft: statusColors.default,
  refunded: statusColors.default,
};

export const ListColumns = [
  // columnHelper.display({
  //   id: 'select',
  //   size: 50,
  //   header: ({ table }) => (
  //     <Checkbox
  //       className="ps-3.5"
  //       aria-label="Select all Rows"
  //       checked={table.getIsAllPageRowsSelected()}
  //       onChange={() => table.toggleAllPageRowsSelected()}
  //     />
  //   ),
  //   cell: ({ row }) => (
  //     <Checkbox
  //       className="ps-3.5"
  //       aria-label="Select Row"
  //       checked={row.getIsSelected()}
  //       onChange={row.getToggleSelectedHandler()}
  //     />
  //   ),
  // }),
  // columnHelper.accessor('trackingId', {
  //   id: 'trackingId',
  //   size: 150,
  //   header: 'Tracking ID',
  //   cell: ({ row }) => (
  //     <Link
  //       href={routes.logistics.shipmentDetails(row.original.id)}
  //       className="duration-200 hover:text-gray-900 hover:underline"
  //     >
  //       {row.original.trackingId}
  //     </Link>
  //   ),
  // }),

  columnHelper.accessor('store._id', {
    id: 'store',
    size: 150,
    header: 'Store',
    enableSorting: false,
    cell: ({ row }) => (
      <AvatarCard
        src={row.original.store?.name ?? ""}
        name={row.original.store?.name ?? ""}
      />
    ),
  }),
  columnHelper.accessor('createdAt', {
    id: 'date',
    size: 150,
    header: 'Raised on',
    cell: ({ row }) => <DateCell date={new Date(row.original.createdAt)} />,
  }),


  columnHelper.accessor('watercans', {
    id: 'watercans',
    size: 150,
    header: 'Can Count',
    cell: ({ row }) => row.original.watercans,
  }),

  columnHelper.accessor('status', {
    id: 'status',
    size: 150,
    header: 'Status',
    cell: ({ row }) => <Badge
      variant="outline"
      className="w-32 font-medium"
      color={OrderStatus.get(row.original.status)}
    >
      {row.original.status}
    </Badge>,
  }),
  //

  columnHelper.accessor('remark', {
    id: 'scanned_outside',
    size: 150,
    header: 'Complaint Type',
    cell: ({ row }) => {

      const color = row.original.status == "PENDING" ? statusColors.danger : statusColors.success;

      return <Flex align="center" gap="2" className="w-auto">
        <Badge renderAsDot className={color[1]} />
        <Text
          className={cn('font-medium capitalize', color[0])}
        >
          {row.original.type}
        </Text>
        <ModalIconButton
          onClickCustom={() => {
            useComplaintStore.getState().select(row.original._id)
          }}
          customSize="1000px"

          icon={
            <PiWarning />
          }
          view={
            <>
              <div
                className="grid grid-cols-1 gap-6 p-6 @container md:grid-cols-2 [&_.rizzui-input-label]:font-medium [&_.rizzui-input-label]:text-gray-900"

              >

                <>
                  <div
                    className="mb-6 flex w-full cursor-pointer flex-col gap-y-4 rounded-[10px] border border-muted p-4 @lg:gap-y-6 sm:p-[30px]"

                  >
                    <div className="relative flex items-start justify-between gap-4">
                      <div className="flex flex-col items-start gap-4 ">
                        <AvatarCard
                          src={`${row.original?.store_employee?.id}`}
                          name={`${row.original?.store_employee?.name}`}
                          description={`${row.original?.store_employee?.id}`}
                        />
                        <div className="space-y-1">


                          <Breadcrumb
                            separator=""
                            separatorVariant="circle"
                            className="flex-wrap gap-y-1 [&>a]:text-xs [&>a]:!text-gray-500 @7xl:[&>a]:text-sm"
                          >

                            <Breadcrumb.Item key={"item.name"}>
                              {`${row.original?.store?.name}`}
                            </Breadcrumb.Item>
                            <Breadcrumb.Item key={"item.name"}>
                              {formatDate(new Date(row.original?.createdAt), "MMMM D, YYYY h:mm A")}
                            </Breadcrumb.Item>
                          </Breadcrumb>
                          <Text><b>type:</b> {row.original?.type}</Text>
                          <Text><b>description:</b> {row.original?.description}</Text>
                          <Text><b>remark:</b> {row.original?.remark}</Text>
                        </div>
                      </div>
                      {/* <Button
                                size="sm"
                                variant="outline"
                                className={cn('h-10', 'bg-primary/10 text-primary')}
                                aria-label="Bookmark this job"
                            >
                                {!isBookMark ? (
                                    <PiBookmarkSimpleThin className="size-4 @7xl:size-5" />
                                ) : (
                                    <PiBookmarkSimpleFill className="size-4 @7xl:size-5" />
                                )}
                            </Button> */}
                    </div>

                    {/* <Text className="text-sm font-normal leading-normal @xl:leading-relaxed">
                            {"data.jobDescription[0].desc"}
                        </Text> */}

                    <div className="flex flex-wrap items-center gap-x-4 gap-y-2 @lg:gap-x-8">
                      {/* <div className="flex gap-x-1.5">
                                <PiSealCheckFill size={20} className="text-primary" />
                                <Text className="text-sm font-medium">Payment Verified</Text>
                            </div> */}
                      <div className="flex gap-x-1.5">
                        <Text className="text-sm font-medium">{``}</Text>
                      </div>
                    </div>
                  </div>
                </>
                <div
                  className="mb-6 flex items-center justify-center w-full cursor-pointer flex-col gap-y-4 rounded-[10px] border border-muted p-1"

                >

                  <Swiper
                    spaceBetween={50}
                    slidesPerView={1}
                    navigation
                    modules={[Navigation]}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                  >
                    {
                      row.original.images.map(item => {
                        return (
                          <SwiperSlide>
                            <Image src={item} alt={row.original.remark} width={200} height={200} className='rounded-[10px]' />
                          </SwiperSlide>)
                      })
                    }

                  </Swiper>

                </div>

              </div>
              <div
                className="mb-6  w-full p-6 rounded-[10px] border border-muted"

              >
                <GlobalSchemaForm onSubmitCb={useComplaintStore.getState().update as any} schema={injectDefaults(complaintSchema, {
                  remark: row.original.remark,
                  status: row.original.status,
                }).label("Edit").meta({ button: "Update" })} />
              </div>
            </>}

          onClick={() => {

          }}
        >

        </ModalIconButton>
      </Flex>
    },

  }),





];
