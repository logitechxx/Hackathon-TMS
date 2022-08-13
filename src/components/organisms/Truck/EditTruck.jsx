import { Button, FormControl, FormLabel, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text, useDisclosure } from '@chakra-ui/react'
import React from 'react'
import SelectDropdown from '../../atoms/SelectDropdown'

function EditTruck() {
        const { isOpen, onOpen, onClose } = useDisclosure()
      
        const initialRef = React.useRef(null)
        const finalRef = React.useRef(null)


const truckType = [
    { value: 'tronton', label: 'Tronton' },
    { value: 'container', label: 'Container' },
    { value: 'cde', label: 'CDE' },
    { value: 'cdd', label: 'CDD' },
    { value: 'wingbox', label: 'WingBox' },
  ]

  const licenseType = [
    { value: 'Black', label: 'Black' },
    { value: 'yellow', label: 'Yellow' },
  ]

        return (
          <>
            <Button onClick={onOpen}>Change Details</Button>
            <Modal
              initialFocusRef={initialRef}
              finalFocusRef={finalRef}
              isOpen={isOpen}
              onClose={onClose}
            >
              <ModalOverlay />
              <ModalContent>
                <ModalHeader>Add New Unit</ModalHeader>
                <ModalCloseButton />
                <ModalBody pb={6}>
                  <FormControl>
                    <FormLabel>License Number</FormLabel>
                    <Input ref={initialRef} placeholder='License' />
                  </FormControl>
      
                  <FormControl mt={4}>
                    <FormLabel>License Type</FormLabel>
                    <SelectDropdown
                    multi
                    name="licenseType"
                    searchable
                    options={licenseType}
              />
                  </FormControl>

                  <FormControl mt={4}>
                    <FormLabel>Truck Type</FormLabel>
                    <SelectDropdown
                    multi
                    name="truckType"
                    searchable
                    options={truckType}
              />
                  </FormControl>

                  <FormControl mt={4}>
                    <FormLabel> Production Year</FormLabel>
                    <Input placeholder='Last name' />
                  </FormControl>


                  <FormControl mt={4}>
                    <FormLabel> STNK</FormLabel>
                    <Input type="file" placeholder='Last name' />
                  </FormControl>

                  <FormControl mt={4}>
                    <FormLabel> KIR</FormLabel>
                    <Input type="file" placeholder='Last name' />
                  </FormControl>

                </ModalBody>
      
                <ModalFooter>
                  <Button colorScheme='facebook' mr={3}>
                    Save
                  </Button>
                  <Button onClick={onClose}>Cancel</Button>
                </ModalFooter>
              </ModalContent>
            </Modal>
          </>
        )
}

export default EditTruck