import { Table, TableBody, TableCell, TableContainer, TableRow } from '@mui/material'
import axios from 'axios'
import React, { useState } from 'react'

const Api = () => {
    var[user,setuser]=useState([])

    axios.get("https://jsonplaceholder.typicode.com/users")
    .then((response)=>{
        console.log(response.data)
            setuser(response.data)
        })
      return (
    <div>
<br /><br />
    <TableContainer>
        <Table>
            <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>username</TableCell>
            <TableCell>city</TableCell>
            </TableRow>

        <TableBody>
            {user.map((val)=>{
                return(
            <TableRow>
            <TableCell>{val.name}</TableCell>
            <TableCell>{val.username}</TableCell>
            <TableCell>{val.address.city}</TableCell>

            </TableRow>
            )
            })}
        </TableBody>
        </Table>
    </TableContainer>

    </div>
  )
}

export default Api