"use client"

import { PieChart, Pie, Cell,BarChart, Bar, XAxis, YAxis, Tooltip, Legend,ReferenceLine  } from "recharts"
import { ResponsiveContainer } from "recharts"
import { search } from "@/types/dashboard"

interface chartProps {
  categories: string[];
  services: search[];
}


const COLORS = [
  "#6366f1",
  "#22c55e",
  "#f59e0b",
  "#ef4444",
  "#06b6d4",
]

export default function Charts({  categories, services}: chartProps) {
  const data = categories.map((category) => ({
    name: category,
    value: services.filter((service) => service.category === category).length,
  }));
  const bar = services.map((service) => ({
  name: service.name,
  UP: service.status === "UP" ? 1 : 0,
  DOWN: service.status === "DOWN" ? -1 : 0,


}));
  return (
  <div className="flex flex-col md:flex-row gap-4 w-full">
    <div className="w-full md:w-1/2 bg-white rounded-lg p-4">
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            outerRadius={100}
            innerRadius={70}
            dataKey="value"
            label
          >
            {data.map((entry, index) => (
              <Cell key={index} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>

    <div className="w-full md:w-1/2 bg-white rounded-lg p-4">
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={bar} barSize={30}>
          <XAxis dataKey="name" />
          <YAxis />
          <ReferenceLine y={0} stroke="#000" />
          <Tooltip />
          <Legend />
          <Bar dataKey="UP" fill="#22c55e" />
          <Bar dataKey="DOWN" fill="#ef4444" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  </div>
)}