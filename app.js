class App extends React.Component {

  

  render () {
    return (
      <div>
        <h2>My Grocery List</h2>
        <GroceryList items={['Cucumbers', 'Pizza', 'Rum']} />
      </div>
    )
  }
}

var GroceryList = (props) => (
 
  <ul>
    {props.items.map((item, index)=> (
      <GroceryListItem item={item} key={index} />
      )
    )}
  </ul>
);

class GroceryListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      strikeThrough: false
    }
  }
    handleClick() {
      this.setState({
        strikeThrough: !this.state.strikeThrough
      });
    }
   render() {
      var style = {
        textDecoration: this.state.strikeThrough ? 'line-through' : 'none'
      };

    return ( 
      <ul>
        <li style={style} onClick={this.handleClick.bind(this)}>{this.props.item} </li>
      </ul>
    )
  }
}


ReactDOM.render(<App />, document.getElementById("app"));

  
