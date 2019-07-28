import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Grid from "@material-ui/core/Grid";
import {makeStyles} from "@material-ui/core";
import EpisodeCard from "./EpisodeCard";

const useStyles = makeStyles(theme => ({
    root: {
        width: '90%',
        margin: 'auto',
        padding: 30,
    },
}));

export default function EpisodeList(props) {
    const id = props.match.params.characterId;
    const [episodes, setEpisodes] = useState([]);
    const classes = useStyles();
console.log("id - ", id)
    useEffect(() => {

        axios.get(`https://rickandmortyapi.com/api/character/${id || 1}`)
            .then(response => {
                const allEpisodes = response.data.episode;
                console.log("Response: ", response);
                console.log("All Episodes: ", allEpisodes);
                setEpisodes(allEpisodes);
            })

    }, [id]);
    console.log("Check state - ", episodes);
    return (
        <div  className={classes.root}>
            <Grid container spacing={3} justify="center">
                {episodes.map(episode =>{
                    console.log("id: ",{id});
                    return <EpisodeCard episode={episode}/>
                })}

            </Grid>
        </div>
    )

}
