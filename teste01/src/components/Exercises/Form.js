import React,{ useState} from 'react';
import { TextField, FormControl, InputLabel, Select, MenuItem, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    formControl:{
      minWidth: 250
    }
  })
);

const INITIAL_FORM = {title: '', description: '', muscles: ''};


export default ({muscles}) => {
  const [form, setForm] = useState(INITIAL_FORM);
  const classes = useStyles();

  const handleChange = name => ({target: {value}}) =>
    setForm({
      ...form,
      [name]:value
    });

  const handleSubmit = () => {
    onCreate({
      ...form,
      id: form.title
        .toLowerCase()
          .replace(/ /g,'-')
    });
    setForm(INITIAL_FORM);
    setOpen(false);
  };


  return(
    <form>
      <TextField
        label="Title"
        value={form.title}
        onChange={handleChange('title')}
        margin="normal"
        className={classes.formControl}
      />
      <br/>
      <FormControl className={classes.formControl} >
        <InputLabel htmlFor="muscles">
          Muscles
        </InputLabel>
        <Select
          value={form.muscles}
          onChange={handleChange('muscles')}
        >
          {muscles.map(category =>
            <MenuItem key={category} value={category}>{category}</MenuItem>

            )}
        </Select>
      </FormControl>
      <br/>
      <TextField
        className={classes.formControl}
        label="Description"
        value={form.description}
        onChange={handleChange('description')}
        margin="normal"
      />
    </form>

  );
}
