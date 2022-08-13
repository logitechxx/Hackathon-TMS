import { Button, FormControl, FormLabel, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text, useDisclosure } from '@chakra-ui/react'
import React from 'react'

function DetailTruck({label}) {
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
            <Button onClick={onOpen}>{label}</Button>
            <Modal
              initialFocusRef={initialRef}
              finalFocusRef={finalRef}
              isOpen={isOpen}
              onClose={onClose}
            >
              <ModalOverlay />
              <ModalContent>
                <ModalHeader>Detail Unit</ModalHeader>
                <ModalCloseButton />
                <ModalBody pb={6}>
                 
                </ModalBody>
              </ModalContent>
            </Modal>
          </>
        )
}

export default DetailTruck