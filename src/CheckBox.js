import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './CheckBox.css';

class CheckBox extends Component {
  constructor (props) {
    super(props);

    this.state = {
      isChecked: this.props.InitialState
    }

    this.prevlabel = this.props.label;
    this.prevInitialState = this.props.InitialState;
  }


  toggleCheckBoxChange = () => {
    const { handleCheckBoxChange, label } = this.props;

    this.setState(({ isChecked }) => (
      {
        isChecked: !isChecked,
      }
    ));

    handleCheckBoxChange(label);
  }

  render() {
    const { label } = this.props;
    const { isChecked } = this.state;
        // <label className="CheckBoxLabel">
        //   {label}
        // </label>
    return (
      <div className="CheckBox">
        <input
          type="checkBox"
          value={label}
          checked={isChecked}
          onChange={this.toggleCheckBoxChange}
        />
      </div>
    );
  }
}

CheckBox.propTypes = {
  label: PropTypes.string.isRequired,
  InitialState: PropTypes.bool.isRequired,
  handleCheckBoxChange: PropTypes.func.isRequired,
};

export default CheckBox;