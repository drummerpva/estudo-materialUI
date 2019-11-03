import React from 'react';
import {AppBar, Toolbar, Typography} from '@material-ui/core';
import CreateDialog from '../../Exercises/Dialog';

export default function Header({muscles, onExerciseCreate}) {
  return (
    <AppBar position="static" >
        <Toolbar >
          <Typography style={{flex:1}} variant="h6" component="p" color="inherit" >
            Exercicio Banco de Dados
          </Typography>
          <CreateDialog
            muscles={muscles}
            onCreate={onExerciseCreate}
          />
        </Toolbar>
      </AppBar>
  );
}
