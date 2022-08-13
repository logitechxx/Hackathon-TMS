import { MenuItem } from '@chakra-ui/react';
import React from 'react';
import { ButtonTable } from '../../molecules';
import EditDriver from './Edit';

function ActionButton() {
  return (
    <ButtonTable>
      <MenuItem>
        <EditDriver />
      </MenuItem>
      <MenuItem>Deactivate Driver</MenuItem>
    </ButtonTable>
  );
}

export default ActionButton;
