import React, { useState } from 'react';
import data from '../../api/data.json';

import { useStyles } from './ParksStyles.js';

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';



const styles = useStyles;

const parkTiles =
    <div className={styles.root}> 
    <Grid container spacing={2}>
       { 
           data.map(park => {
                return (   
                   <Grid item xs={4} sm={3}>
                        <Paper className={styles.paper}><p><strong>{ park.fullName }</strong></p></Paper>
                    </Grid>
            )
        })
       }
    </Grid>
    </div>;

// const parkGrid = <div className={styles.root}>
// <Grid container spacing={2}>
//   <Grid item xs={4} sm={3}>
//     <Paper className={styles.paper}><p><strong>{ park.fullName }</strong></p></Paper>
//   </Grid>
//   <Grid item xs={4} sm={3}>
//     <Paper className={styles.paper}>xs=6 sm=3</Paper>
//   </Grid>
//   <Grid item xs={4} sm={3}>
//     <Paper className={styles.paper}>xs=6 sm=3</Paper>
//   </Grid>
//   <Grid item xs={4} sm={3}>
//     <Paper className={styles.paper}>xs=6 sm=3</Paper>
//   </Grid>
// </Grid>
// </div>;


const Parks = () => {

    return (
        <div>
            <Container>
                <div>{ parkTiles }</div>
            </Container>
        </div>
        
    )
}


export default Parks;