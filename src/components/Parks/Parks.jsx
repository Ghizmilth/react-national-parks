import React, { useState } from 'react';
import data from '../../api/data.json';
import { useStyles } from './ParksStyles.js';
import { Box, Grid, Container, Card, CardActionArea, CardActions, CardContent, CardMedia, Button, IconButton, Typography } from '@material-ui/core';
import StarIcon from '@material-ui/icons/Star';
import NotesOutlinedIcon from '@material-ui/icons/NotesOutlined';
import ImageOutlinedIcon from '@material-ui/icons/ImageOutlined';



// Allows us to use the style sheet from the ParksStyle.js file
const styles = useStyles;

// Renders a card for each park
const parkTiles =
    <div className={styles.root}> 
        <Grid container spacing={2}>
            { 
                data.map(park => {
                    return (   
                    <Grid item xs={4} sm={3}>
                       <Card>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    alt="Contemplative Reptile"
                                    height="140"
                                    image= { park.images[0].url }
                                    title= { park.fullName }
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h6" component="h3">
                                        { park.fullName }
                                    </Typography>
                                    <Grid container>
                                        <Grid item xs={6}>
                                            <Typography variant="body2" color="textSecondary" component="p">
                                                { park.addresses[0].city + ', ' + park.addresses[0].stateCode }
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={6}>
                                            <Box 
                                            display="flex"
                                            flexDirection="row-reverse"
                                            >
                                                <IconButton aria-label="add to favorites">
                                                    <StarIcon />
                                                </IconButton>
                                            </Box>
                                        </Grid>
                                   </Grid>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button size="small" color="primary">
                                    <NotesOutlinedIcon />
                                </Button>
                                <Button size="small" color="primary">
                                    <ImageOutlinedIcon />
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
           { parkTiles }
        </div>
        
    )
}


export default Parks;