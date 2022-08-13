import { Button, FormControl, FormLabel, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text, useDisclosure } from '@chakra-ui/react'
import React from 'react'
import SelectDropdown from '../../atoms/SelectDropdown'


function ShipmentStatus() {
    const { isOpen, onOpen, onClose } = useDisclosure()

    const initialRef = React.useRef(null)
    const finalRef = React.useRef(null)

    const shipmentStatus = [
        { value: 'allocated', label: 'Allocated' },
        { value: 'ongoing-origin', label: 'Ongoing to Origin' },
        { value: 'origin', label: 'At Origin' },
        { value: 'ongoing-destination', label: 'Ongoing to Destination' },
        { value: 'destination', label: 'At Destination' },
        { value: 'completed', label: 'Completed' },
    ]

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

export default ShipmentStatus