import React from 'react'
import { GridColumn, GridRow, Table, TableBody, TableCell, TableHeader, TableRow } from 'semantic-ui-react'

export default function JobPositionList() {
  return (
    <div>
      <Table celled>
        <Table.Row>
          <Table.Header>
            <Table.HeaderCell>Pozisyon</Table.HeaderCell>
          </Table.Header>
        </Table.Row>
          
          <Table.Body>
            <Table.Row>
              <Table.Cell>Cell</Table.Cell>
            </Table.Row>
          </Table.Body>
      </Table>
    </div>
  )
}
