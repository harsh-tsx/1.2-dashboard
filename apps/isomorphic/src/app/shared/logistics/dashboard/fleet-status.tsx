'use client';

import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import { Title, Text } from 'rizzui';
import cn from '@core/utils/class-names';
import HourGlassIcon from '@core/components/icons/hour-glass';
import WeighingScale from '@core/components/icons/weighing-scale';
import useStatsStore from '@/store/plant/stats/stats.service';



export default function FleetStatus({ className }: { className?: string }) {
  const { stats: { detail } } = useStatsStore();
  const data = [
    { name: 'Available:', value: detail?.can_stats.atPlant, color: '#3872FA' },
    { name: 'At Store:', value: detail?.can_stats.atStore, color: '#eab308' },
    { name: 'On the Move:', value: detail?.can_stats.onWayStore, color: '#10b981' },
  ];
  return (
    <div className={cn('flex flex-col gap-5 border-0 p-0 lg:p-0', className)}>
      <div className="grid items-start rounded-lg border  p-5 @xl:grid-cols-2 lg:p-7 border-green-600" /** border-muted */>
        <Title
          as="h3"
          className="col-span-full mb-8 text-base font-semibold sm:text-lg"
        >
          WaterCan Status
        </Title>
        <div className="mb-6 w-full @3xl:w-40 @4xl:mb-0">
          <div className="mx-auto h-44 w-44">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart className="[&_.recharts-layer:focus]:outline-none [&_.recharts-sector:focus]:outline-none dark:[&_.recharts-text.recharts-label]:first-of-type:fill-white">
                <Pie
                  data={data}
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  fill="#8884d8"
                  strokeWidth={2}
                  paddingAngle={8}
                  innerRadius={40}
                  cornerRadius={6}
                  dataKey="value"
                >
                  {data.map((item, index) => (
                    <Cell key={index} fill={item.color} stroke={item.color} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </div>
          <p className="mt-4 text-center font-semibold text-gray-800">
            WaterCan Efficacy
          </p>
        </div>
        <div className="">
          {data.map((item, index) => (
            <div
              key={index}
              className="mb-4 flex items-center justify-between border-b border-muted pb-4 last:mb-0 last:border-0 last:pb-0"
            >
              <div className="flex items-center justify-start">
                <span
                  className="me-2 h-2 w-2 rounded-full"
                  style={{ backgroundColor: item.color }}
                />
                <Title as="h5" className="text-sm font-medium">
                  {item.name}
                </Title>
              </div>
              <Text as="span">{item.value}</Text>
            </div>
          ))}
          <div className="mb-4 flex items-center justify-between border-b border-muted pb-4 last:mb-0 last:border-0 last:pb-0">
            <div className="flex items-center justify-start">
              <span
                className="me-2 h-2 w-2 rounded-full"
                style={{ backgroundColor: 'red' }}
              />
              <Title as="h5" className="text-sm font-medium">
                Total Cans:
              </Title>
            </div>
            <Text as="span">{detail?.can_stats.totalCans}</Text>
          </div>
        </div>
      </div>
      <div className="grid gap-5 rounded-lg border border-muted p-4 @2xl:grid-cols-2 @2xl:p-6">
        <div className="flex items-center gap-2.5">
          <div className="flex h-12 w-12 items-center justify-center">
            <HourGlassIcon className="h-8 w-8" />
          </div>
          <div>
            <p className="text-base font-semibold text-gray-900">25 mins</p>
            <p>Avg. Loading Time</p>
          </div>
        </div>
        <div className="flex items-center gap-2.5">
          <div className="flex h-12 w-12 items-center justify-center">
            <WeighingScale className="h-8 w-8" />
          </div>
          <div>
            <p className="text-base font-semibold text-gray-900">13 tons</p>
            <p>Avg. Loading Weight</p>
          </div>
        </div>
      </div>
    </div>
  );
}
