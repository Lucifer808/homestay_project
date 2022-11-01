import React from 'react'
import { Chart } from "react-chartjs-2";
const AdminChart = ({...settings}) => {
  return (
    <Chart type={settings.type} data={settings.data} options={settings.options || null} width={settings.width || null} height={settings.height || null} />
  )
}

export default AdminChart