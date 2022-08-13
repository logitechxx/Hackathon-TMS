import { Box, Button, Flex, FormControl, FormLabel, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text, useDisclosure } from '@chakra-ui/react'
import React from 'react'

function DetailTruck({label}) {
        const { isOpen, onOpen, onClose } = useDisclosure()
      
        const initialRef = React.useRef(null)
        const finalRef = React.useRef(null)


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
                 <Flex mb="4" justifyContent={"space-between"}>
                  <Text fontSize={"17"} fontWeight="bold">License Number</Text>
                  <Text> B 2448 IU</Text>
                 </Flex>
                 <Flex mb="4" justifyContent={"space-between"}>
                  <Text fontSize={"17"} fontWeight="bold">Truck Type</Text>
                  <Text> B 2448 IU</Text>
                 </Flex>
                 <Flex mb="4" justifyContent={"space-between"}>
                  <Text fontSize={"17"} fontWeight="bold">Plate Type</Text>
                  <Text> B 2448 IU</Text>
                 </Flex>
                 <Flex mb="4" justifyContent={"space-between"}>
                  <Text fontSize={"17"} fontWeight="bold">Production Year</Text>
                  <Text> B 2448 IU</Text>
                 </Flex>
                 <Flex mb="4" justifyContent={"space-between"}>
                  <Text fontSize={"17"} fontWeight="bold">Status</Text>
                  <Text> B 2448 IU</Text>
                 </Flex>
                </ModalBody>
              </ModalContent>
            </Modal>
          </>
        )
}

export default DetailTruck