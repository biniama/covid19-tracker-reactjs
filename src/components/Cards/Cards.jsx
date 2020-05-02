import React from 'react';
import { Grid } from '@material-ui/core';
import styles from './Cards.module.css';
import CoronaCard from './CoronaCard';

const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
    if (!confirmed) {
        return 'Loading ...';
    }

    return (
        <div className={styles.container}>
            <Grid container spacing={3} justify='center'>
                <CoronaCard
                    text='Infected'
                    value={confirmed.value}
                    lastUpdate={lastUpdate}
                    style={styles.infected}
                />
                <CoronaCard
                    text='Recovered'
                    value={recovered.value}
                    lastUpdate={lastUpdate}
                    style={styles.recovered}
                />
                <CoronaCard
                    text='Deaths'
                    value={deaths.value}
                    lastUpdate={lastUpdate}
                    style={styles.deaths}
                />
            </Grid>
        </div>
    );
}

export default Cards;