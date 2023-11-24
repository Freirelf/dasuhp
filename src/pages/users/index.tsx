import { Header } from "@/components/Header";
import { Pagination } from "@/components/Pagination";
import { Sidebar } from "@/components/Sidebar";
import { Box, Button, Checkbox, Flex, Heading, Icon, Table, Tbody, Td, Th, Thead, Tr, Text, useBreakpointValue } from "@chakra-ui/react";
import Link from "next/link";
import { RiAddLine, RiPencilLine } from "react-icons/ri";

export default function UserList(){
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  })

  return (
    <Box>
      <Header />
      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6"> 
        <Sidebar />

        <Box flex="1" borderRadius={8} bg="gray.800" p="8"> 
          <Flex mb="8" justify="space-between" alignItems="center"> 
            <Heading size="lg" fontWeight="normal"> Usuários</Heading>
            <Link legacyBehavior href="/users/create" passHref>
              <Button
                as="a" 
                size="sm"
                fontSize="sm"
                colorScheme="teal"
                cursor="pointer"
                leftIcon={<Icon
                as={RiAddLine}
                fontSize={20}/>}>
                Criar novo
              </Button>
            </Link>
          </Flex>

          <Table colorScheme="whiteAlpha">
            <Thead>
              <Tr>
                <Th px={["4", "6"]} color="gray.300" width="8">
                  <Checkbox colorScheme="teal"/>
                </Th>
                <Th>Usuário</Th>
                { isWideVersion && <Th>Data de cadastro</Th> }
                <Th width="8"></Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td px={["4", "6"]}>
                  <Checkbox colorScheme="teal"/>
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight="bold">Lucas Freire</Text>
                    <Text fontSize="sm" color="gray.500">l.casfreirelopes@hotmail.com</Text>
                  </Box>
                </Td>
                { isWideVersion && <Td>14 junho, 2023</Td>}
                <Td>
                  <Link legacyBehavior href="#">
                    <Button
                      as="a"
                      size="sm"
                      fontSize="sm"
                      colorScheme="pink"
                      cursor="pointer"                   
                      leftIcon={<Icon 
                      as={RiPencilLine} fontSize={16}/>}
                      >
                      {isWideVersion && 'Editar'}
                    </Button>
                  </Link>
                </Td>
              </Tr>
            </Tbody>
          </Table>

          <Pagination />
        </Box>
      </Flex>
    </Box>
  )
}