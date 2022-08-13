import { Button, FormControl, FormLabel, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text, useDisclosure } from '@chakra-ui/react'
import React from 'react'
import SelectDropdown from '../../../../atoms/SelectDropdown'
import useForm from './useForm'

function ShipmentStatus() {
    const { isOpen, onOpen, onClose } = useDisclosure()

    const initialRef = React.useRef(null)
    const finalRef = React.useRef(null)

    const { shipmentStatus, selectStatus, handleChangeStatus, onSubmit } = useForm()

    return (
        <>
            <Button onClick={onOpen}>Shipment Status</Button>
            <Modal
                initialFocusRef={initialRef}
                finalFocusRef={finalRef}
                isOpen={isOpen}
                onClose={onClose}
            >
                <ModalOverlay />
                <ModalContent>
                    <form>
                        <ModalHeader>Shipment Status</ModalHeader>
                        <ModalCloseButton />
                        <ModalBody pb={6}>
                            <FormControl mt={4}>
                                <FormLabel>Status</FormLabel>
                                <SelectDropdown
                                    multi
                                    name="status"
                                    searchable
                                    options={shipmentStatus}
                                    value={selectStatus}
                                    onChange={handleChangeStatus}
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

export default ShipmentStatus