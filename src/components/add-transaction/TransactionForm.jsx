import React, { useContext } from 'react';
import {
  Modal,
  ModalOverlay,
  Radio,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  FormControl,
  Input,
  FormLabel,
  RadioGroup,
  ModalFooter,
  Button,
} from '@chakra-ui/react';
import { GlobalContext } from '../../context/Index';

const TransactionForm = ({ onClose, isOpen }) => {
  const { formData, setFormData, value, setValue, handleFormSubmit } = useContext(GlobalContext);

  function handleFormChange(event) {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  }

  function handleRadioChange(value) {
    setFormData({
      ...formData,
      type: value,
    });
    setValue(value); // Update the value state for the RadioGroup
  }

  function handleSubmit(event) {
    event.preventDefault();
    handleFormSubmit(formData);
    onClose(); // Close the modal after submitting the form
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <form onSubmit={handleSubmit}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add New Transaction</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl>
              <FormLabel>Enter Description</FormLabel>
              <Input
                placeholder="Enter Transaction description"
                name="description"
                type="text"
                onChange={handleFormChange}
                value={formData.description}
              />
            </FormControl>
            <FormControl>
              <FormLabel>Enter Amount</FormLabel>
              <Input
                placeholder="Enter Transaction amount"
                name="amount"
                type="number"
                onChange={handleFormChange}
                value={formData.amount}
              />
            </FormControl>
            <RadioGroup mt="5" value={formData.type} onChange={handleRadioChange}>
              <Radio value="income" colorScheme="blue">
                Income
              </Radio>
              <Radio value="expense" colorScheme="red">
                Expense
              </Radio>
            </RadioGroup>
          </ModalBody>
          <ModalFooter>
            <Button mr="4" onClick={onClose}>
              Cancel
            </Button>
            <Button type="submit">
              Add
            </Button>
          </ModalFooter>
        </ModalContent>
      </form>
    </Modal>
  );
};

export default TransactionForm;
