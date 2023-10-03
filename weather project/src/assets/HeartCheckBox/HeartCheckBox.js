import React,{ Component } from "react";
import './HeartCheckBox.css'
export default class HeartCheckbox extends Component {
    onClick = (event) => {
      console.warn('Missing "onClick" property');
    }
  
    render() {
      const { checked, onClick } = this.props;
  
      return (
        <button
          className={ `heart-checkbox ${checked ? 'checked' : ''}` }
          onClick={ (event) => onClick ? onClick(event, this.props) : this.onClick(event) }
          { ...this.props }
        >
        </button>
      );
    }
  }
