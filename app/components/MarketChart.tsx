'use client';

import { Area, AreaChart, ResponsiveContainer, XAxis, YAxis, Tooltip } from 'recharts';

const chartData = [
  { time: '0:00', value: 1200 },
  { time: '4:00', value: 2100 },
  { time: '8:00', value: 1800 },
  { time: '12:00', value: 2800 },
  { time: '16:00', value: 3200 },
  { time: '20:00', value: 2900 },
  { time: '24:00', value: 3100 },
];

export function MarketChart() {
  return (
    <div className="w-full h-80">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={chartData}>
          <defs>
            <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="hsl(180 80% 50%)" stopOpacity={0.8}/>
              <stop offset="95%" stopColor="hsl(180 80% 50%)" stopOpacity={0.1}/>
            </linearGradient>
          </defs>
          <XAxis 
            dataKey="time" 
            axisLine={false}
            tickLine={false}
            tick={{ fill: 'hsl(220 15% 75%)', fontSize: 12 }}
          />
          <YAxis hide />
          <Tooltip 
            contentStyle={{ 
              background: 'hsl(220 15% 15%)', 
              border: '1px solid hsl(220 15% 25%)',
              borderRadius: '8px',
              color: 'hsl(220 15% 95%)'
            }}
          />
          <Area
            type="monotone"
            dataKey="value"
            stroke="hsl(180 80% 50%)"
            strokeWidth={2}
            fill="url(#colorValue)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
