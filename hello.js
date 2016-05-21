var React = require('react')
var Button = require('react-bootstrap').Button


var HelloworldComponent = React.createClass({

  alertEvent(){
    alert('hello webpack react')
  },
  render:function(){
    return(
      <div>
      <h1>Hello, Webpack</h1>
      <Button bsStyle="primary" onClick={this.alertEvent}>zzz</Button>
      </div>
    )
  }
});


module.exports = HelloworldComponent;
