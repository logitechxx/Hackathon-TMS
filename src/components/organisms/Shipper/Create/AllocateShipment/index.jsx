import { Button, FormControl, FormLabel, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text, useDisclosure } from '@chakra-ui/react'
import React from 'react'
import SelectDropdown from '../../../../atoms/SelectDropdown'
import useForm from './useForm'


function AllocateShipment() {
    const { isOpen, onOpen, onClose } = useDisclosure()

    const initialRef = React.useRef(null)
    const finalRef = React.useRef(null)

    const { truckType, listDriver, selectTruck, handleChangeTruck, selectDriver, handleChangeDriver, onSubmit} = useForm()

    return (
        <>
            <Button onClick={onOpen}>Allocate Shipment</Button>
            <Modal
                initialFocusRef={initialRef}
                finalFocusRef={finalRef}
                isOpen={isOpen}
                onClose={onClose}
            >
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Allocate Shipment</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody pb={6}>
                        <FormControl mt={4}>
                            <FormLabel>Truck</FormLabel>
                            <SelectDropdown
                                multi
                                name="truck"
                                searchable
                                options={truckType}
                            />
                        </FormControl>
                        <FormControl mt={4}>
                            <FormLabel>Driver</FormLabel>
                            <SelectDropdown
                                multi
                                name="driver"
                                searchable
                                options={listDriver}
                            />
                        </FormControl>

                    </ModalBody>

                    <ModalFooter>
                        <Button colorScheme='linkedin' mr={3}>
                            Save
                        </Button>
                        <Button onClick={onClose}>Cancel</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}

export default AllocateShipment