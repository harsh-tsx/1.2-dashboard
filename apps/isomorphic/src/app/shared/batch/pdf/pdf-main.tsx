import React from 'react'
import { Box, Text, Title } from 'rizzui'
import QRCodePDFViewer from './pdf'
import { PiMapPin } from 'react-icons/pi'
import AvatarCard from '@core/ui/avatar-card'

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
    return (
        <Box className='p-5 flex flex-row items-center justify-between' >
            <div className='w-1/2' >
                <div
                    className="mb-6 flex w-full cursor-pointer flex-col gap-y-4 rounded-[10px] border border-muted p-4 @lg:gap-y-6 sm:p-[30px]"

                >
                    <div className="relative flex items-start justify-between gap-4">
                        <div className="flex flex-col items-start gap-4 @xl:flex-row">
                            <AvatarCard
                                src={`1`}
                                name={`1`}
                            />
                            <div className="space-y-1">
                                <Title as="h3" className="text-base font-medium @xl:text-lg">
                                    {`title`}
                                </Title>
                                {/* <Breadcrumb
                                    separator=""
                                    separatorVariant="circle"
                                    className="flex-wrap gap-y-1 [&>a]:text-xs [&>a]:!text-gray-500 @7xl:[&>a]:text-sm"
                                >
                                    <Breadcrumb.Item key={"item.name"}>
                                        {`${store.example.home?.stores?.[0]?.address}`}
                                    </Breadcrumb.Item>
                                </Breadcrumb> */}
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
                            <PiMapPin size={20} />
                            <Text className="text-sm font-medium">{`hii`}</Text>
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-1/2' >

                <QRCodePDFViewer qrData={qrData} />
            </div>
        </Box>
    )
}

export default QRCodePDFMain