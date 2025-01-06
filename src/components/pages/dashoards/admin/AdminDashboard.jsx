import React from 'react'
import AdminHeader from './AdminHeader'
import { useSelector } from 'react-redux'
import LookUps from './LookUps';
import Bookings from './Bookings';

const AdminDashboard = () => {
  const {mainScreen} = useSelector((state) => state.root.admin);
  console.log(mainScreen);
  return (
    <>
      <AdminHeader/>
      {
        mainScreen === 'lookups' ? <LookUps/> : mainScreen === 'bookings' ? <Bookings/> :  <></>
      }
    </>
  )
}

export default AdminDashboard