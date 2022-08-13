/* eslint-disable react/forbid-prop-types */
import React from 'react';
import { Link } from 'react-router-dom';
import { CustomTable, ButtonTable } from '../../molecules';
import ActionButton from './ActionButton';
import DetailDriver from './DetailDriver';

function TableDriver() {
  const columns = [
    {
      name: 'Driver Name',
      selector: (row) => row.name,
      sortable: true,
      maxWidth: '450px',
    },
    {
      name: 'Phone Number',
      selector: (row) => row.phone_number,
      sortable: true,
      maxHeight: '200px',
      maxWidth: '250px',
    },
    {
      name: 'Created At',
      selector: (row) => row.created_at,
      sortable: true,
      maxWidth: '250px',
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
      button: true,
    },
  ];

  const data = [
    {
      name: <DetailDriver label="Arteezy" />,
      phone_number: '+6281234567',
      created_at: 'Yellow',
      status: 'Active',
      action: <ActionButton />,
    },
  ];

  return <CustomTable columns={columns} data={data} />;
}

export default TableDriver;
