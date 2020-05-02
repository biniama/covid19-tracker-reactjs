import React from 'react';
import { Grid, Card, CardContent, Typography } from '@material-ui/core';
import cx from 'classnames';
import styles from './Cards.module.css';
import CountUp from 'react-countup';

const CoronaCard = ({ text, value, lastUpdate, style }) => {
    return (<Grid item component={Card} xs={12} md={3} className={cx(styles.card, style)}>
        <CardContent>
            <Typography color='textSecondary' gutterBottom>{text}</Typography>
            <Typography variant='h5'>
                <CountUp start={0} end={value} duration={1.5} separator=',' />
            </Typography>
            <Typography color='textSecondary'>{new Date(lastUpdate).toDateString()}</Typography>
            <Typography variant='body2'>Number of active cases of COVID-19</Typography>
        </CardContent>
    </Grid>);
}

export default CoronaCard;