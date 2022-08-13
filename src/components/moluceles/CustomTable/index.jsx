import React from 'react'
import PropTypes from 'prop-types'
import DataTable, { createTheme } from 'react-data-table-component'
import './index.scss'

function CustomTable({ columns, data, ...props }) {
  // const [totalRows, setTotalRows] = useState(0)
  // const [perPage, setPerPage] = useState(0)

  // useEffect(() => {
  //   fetchData(1, perPage);
  // }, [perPage])

  // const handlePageChange = props =>{
  //   fetchData(pafe, perPage)
  // }

  // const handlePerRowsChange = async (newPerPage, page) => {
  //   setPerPage(newPerPage)
  // }

  const customStyles = {
    headCells: {
      style: {
        fontSize: '17px',
        fontWeight: '600',
        fontFamily: 'Poppins',
        minHeight: '70px',
        backgroundColor: '#F3F4F6'
      },
    },
    cells: {
      style: {
        fontSize: '14px',
        fontWeight: '400',
        fontFamily: 'Roboto',

      },
    },
  };

  createTheme('solarized', {
    divider: {
      default: 'transparent',
    },
    border: {
      default: '1px solid #D4DAE2'
    }
  });
  return (
    <div className="custom_table">

      <DataTable
        columns={columns}
        pagination
        paginationServer
        data={data}
        customStyles={customStyles}
        // onChangeRowsPerPage={handlePerRowsChange}
        theme="solarized"
        {...props}
      />
    </div>
  )
}

CustomTable.propTypes = {
  columns: PropTypes.node,
  data: PropTypes.node,
}

CustomTable.defaultProps = {
  columns: [],
  data: [],
}

export default CustomTable
