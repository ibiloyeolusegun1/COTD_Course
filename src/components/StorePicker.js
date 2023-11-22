import React from "react";
import {getFunName} from '../helpers'

class StorePicker extends React.Component {

  myInput = React.createRef()

  goToStore = (event) => {
    // Stop the form from submitting
    event.preventDefault()

    // Get the text from that input
    const storeName = this.myInput.current.value

    // Change the page to /store/whatever they enter
    this.props.history.push(`/store/${storeName}`)
   
  }

  render() {
    return (
      <form className="store-selector" onSubmit={this.goToStore}>
        <h2>Please enter a store</h2>
        <input type="text" ref={this.myInput} placeholder="Store Name" defaultValue={getFunName()}/>
        <button type="submit">Visit Store</button>
      </form>
    );
  }
}
export default StorePicker;
