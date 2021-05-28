import React from 'react';
import Card from './card'
import { makeStyles } from '@material-ui/core'
import Grid from '@material-ui/core/Grid';
import Checkbox from './checkbox'

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'grid',
        gridTemplateColumns: '1fr 3fr',
        gridAutoFlow: 'column',
        gridAutoRows: 'max-content'
    },
    item: {
        padding: theme.spacing(1),
        gridColumn: '2 / 3',
        justifySelf: 'stretch'
    },

    Checkbox:{
        padding: theme.spacing(1)
    }
  }));

const ResultBody = ({searchResult=[]}) => {
    const classes = useStyles();
  return (
    <Grid className={classes.root} container >
        <Grid item className={classes.Checkbox}>
            <Checkbox />
        </Grid>
    { searchResult.map((data,index) => {
        if (data) {
        //   return (
        //     <div key={data.name}>
        //       <h1>{data._source.content}</h1>
	    // </div>	

    	//    )	
        return (
            <Grid item className={classes.item}>
                <Card  filename={data._source.filename} content={data._source.content}/>
            </Grid>
        )
    	 }
    	 return null
    }) }
    </Grid>
  );
}

export default ResultBody;
