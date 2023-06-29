import { Component } from 'react';
import { Btn, Form, Header, Input } from './Searchbar.styled';
import PropTypes from 'prop-types';

export class Searchbar extends Component {
  state = {
    value: '',
  };

  handleInputChange = ({ target }) => {
    this.setState({ value: target.value });
  };
  handleSubmit = e => {
    const { value } = this.state;
    e.preventDefault();
    this.props.onSubmit(value);
    this.setState({ value: '' });
  };

  render() {
    const { value } = this.state;
    return (
      <Header>
        <Form onSubmit={this.handleSubmit}>
          <Btn>Search</Btn>

          <Input
            onChange={this.handleInputChange}
            value={value}
            type="text"
            autocomplete="off"
            // autofocus
            placeholder="Search images and photos"
          />
        </Form>
      </Header>
    );
  }
}

Searchbar.propTypes = {
  value: PropTypes.string,
  onSubmit: PropTypes.func.isRequired,
};
