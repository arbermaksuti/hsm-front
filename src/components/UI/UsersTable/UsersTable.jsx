import React, { useEffect, useState } from 'react'
import "./UsersTable.scss"
import { useNavigate, useLocation } from 'react-router-dom'
import Table from 'react-data-table-component'
import { allUsersData } from "./allUsersData"
import { patientsData } from "./patientsData"
import { doctorsData } from "./doctorsData"
import { adminsData } from "./adminsData"
import Button from '../Button/Button';

const UsersTable = ({ usersType }) => {
    const navigate = useNavigate();
    let location = useLocation().pathname;
    const [data, setData] = useState()
    const columns = [
        {
            name: 'Name',
            selector: row => row.name,
            sortable: true
        },
        {
            name: 'Surname',
            selector: row => row.surname,
            sortable: true
        },
        {
            name: 'Email',
            selector: row => row.email,
            minWidth: "250px"
        },
        {
            name: 'Role',
            selector: row => row.role,
            sortable: true
        },
        {
            cell: row => <Button style={{ padding: 10 }} onClick={() => navigate(`${location}/${row.id}`)} className="blueLight">Details</Button>,
            button: true
        }
    ];

    useEffect(() => {
        if (usersType.toLowerCase() === "allusers") {
            setData(allUsersData)
        }
        else if (usersType.toLowerCase() === "patients") {
            setData(patientsData)
        }
        else if (usersType.toLowerCase() === "doctors") {
            setData(doctorsData)
        } else if (usersType.toLowerCase() === "admins") {
            setData(adminsData)
        }
        else {
            setData()
        }
    }, [usersType])

    return (
        <div className='usersTable borderedDiv'>
            <Table
                columns={columns}
                data={data}
            />
        </div>
    )
}

export default UsersTable
