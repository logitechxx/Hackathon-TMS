/* eslint-disable react/forbid-prop-types */
import React from 'react'
import { CustomTable, ButtonTable } from '../../molecules';
import ActionButton from './ActionButton';
import './styles.css'

function TableShipper() {
    const columns = [
        {
            name: 'Shipment',
            selector: (row) => row.ship,
            sortable: true,
            maxWidth: '350px'
        },
        {
            name: 'License',
            selector: (row) => row.no,
            sortable: true,
            maxWidth: '350px'
        },
        {
            name: 'Drivers Name',
            selector: (row) => row.name,
            sortable: true,
            maxHeight: '200px',
            maxWidth: '250px',
        },
        {
            name: 'Origin',
            selector: (row) => row.origin,
            sortable: true,
            maxWidth: '150px',
        },
        {
            name: 'Destination',
            selector: (row) => row.destination,
            sortable: true,
            maxWidth: '150px',
        },
        {
            name: 'Loading Date',
            selector: (row) => row.loading,
            sortable: true,
            maxWidth: '150px',
        },
        {
            name: 'Status',
            selector: (row) => row.status,
            sortable: true,
            maxWidth: '400px',
        },
        {
            name: 'Action',
            selector: (row) => row.action,
            sortable: true,
            maxWidth: '300px',
            button: true,
        },
    ];


  // const getTrucks = async () => {
  //   // const response = await 
  //   // return response.data.data
  // }

  // // const { data: trucks, status } = useQuery('fetchTrucks', () => getTrucks())

    const data = [
        {
            ship: 'DO-722947',
            no: 'B 2021 ABC',
            name: 'Budi',
            origin: 'Jakarta',
            destination: 'Surabaya',
            loading: '21 August',
            status: 'Completed',
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

export default TableShipper