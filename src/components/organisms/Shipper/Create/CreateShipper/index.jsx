import { Button, FormControl, FormLabel, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text, useDisclosure } from '@chakra-ui/react'
import React from 'react'
import SelectDropdown from '../../../../atoms/SelectDropdown'
import useForm from './useForm'

function CreateShipper() {
    const { isOpen, onOpen, onClose } = useDisclosure()

    const initialRef = React.useRef(null)
    const finalRef = React.useRef(null)

    const { values, districts, handleChange, selectOrigin, handleChangeOrigin, selectDestination,handleChangeDestination, onSubmit } = useForm()

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
                                name="loading"
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