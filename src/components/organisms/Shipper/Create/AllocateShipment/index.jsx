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
                    <form>
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
                                    value={selectTruck}
                                    onChange={handleChangeTruck}
                                />
                            </FormControl>
                            <FormControl mt={4}>
                                <FormLabel>Driver</FormLabel>
                                <SelectDropdown
                                    multi
                                    name="driver"
                                    searchable
                                    options={listDriver}
                                    value={selectDriver}
                                    onChange={handleChangeDriver}
                                />
                            </FormControl>

                        </ModalBody>

                        <ModalFooter>
                            <Button colorScheme='linkedin' mr={3}>
                                Save
                            </Button>
                            <Button onClick={onClose}>Cancel</Button>
                        </ModalFooter>
                    </form>
                </ModalContent>
            </Modal>
        </>
    )
}

export default AllocateShipment