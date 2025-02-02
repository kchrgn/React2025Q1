import { Component } from 'react';

class ErrorButton extends Component {
  state = {emitError: false}
  render() {
    if (this.state.emitError) throw new Error('User trhrown error')
    return (
      <>
        <button 
          onClick={()=>{this.setState({emitError: true})}}
        > 
          Error Button
        </button>;
      </>
    )
  }
}

export default ErrorButton;
