import React from 'react';
import {Grid, Paper, Typography, List, ListItem, ListItemText, ListItemSecondaryAction, IconButton} from '@material-ui/core';
import {Delete, Edit} from '@material-ui/icons';

import Form from './Form';

const styles = {
  Paper: {
    padding: 20,
    marginTop: 10,
    marginBottom: 10,
    height: 500,
    overflow: 'auto'}
}


export default ({
    exercises,
    category,
    onSelect,
    exercise: {
      id,
      title = 'Welcome',
      description = 'Please select an exercise from the listo on the left.'
    },
    onDelete,
    onSelectEdit,
    editMode
  }) =>(
  <Grid container>
    <Grid item sm>
      <Paper style={styles.Paper} >
          {exercises.map(([group, exercises], index) =>
          !category || category === group
          ?(
            <React.Fragment key={index}>
              <Typography variant="h5"
                style={{textTransform: 'capitalize'}}
              >
                {group}
              </Typography>
              <List component="ul">
                {exercises.map(({id, title}, index) => (
                  <ListItem
                    button
                    key={index}
                    onClick={() => onSelect(id)}
                  >
                    <ListItemText
                      primary={title}
                    />
                    <ListItemSecondaryAction>
                      <IconButton onClick={() => onSelectEdit(id)} >
                        <Edit />
                      </IconButton>
                      <IconButton onClick={() => onDelete(id)} >
                        <Delete />
                      </IconButton>
                    </ListItemSecondaryAction>
                  </ListItem>

                ))}
              </List>
            </React.Fragment>

          )
          : null
          )}
      </Paper>
    </Grid>
    <Grid item sm>
    <Paper style={styles.Paper} >
      {editMode
        ? <Form />
        :<>
            <Typography
              variant="h4"
            >
              {title}
            </Typography>

            <Typography
              variant="subtitle1"
              style={{marginTop: 20}}
            >
              {description}
            </Typography>
        </>
      }
      </Paper>
    </Grid>
  </Grid>
);
