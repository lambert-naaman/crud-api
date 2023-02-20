import {v4 as uuidv4 } from 'uuid';

let users = [
  
];

export const patchUser = (req, res) => {
  const { id } = req.params
  const { firstname, age} = req.body;
  const  user = users.find((user) => user.id == id)

  if(firstname) user.firstname = firstname; 
  if(age) user.age = age

  res.send(`user with the id ${id} successfully updated`)
}

export const deletUser = (req, res) => {
  const {id} = req.params
  users = users.filter((user) => user.id != id)
  res.send(`user with the id ${id} deleted the database`)
}

export const addUser = (req, res) => {
  let user = req.body
  users.push({...user, id: uuidv4() });
  res.send(`user with the firstname: ${user.firstname} added to the database`)

}

export const getUsers = (req, res) =>{
  const {id} = req.params
  const userFound = users.find((user) => user.id == id);
  res.send(userFound)
}

export const getUser = (req, res)=> {
    
  res.send(users)
}