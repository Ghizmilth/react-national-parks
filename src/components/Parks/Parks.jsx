import React, { useState } from 'react';
import data from '../../api/data.json';

import { useStyles } from './ParksStyles.js';

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';




const styles = useStyles;

const parkTiles =
    <div className={styles.root}> 
        <Grid container spacing={2}>
            { 
                data.map(park => {
                    return (   
                    <Grid item xs={4} sm={3}>
                       <Card className={styles.cards}>
                            <CardActionArea>
                                <CardMedia
                                component="img"
                                alt="Contemplative Reptile"
                                height="140"
                                image= { park.images[0].url }
                                title= { park.fullName }
                                />
                                <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    { park.fullName }
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    { park.description }
                                </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button size="small" color="primary">
                                Share
                                </Button>
                                <Button size="small" color="primary">
                                Learn More
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                    )
                })
            }
            </Grid>
    </div>;


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