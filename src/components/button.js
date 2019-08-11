import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
    height:50,
    width:150
  },
  input: {
    display: 'none',
  },
}));


export default function OutlinedButtons(props) {
    const classes = useStyles();
    
    function submit(){
      var request = require('request');
      var program = {
          script : `a=input('')\nprint(a)`,
          language: "python3",
          stdin:"ast",
          versionIndex: "0",
          clientId: "7a44198107b7f42b95724a3f9abf98a3",
          clientSecret:"cf48176249d4b71363f707d11cbef5d2242feff1890ffcf6fd5db8586c47a9bf"
      };
      request({
          url: 'https://cors-anywhere.herokuapp.com/https://api.jdoodle.com/v1/execute',
          method: "POST",
          json: program,
          'Access-Control-Allow-Origin': '*'
      },
      function (error, response, body) {
          console.log('error:', error);
          console.log('statusCode:', response && response.statusCode);
          console.log('body:', body);
          console.log(body.output);
      });
    }

    return (
      <div>

        <Button variant="outlined" color="primary" className={classes.button} onClick={()=>submit()}>
          {props.name}
        </Button>
        

      </div>
    );
  }