import React from 'react'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles(theme => ({
    card: {
        maxWidth: 200,
    },
}));


export default function EpisodeCard({episode}) {
    const classes = useStyles();
    return (
        <Grid item xs={12} >
            <Card >
                <CardActionArea>
                    <CardContent>
                        <Typography variant="h5" component="h2">
                            <p>{episode}</p>
                        </Typography>
                        <Typography variant="body2" component="p">
                         {/*{episodes.map( item =>{*/}
                         {/*    {item}*/}
                         {/*})}*/}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>

                </CardActions>
            </Card>
        </Grid>
    )
}
