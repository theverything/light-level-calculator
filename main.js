var types = [
  {name: 'primary', weight: 0.12},
  {name: 'special', weight: 0.12},
  {name: 'heavy', weight: 0.12},
  {name: 'ghost', weight: 0.08},
  {name: 'helmet', weight: 0.10},
  {name: 'gauntlets', weight: 0.10},
  {name: 'chest', weight: 0.10},
  {name: 'leg', weight: 0.10},
  {name: 'class', weight: 0.08},
  {name: 'artifact', weight: 0.08},
];

var Type = React.createClass({
  getValue() {
    return this.refs.input.getDOMNode().value;
  },

  getWeight() {
    return this.props.weight;
  },

  render() {
    return (
      <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: 10}}>
        <label style={{textTransform: 'capitalize'}}>{this.props.name}</label>
        <input
          type='number'
          ref='input'
          onChange={this.props.onChange}/>
      </div>
    );
  }
});

var Progress = React.createClass({
  render() {
    return (
      <div style={{width: '100%', border: 'solid #666 1px'}}>
        <div style={{height: 20, backgroundColor: 'Yellow', width: `${this.props.progress}%`}}/>
      </div>
    );
  }
})


var Lvl = React.createClass({
  getInitialState() {
    return {
      lvl: 0
    };
  },

  calcLvl() {
    var refs = Object.keys(this.refs);
    var lvl = refs.reduce((sum, ref) => {
      var val = parseInt(this.refs[ref].getValue()) || 0;
      var weight = this.refs[ref].getWeight();

      return (val * weight) + sum;
    }, 0);

    this.setState({lvl: lvl});
  },

  toInput(type, i) {
    return (
      <Type
        name={type.name}
        weight={type.weight}
        key={i}
        onChange={this.calcLvl}
        ref={type.name}/>
     );
  },

  render() {
    var [lvl, progress] = this.state.lvl.toFixed(2).toString().split('.');

    return (
      <div style={{width: 250, margin: '20px auto'}}>
        {types.map(this.toInput)}
        <h1 style={{margin: 0}}>{lvl}</h1>
        <Progress progress={progress}/>
      </div>
    );
  }
});

React.render(<Lvl/>, document.getElementById('app'));
