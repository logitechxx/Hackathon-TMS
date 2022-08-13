import { Button, FormControl, FormLabel, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text, useDisclosure } from '@chakra-ui/react'
import React from 'react'
import SelectDropdown from '../../atoms/SelectDropdown'

function CreateShipper() {
    const { isOpen, onOpen, onClose } = useDisclosure()

    const initialRef = React.useRef(null)
    const finalRef = React.useRef(null)

    const districts = [
        { value: 'cengkareng', label: 'Cengkareng' },
        { value: 'grogol-petamburan', label: 'Grogol Petamburan' },
        { value: 'kalideres', label: 'Kalideres' },
        { value: 'kebon-jeruk', label: 'Kebon Jeruk' },
        { value: 'kembangan', label: 'Kembangan' },
        { value: 'palmerah', label: 'Palmerah' },
        { value: 'taman-sari', label: 'Taman Sari' },
        { value: 'tambora', label: 'Tambora' },
        { value: 'cempaka-putih', label: 'Cempaka Putih' },
        { value: 'gambir', label: 'Gambir' },
        { value: 'johar-baru', label: 'Johar Baru' },
        { value: 'kemayoran', label: 'Kemayoran' },
        { value: 'menteng', label: 'Menteng' },
        { value: 'sawah-besar', label: 'Sawah Besar' },
        { value: 'senen', label: 'Senen' },
        { value: 'tanah-abang', label: 'Tanah Abang' }
    ]

    return (
        <>
            <Button onClick={onOpen}>Add Shipment</Button>
            <Modal
                initialFocusRef={initialRef}
                finalFocusRef={finalRef}
                isOpen={isOpen}
                onClose={onClose}
            >
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Add Shipment</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody pb={6}>
                        <FormControl mt={4}>
                            <FormLabel>Origin</FormLabel>
                            <SelectDropdown
                                multi
                                name="origin"
                                searchable
                                options={districts}
                            />
                        </FormControl>

                        <FormControl mt={4}>
                            <FormLabel>Destination</FormLabel>
                            <SelectDropdown
                                multi
                                name="destination"
                                searchable
                                options={districts}
                            />
                        </FormControl>

                        <FormControl mt={4}>
                            <FormLabel> Loading Date</FormLabel>
                            <Input
                                placeholder="Select Date"
                                size="md"
                                type="datetime-local"
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

export default CreateShipper