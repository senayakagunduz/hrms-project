import React from 'react'
import { Table, TableBody } from 'semantic-ui-react'
import { useState, useEffect } from 'react';
import EmployerService from '../services/employerService';

export default function EmployerList() {
    const [employers, setEmployers] = useState([]);

    useEffect(() => {
        let employerService = new EmployerService();
        employerService.getEmployers().then((result.data.data));
    }, []);

    return (
        <div>
            <Table celled>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Firma</Table.HeaderCell>
                        <Table.HeaderCell>Web Sitesi </Table.HeaderCell>
                        <Table.HeaderCell> Telefon Numarası </Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>{
                    employers.map((employer) => (
                        <Table.Row key={employer.id}>
                            <Table.Cell>Cell</Table.Cell>
                            <Table.Cell>Cell</Table.Cell>
                            <Table.Cell>Cell</Table.Cell>
                        </Table.Row>
                    ))}
                </Table.Body>
            </Table>
        </div>
    )
}
