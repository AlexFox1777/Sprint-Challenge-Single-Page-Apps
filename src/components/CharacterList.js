import React, {useEffect, useState} from 'react';
import axios from 'axios';
import CharacterCard from "./CharacterCard";
import Grid from "@material-ui/core/Grid";
import {makeStyles} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    root: {
        width: '90%',
        margin: 'auto',
        padding: 30,
    },
}));

export default function CharacterList(props) {
    // TODO: Add useState to track data from useEffect
    const [characters, setCharacters] = useState([]);
    const classes = useStyles();
    // const [character, setCharacter] = useEffect({name : "", species: "", status : "", origin : "", location: "", episode: "", image: ""});
    useEffect(() => {
        // TODO: Add AJAX/API Request here - must run in `useEffect`
        //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
        axios.get('https://rickandmortyapi.com/api/character/')
            .then(response => {
                const allCharacters = response.data.results;
                console.log("Response: ", response);
                console.log("All: ", allCharacters);
                setCharacters(allCharacters);
            })

    }, []);
    console.log("Check state - ", characters);
    return (
        <div  className={classes.root}>
            <Grid container spacing={3} justify="center">
            {characters.map(person =>{
                console.log('image = ', person.image,
                    'name=',person.name,
                    'species=',person.species,
                    'status=',person.status,
                    'location=',person.location.name,
                    'origin=',person.origin.name,
                    'episodes=',person.id);
               return <CharacterCard key={person.id} image={person.image}
                                     name={person.name}
                                     species={person.species}
                                     status={person.status}
                                     location={person.location.name}
                                     origin={person.origin.name}
                                     id={person.id}
                                    props={props}/>
            })}

            </Grid>
        </div>
    )

}
