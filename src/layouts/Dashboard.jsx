import React from 'react'
import { Grid, GridColumn} from 'semantic-ui-react'
import JobSeekerList from '../pages/JobSeekerList'
import Categories from './Categories'

export default function Dashboard() {
    return (
        <div>
            <Grid>
                <Grid.Row>
                    <GridColumn width={4}>
                        <Categories/>
                    </GridColumn>
                    <GridColumn width={12}>
                        <JobSeekerList/>
                    </GridColumn>
                </Grid.Row>
            </Grid>
        </div>
    )
}
