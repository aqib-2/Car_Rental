import React from 'react'
import AdminHeader from './AdminHeader'
import { useSelector } from 'react-redux'
import LookUps from './LookUps';
import { useGetDashboardDataQuery } from '../../../../api/endpoints/booking';

const AdminDashboard = () => {

  const {mainScreen} = useSelector((state) => state.root.admin);
  const {data:dashboardData} = useGetDashboardDataQuery();

  return (
    <>
      <AdminHeader/>
      {
        mainScreen === 'lookups' ? <LookUps/> :  (<>

        <div className='w-11/12 mx-auto flex space-x-5'>
            <div className='bg-slate-200 p-2 rounded-md shadow-lg w-40'>
              <h1>Total Locations</h1>
              <p>{dashboardData?.data.locations ?? 0}</p>
            </div>
            <div className='bg-slate-200 p-2 rounded-md shadow-lg w-40'>
              <h1>Total Cars</h1>
              <p>{dashboardData?.data.cars ?? 0}</p>
            </div>
            <div className='bg-slate-200 p-2 rounded-md shadow-lg w-40'>
              <h1>Total Bookings</h1>
              <p>{dashboardData?.data.bookings ?? 0}</p>
            </div>
            <div className='bg-slate-200 p-2 rounded-md shadow-lg w-40'>
              <h1>Total Revenue</h1>
              <p>₹ {dashboardData?.data.totalRevenue ?? 0}</p>
            </div>
        </div>
        </>)
      }
    </>
  )
}

export default AdminDashboard