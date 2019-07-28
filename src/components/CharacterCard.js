import React from 'react'
import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import {red} from '@material-ui/core/colors';
import SvgIcon from '@material-ui/core/SvgIcon';
import Grid from "@material-ui/core/Grid";
import Paper from '@material-ui/core/Paper';
import Route from "react-router-dom/es/Route";
import EpisodeList from "./EpisodeList";
import Link from "@material-ui/core/Link";

const useStyles = makeStyles(theme => ({
    card: {
        maxWidth: '90%',
        margin: 'auto',
    },
    bodyCard: {
        marginTop: 12,
    },
    icon: {
        margin: theme.spacing(2),
    },
    iconHover: {
        margin: theme.spacing(2),
        '&:hover': {
            color: red[800],
        },
    },
}));


export default function CharacterCard({image, name, species, status, location, origin, id, props}) {
    const classes = useStyles();
    return (
        <Grid item xs={12} sm={6}>
            <Card className={classes.card}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        alt="Contemplative Reptile"
                        height="auto"
                        image={image}
                        title="Contemplative Reptile"
                    />
                    <CardContent>
                        <Typography variant="h5" component="h2">
                            {name}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {species} {status}
                        </Typography>
                        <Typography variant="body2" component="p" className={classes.bodyCard}>
                            Location: {location}
                        </Typography>
                        <Typography variant="body2" component="p">
                            Origin: {origin}
                        </Typography>
                    </CardContent>
                </CardActionArea>

                    <Paper>
                        <SvgIcon>
                            <path fill="#000000"
                                  d="M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,14C16.42,14 20,15.79 20,18V20H4V18C4,15.79 7.58,14 12,14Z"/>
                        </SvgIcon>
                        <a href="#" onClick={() => props.history.push(`/episodes/${id}`)} >Episodes</a>

                    </Paper>
            </Card>
        </Grid>
    );
}
