import React from 'react'
import LayoutDashboard from '../../Layout/LayoutDashboard'

export default function Projects() {
  return (
    <div><LayoutDashboard title='Projects'>        <div className="flex flex-col gap-4">
    <h1 className="text-xl font-bold">Projects</h1>
    <div className="flex justify-between">
      <div className="bg-white w-full h-96 justify-between flex flex-col border rounded-xl shadow-xl">
        <div className="flex items-center p-3 gap-4">Projects Content</div>
      </div>
    </div>
  </div></LayoutDashboard></div>
  )
}
