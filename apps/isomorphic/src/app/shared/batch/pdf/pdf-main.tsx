import React, { useEffect } from 'react'
import { Box, Text, Title } from 'rizzui'
import QRCodePDFViewer from './pdf'
import { PiMapPin } from 'react-icons/pi'
import AvatarCard from '@core/ui/avatar-card'
import useWaterCanBatchStore from '@/store/plant/batch/batch.service'
import Breadcrumb from '@core/ui/breadcrumb'
import Pagination from '@core/ui/pagination'
import useWaterCanStore from '@/store/plant/can/can.service'

type Props = {}


const qrData = [
    "https://cloud.appwrite.io/v1/storage/buckets/676e38d1002341869635/files/67bc5c6e002f3edfc89d/view?project=676e388d001ec4cdce56&mode=admin",
    "https://cloud.appwrite.io/v1/storage/buckets/676e38d1002341869635/files/67bc5c6e002f3edfc89d/view?project=676e388d001ec4cdce56&mode=admin",
    "https://cloud.appwrite.io/v1/storage/buckets/676e38d1002341869635/files/67bc5c6e002f3edfc89d/view?project=676e388d001ec4cdce56&mode=admin",
    "https://cloud.appwrite.io/v1/storage/buckets/676e38d1002341869635/files/67bc5c6e002f3edfc89d/view?project=676e388d001ec4cdce56&mode=admin",
    "https://cloud.appwrite.io/v1/storage/buckets/676e38d1002341869635/files/67bc5c6e002f3edfc89d/view?project=676e388d001ec4cdce56&mode=admin",
    "https://cloud.appwrite.io/v1/storage/buckets/676e38d1002341869635/files/67bc5c6e002f3edfc89d/view?project=676e388d001ec4cdce56&mode=admin",
    "https://cloud.appwrite.io/v1/storage/buckets/676e38d1002341869635/files/67bc5c6e002f3edfc89d/view?project=676e388d001ec4cdce56&mode=admin",
    "https://cloud.appwrite.io/v1/storage/buckets/676e38d1002341869635/files/67bc5c6e002f3edfc89d/view?project=676e388d001ec4cdce56&mode=admin",
    "https://cloud.appwrite.io/v1/storage/buckets/676e38d1002341869635/files/67bc5c6e002f3edfc89d/view?project=676e388d001ec4cdce56&mode=admin",
    "https://cloud.appwrite.io/v1/storage/buckets/676e38d1002341869635/files/67bc5c6e002f3edfc89d/view?project=676e388d001ec4cdce56&mode=admin",
    "https://cloud.appwrite.io/v1/storage/buckets/676e38d1002341869635/files/67bc5c6e002f3edfc89d/view?project=676e388d001ec4cdce56&mode=admin",
    "https://cloud.appwrite.io/v1/storage/buckets/676e38d1002341869635/files/67bc5c6e002f3edfc89d/view?project=676e388d001ec4cdce56&mode=admin",
    "https://cloud.appwrite.io/v1/storage/buckets/676e38d1002341869635/files/67bc5c6e002f3edfc89d/view?project=676e388d001ec4cdce56&mode=admin",
    "https://cloud.appwrite.io/v1/storage/buckets/676e38d1002341869635/files/67bc5c6e002f3edfc89d/view?project=676e388d001ec4cdce56&mode=admin",
    "https://cloud.appwrite.io/v1/storage/buckets/676e38d1002341869635/files/67bc5c6e002f3edfc89d/view?project=676e388d001ec4cdce56&mode=admin",
    "https://cloud.appwrite.io/v1/storage/buckets/676e38d1002341869635/files/67bc5c6e002f3edfc89d/view?project=676e388d001ec4cdce56&mode=admin",
    "https://cloud.appwrite.io/v1/storage/buckets/676e38d1002341869635/files/67bc5c6e002f3edfc89d/view?project=676e388d001ec4cdce56&mode=admin",
    "https://cloud.appwrite.io/v1/storage/buckets/676e38d1002341869635/files/67bc5c6e002f3edfc89d/view?project=676e388d001ec4cdce56&mode=admin",
    "https://cloud.appwrite.io/v1/storage/buckets/676e38d1002341869635/files/67bc5c6e002f3edfc89d/view?project=676e388d001ec4cdce56&mode=admin",
]


const QRCodePDFMain = (props: Props) => {
    const { watercanbatch: { detail } } = useWaterCanBatchStore();
    const canStore = useWaterCanStore();


    useEffect(() => {
        canStore.get.paginate({ batches: `${detail?._id}`, size: 500 })
    }, [])
    return (
        <Box className='p-5 flex flex-row items-center justify-between' >
            <div className='w-1/2' >
                <div
                    className="mb-6 flex w-full cursor-pointer flex-col gap-y-4 rounded-[10px] border border-muted p-4 @lg:gap-y-6 sm:p-[30px]"

                >
                    <div className="relative flex items-start justify-between gap-4">
                        <div className="flex flex-col items-start gap-4 @xl:flex-row">
                            <div className="space-y-1">
                                <Title as="h3" className="text-base font-medium @xl:text-lg">
                                    {`Batch - ${detail?.id}`}
                                </Title>
                                <Breadcrumb
                                    separator=""
                                    separatorVariant="circle"
                                    className="flex-wrap gap-y-1 [&>a]:text-xs [&>a]:!text-gray-500 @7xl:[&>a]:text-sm"
                                >
                                    <Breadcrumb.Item key={"item.name"}>
                                        {`Watercans - ${detail?.watercans}`}
                                    </Breadcrumb.Item>
                                </Breadcrumb>
                            </div>
                        </div>

                    </div>

                    {/* <Text className="text-sm font-normal leading-normal @xl:leading-relaxed">
                        {"data.jobDescription[0].desc"}
                    </Text> */}

                    <Pagination showPrevNextJumpers showLessItems showQuickJumper showSizeChanger showTitle showTotal={() => { return <>{canStore.example.total}</> }} total={canStore.example.total} pageSize={canStore.example.size} pageSizeOptions={[10, 20, 50, 100]} onChange={(page, pageSize) => {
                        console.log({ page, pageSize })
                        canStore.get.paginate({ page: page - 1, size: pageSize, })
                    }} />


                </div>
            </div>
            <div className='w-1/2' >
                <QRCodePDFViewer qrData={canStore.example.list} />
            </div>
        </Box>
    )
}

export default QRCodePDFMain