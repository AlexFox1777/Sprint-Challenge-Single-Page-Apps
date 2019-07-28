import React, { useEffect, useState } from 'react';
import axios from "axios";
import LocationCard from "./LocationCard";
import Grid from '@material-ui/core/Grid';
import {makeStyles} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    root: {
        width: '90%',
        margin: 'auto',
        padding: 30,
    },
}));

export default function LocationsList() {
    const [locations, setLocations] = useState([]);
    const classes = useStyles();

    useEffect(() => {
    axios.get('https://rickandmortyapi.com/api/location/')
        .then(response => {
            const allLocations = response.data.results;
            console.log("Response Location: ", response);
            console.log("All Locations: ", allLocations);
            setLocations(allLocations);
        })

}, []);
    return (
        <div  className={classes.root}>
            <Grid container spacing={6}>
                {locations.map(location =>{
                    return <LocationCard name={location.name} type={location.type} dimension={location.dimension}/>
                })}
            </Grid>
        </div>
    )
}
