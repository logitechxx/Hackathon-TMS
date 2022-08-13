import { Button, FormControl, FormLabel, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text, useDisclosure } from '@chakra-ui/react'
import React from 'react'
import SelectDropdown from '../../atoms/SelectDropdown'

function CreateTruck() {
        const { isOpen, onOpen, onClose } = useDisclosure()
      
        const initialRef = React.useRef(null)
        const finalRef = React.useRef(null)


const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
  ]
      
        return (
          <>
            <Button onClick={onOpen}>Create</Button>
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
                    <Input ref={initialRef} placeholder='First name' />
                  </FormControl>
      
                  <FormControl mt={4}>
                    <FormLabel>License Type</FormLabel>
                    <SelectDropdown
                    multi
                    name="licenseType"
                    searchable
                    options={options}
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

export default CreateTruck