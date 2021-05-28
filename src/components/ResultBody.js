import React from 'react';
import Card from './card'
import { makeStyles } from '@material-ui/core'
import Grid from '@material-ui/core/Grid';
import Checkbox from './checkbox'
import Pagination from '@material-ui/lab/Pagination';

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
    const [page, setPage] = React.useState(1);
    const handleChange = (event, value) => {
        setPage(value);
    };

    let rowsPerPage = 10;

    function numberOfPages(n_results, rowsPerPage){
        console.log(n_results%rowsPerPage)
        let result =  (n_results%rowsPerPage) > 0 ? n_results/rowsPerPage + 1 : n_results/rowsPerPage
        return Math.trunc(result)
    }
  return (
    <Grid className={classes.root} container >
        <Grid item className={classes.Checkbox}>
            <Checkbox />
        </Grid>
    { 
    searchResult.slice((page-1) * rowsPerPage, (page-1) * rowsPerPage + rowsPerPage).map((data,index) => {
        if (data) {
            return (
                <Grid item className={classes.item}>
                    <Card  filename={data._source.filename} content={data._source.content}/>
                </Grid>
            )
    	 }
    	 return null
    }) }
        {/* PAGINATION SUPPORT */}
            { searchResult.length/rowsPerPage > 1 ? 
                (<Grid item className={classes.item}>
                    <Pagination count={numberOfPages(searchResult.length, rowsPerPage)} page={page} onChange={handleChange} />
                </Grid>)
                :
                ""
            }

    </Grid>
  );
}

export default ResultBody;
