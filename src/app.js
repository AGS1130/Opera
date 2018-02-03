const Tree = require('react-d3-tree');
const result = require('../firebase/straightendTree.json');

class ClassLess extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      appData: []
    };
  }
  
  componentDidMount() {
    this.setState({
      appData: [result]
    });
  }

  componentWillUnmount() {
    this.serverRequest.abort();
  }

  render(){
    const theData = this.state.appData;
    console.log(theData);
    if(theData.length !== 0){
    return (
    <div id="treeWrapper" style={{width: '50em', height: '20em'}}>
      <Tree data={theData} />
    </div>
    );
    } else {
      return(
      <div>
        <div>
          <h1>Opera</h1>
          <input type="text" placeholder="Search from the tree"/>
        </div>
      </div>
      )
    }
  }
}

ReactDOM.render(<ClassLess/>, document.getElementById('app'))
