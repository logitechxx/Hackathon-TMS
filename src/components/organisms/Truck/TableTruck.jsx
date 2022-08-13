/* eslint-disable react/forbid-prop-types */
import React from 'react'
import { CustomTable, ButtonTable } from '../../molecules';
import ActionButton from './ActionButton';
import './style.css'

function TableTruck() {
  const columns = [
    {
      name: 'License Number',
      selector: (row) => row.no,
      sortable: true,
      maxWidth: '450px'
    },
    {
      name: 'Truck Type',
      selector: (row) => row.truck,
      sortable: true,
      maxHeight: '200px',
      maxWidth: '250px',
    },
    {
      name: 'Plate Type',
      selector: (row) => row.plate,
      sortable: true,
      maxWidth: '100px',
    },
    {
      name: 'Production Year',
      selector: (row) => row.year,
      sortable: true,
      maxWidth: '150px',
    },
    {
      name: 'Status',
      selector: (row) => row.status,
      sortable: true,
      maxWidth: '150px',
    },
    {
      name: 'Action',
      selector: (row) => row.action,
      sortable: true,
      maxWidth: '100px',
      button: true
    },
  ];

  const data = [
    {
      no: 'B 2021 ABC',
      truck: 'Tronton',
      plate: 'Yellow',
      year: '2001',
      status: 'Active',
      action: <ActionButton/>,
    },
  ]

  return (
      <CustomTable
        columns={columns}
        data={data}
      />
  )
}

export default TableTruck