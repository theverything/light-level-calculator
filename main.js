const {Component} = require('react');
const ReactDOM = require('react-dom');

const types = [
  {name: 'yoyo', weight: 0.12},
  {name: 'special', weight: 0.12},
  {name: 'heavy', weight: 0.12},
  {name: 'ghost', weight: 0.08},
  {name: 'helmet', weight: 0.10},
  {name: 'gauntlets', weight: 0.10},
  {name: 'chest', weight: 0.10},
  {name: 'leg', weight: 0.10},
  {name: 'class', weight: 0.08},
  {name: 'artifact', weight: 0.08}
];

class Type extends Component {
  getValue = () => {
    return this.refs.input.value;
  }

  render = () => {
    return (
      <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: 10}}>
        <label style={{textTransform: 'capitalize'}}>{this.props.name}</label>
        <input
          type='number'
          min='0'
          ref='input'
          value={this.props.value}
          onChange={this.props.onChange}/>
      </div>
    );
  }
}

class Progress extends Component {
  render = () => {
    return (
      <div style={{width: '100%', border: 'solid #666 1px'}}>
        <div style={{height: 20, backgroundColor: 'Yellow', width: `${this.props.progress}%`}}/>
      </div>
    );
  }
}

class Calculator extends Component {
  componentDidMount = () => {
    this.handleChange();
  }

  handleChange = () => {
    this.props.updateValues(Object.keys(this.refs).reduce((values, ref) => {
      let val = parseInt(this.refs[ref].getValue()) || 0;
      values[this.refs[ref].props.index] = val;
      return values;
    }, []));
  }

  toInput = (type, i) => {
    return (
      <Type
        name={type.name}
        key={i}
        index={i}
        onChange={this.handleChange}
        value={this.props.values[i] || 0}
        ref={type.name}/>
     );
  }

  render = () => {
    let [lvl, progress] = this.props.lvl.toFixed(2).toString().split('.');

    return (
      <div style={{width: 250, margin: '20px auto'}}>
        {types.map(this.toInput)}
        <h1 style={{margin: 0}}>{lvl}</h1>
        <Progress progress={progress}/>
      </div>
    );
  }
}

class App extends Component {
  state = {
    values: window.location.hash.replace("#", "").split(","),
    lvl: 0
  }

  updateValues = (values) => {
    let lvl = values.reduce((sum, val, i) => {
      return (val * types[i].weight) + sum;
    }, 0);

    window.location.hash = values;

    this.setState({lvl, values});
  }

  render = () => {
    return (
      <Calculator lvl={this.state.lvl} values={this.state.values} updateValues={this.updateValues}/>
    );
  }
}

ReactDOM.render(<App/>, document.getElementById('app'));
