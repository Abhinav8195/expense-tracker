import React, { useContext, useEffect } from 'react';
import { Flex, Heading, Button, useDisclosure } from '@chakra-ui/react';
import Summary from '../summery/Summary';
import Expense from '../expenseView/Expense';
import { GlobalContext } from '../../context/Index';
const Main = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const {
      totalExpense,
      allTransactions,
      setTotalExpense,
      totalIncome,
      setTotalIncome,
    } = useContext(GlobalContext);
  
    useEffect(() => {
      let income = 0;
      let expense = 0;
  
      allTransactions.forEach((item) => {
        item.type === "income"
          ? (income = income + parseFloat(item.amount))
          : (expense = expense + parseFloat(item.amount));
      });
  
      setTotalExpense(expense);
      setTotalIncome(income);
    }, [allTransactions]);
  
    return (
      <Flex textAlign={"center"} flexDirection={"column"} pr={"5"} pl={"5"}>
        <Flex alignItems={"center"} justifyContent={"space-between"} mt={"12"}>
          <Heading
            color={"blue.400"}
            display={["none", "block", "block", "block", "block"]}
          >
            Expense Tracker
          </Heading>
          <Flex alignItems={"center"}>
            <Button onClick={onOpen} bg={"blue.300"} color={"black"} ml={"4"}>
              Add New Transaction
            </Button>
          </Flex>
        </Flex>
        <Summary
          totalExpense={totalExpense}
          totalIncome={totalIncome}
          isOpen={isOpen}
          onClose={onClose}
        />
  
        <Flex
          w="full"
          alignItems={"flex-start"}
          justifyContent={"space-evenly"}
          flexDirection={["column", "column", "column", "row", "row"]}
        >
          <Expense
            data={allTransactions.filter((item) => item.type === "expense")}
            type={"expense"}
          />
          <Expense
            data={allTransactions.filter((item) => item.type === "income")}
            type={"income"}
          />
        </Flex>
      </Flex>
    );
  }

export default Main;