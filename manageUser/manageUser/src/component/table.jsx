import React, { useState } from 'react'
import {
    Table,
    Thead,
    Tbody,
    Button,
    Tr,
    Th,
    Td,
    
    TableContainer,
  } from '@chakra-ui/react'

  import { Input,Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalFooter } from "@chakra-ui/react";


 

  const data = [
    {
        id: 1,
        name: 'Beetlejuice',
        email: 's@gmail.com',
        role:'Student',
    },
    {
        id: 2,
        name: 'Beetlejuice1',
        email: 'b@gmail.com',
        role:'Admin',
    },
    {
      id: 3,
      name: 'Beetlejuice12',
      email: 'c@gmail.com',
      role:'Student',
  },
  {
    id: 4,
    name: 'Beetlejuice13',
    email: 'd@gmail.com',
    role:'Student',
},
{
  id: 5,
  name: 'Beetlejuice14',
  email: 'e@gmail.com',
  role:'Student',
},
{
  id: 6,
  name: 'Beetlejuice15',
  email: 'f@gmail.com',
  role:'Admin',
},
{
  id: 7,
  name: 'Beetlejuice16',
  email: 'g@gmail.com',
  role:'Instructor',
},
{
  id: 8,
  name: 'Beetlejuice17',
  email: 'h@gmail.com',
  role:'Instructor',
},
{
  id: 9,
  name: 'Beetlejuice18',
  email: 'i@gmail.com',
  role:'Instructor',
},
{
  id: 10,
  name: 'Beetlejuice19',
  email: 'j@gmail.com',
  role:'Admin',
},
{
  id: 11,
  name: 'Beetlejuice10',
  email: 'k@gmail.com',
  role:'Student',
},
    
]

  function ManageTable() {

    const [dataUser, setDataUser] = useState({});
    const [isOpen, setIsOpen] = useState(false);
    const [initialData, setInitialData] = useState(data);

    const handleEdit = (e)=>{

        setIsOpen(true)
        // console.log(e)
        setDataUser(e)

    }
    const handleChangeData = (e)=>{
        const {name,value} = e.target;
        setDataUser({...dataUser,[name]:value})
        console.log(dataUser)
    }

    const handleEditeDataChange = () =>{

        const newData = data.map(item => {
            if (item.id === dataUser.id) {
              return dataUser;
            } else {
              return item;
            }
          });
        //   console.log(newData); 
          setInitialData(newData);
          setIsOpen(false)

        };
    
   

  

    

  return (
    <>
    <h4 style={{fontSize:"30px", marginLeft:"10px"}}>Manage User</h4>
    <TableContainer>
  <Table variant='simple'>
  
    <Thead>
      <Tr>
        <Th>Name</Th>
        <Th>Email</Th>
        <Th>Role</Th>
      </Tr>
    </Thead>
    <Tbody>
        {initialData.map((el)=>(
            <Tr key={el.id}>
            <Td>{el.name}</Td>
            <Td>{el.email}</Td>
            <Td ><Button onClick={() => handleEdit (el)}>{el.role}</Button></Td>
          </Tr>

        ))}
      
     
    </Tbody>
   
  </Table>
</TableContainer>

<Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
  <ModalOverlay />
  <ModalContent>
    <ModalHeader>Edit User Profile</ModalHeader>
    <ModalBody>
        <div style={{display:"flex", flexDirection:"column" ,gap:"10px"}}>
           <div style={{display:"flex" , gap:"10px"}}><lable>Name</lable> <Input type="text" value={dataUser.name} name="name" onChange={handleChangeData}/><Button onClick={handleEditeDataChange}>Save</Button></div>
           <div style={{display:"flex" , gap:"10px"}}><lable>Email</lable> <Input type="text" value={dataUser.email} /> </div>
           <div style={{display:"flex" , gap:"10px"}}><lable>Groups</lable> <Button>Student x</Button><Button>Instructor +</Button></div>
        </div>
      
    </ModalBody>
    <ModalFooter>
      <Button onClick={() => setIsOpen(false)}>Close</Button>
    </ModalFooter>
  </ModalContent>
</Modal>

</>




  )
}


export default ManageTable;
