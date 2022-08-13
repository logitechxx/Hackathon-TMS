import { Button, FormControl, FormLabel, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text, useDisclosure } from '@chakra-ui/react'
import React from 'react'
import SelectDropdown from '../../../atoms/SelectDropdown'
import useForm from './useForm'

function CreateTruck() {
        const { isOpen, onOpen, onClose } = useDisclosure()
      
        const initialRef = React.useRef(null)
        const finalRef = React.useRef(null)


        const {values, stnk, kir, handleChangeKir, handleChangeStnk, onSubmit, mutateAddCategory, handleChange,  selectedTruck, handleChangeTruck, selectedPlate, handleChangePlate, truckType,
          licenseType} = useForm()



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
                    <Input name="license" value={values.license}  onChange={handleChange} placeholder='License' />
                  </FormControl>
      
                  <FormControl mt={4}>
                    <FormLabel>License Type</FormLabel>
                    <SelectDropdown
                    multi
                    name="plate"
                    searchable
                    onChange={handleChangePlate}
                    value={selectedPlate}
                    options={licenseType}
              />
                  </FormControl>

                  <FormControl mt={4}>
                    <FormLabel>Truck Type</FormLabel>
                    <SelectDropdown
                    multi
                    name="truckType"
                    searchable
                    onChange={handleChangeTruck}
                    value={selectedTruck}
                    options={truckType}
              />
                  </FormControl>

                  <FormControl mt={4}>
                    <FormLabel> Production Year</FormLabel>
                    <Input placeholder='Production Year' onChange={handleChange} name="year" />
                  </FormControl>


                  <FormControl mt={4}>
                    <FormLabel> STNK</FormLabel>
                    <Input type="file" name="stnk" value="stnk" onChange={handleChangeStnk} />
                  </FormControl>

                  <FormControl mt={4}>
                    <FormLabel> KIR</FormLabel>
                    <Input type="file" name="kir" value="kir"  onChange={handleChangeKir}/>
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