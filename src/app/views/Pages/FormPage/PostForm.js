import React from 'react';
import { Link } from 'react-router';
import RaisedButton from 'material-ui/RaisedButton';
import MenuItem from 'material-ui/MenuItem';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import DatePicker from 'material-ui/DatePicker';
import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';
import { FormControl, HelpBlock } from 'react-bootstrap';
import { compose, withStateHandlers, withProps } from 'recompose';

const enhance = compose(
  withProps(props => ({ handleSubmit: props.handleSubmit })),
  withStateHandlers(
    ({ name = '', content = '' }) => ({ name, content }),
    {
      handleNameChange: ({ name }) => value => ({
        name: value,
      }),
      handleContentChange: ({ content }) => value => ({
        content: value,
      }),
    },
  ),
);

const PostForm = enhance(({
  name,
  content,
  handleNameChange,
  handleContentChange,
  handleSubmit,
}) => {
  const styles = {
    paper: {
      padding: 30,
      marginBottom: 10,
    },
    buttons: {
      marginTop: 30,
    },
    saveButton: {
      marginLeft: 5,
    },
  };

  const onSubmit = (e) => {
    e.preventDefault();
    handleSubmit({ name, content });
  };

  return (
    <Paper style={styles.paper}>
      <h3 className="title">Form</h3>

      <Divider />
      <form onSubmit={onSubmit}>

        <TextField
          hintText="Name"
          floatingLabelText="Name"
          fullWidth
          onChange={e => handleNameChange(e.target.value)}
          value={name}
        />
        <FormControl.Feedback />
        <HelpBlock>Validation is based on string length.</HelpBlock>

        <TextField
          hintText="Content"
          floatingLabelText="Content"
          fullWidth
          onChange={e => handleContentChange(e.target.value)}
          value={content}
        />

        <SelectField
          floatingLabelText="City"
          value=""
          fullWidth
        >
          <MenuItem key={0} primaryText="London" />
          <MenuItem key={1} primaryText="Paris" />
          <MenuItem key={2} primaryText="Rome" />
        </SelectField>

        <DatePicker
          hintText="Expiration Date"
          floatingLabelText="Expiration Date"
          fullWidth
        />

        <div style={styles.buttons}>
          <Link to="/">
            <RaisedButton label="Cancel" />
          </Link>

          <RaisedButton
            label="Save"
            style={styles.saveButton}
            type="submit"
            primary
          />
        </div>
      </form>
    </Paper>
  );
});

export default PostForm;
