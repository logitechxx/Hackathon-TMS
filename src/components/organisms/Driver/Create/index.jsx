import React from 'react';
import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from '@chakra-ui/react';
import useForm from './useForm';

function CreateDriver() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);

  const {
    values,
    idCard,
    driverLicense,
    handleChangeIdCard,
    handleChangeDriverLicense,
    onSubmit,
    handleChange,
    mutateAddCategory,
  } = useForm();

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
          <ModalHeader>Add New Driver</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Driver Name</FormLabel>
              <Input ref={initialRef} placeholder="Driver Name" name="name" />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Phone Number</FormLabel>
              <Input ref={initialRef} placeholder="+62xxxxxxxx" name="phone" />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel> ID Card</FormLabel>
              <Input type="file" placeholder="ID Card" name="id-file" />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel> Driver License</FormLabel>
              <Input
                type="file"
                placeholder="Driver License"
                name="license-file"
              />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="facebook" mr={3}>
              Save
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default CreateDriver;
