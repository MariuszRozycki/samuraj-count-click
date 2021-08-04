class Counter extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      result: this.props.startResult
    }

  }

  handleMathClick = (type, number) => {
    // debugger
    if (type === 'subtraction') {
      this.setState(prevState => ({
        count: prevState.count + 1,
        result: prevState.result - number
      }))
    } else if (type === 'reset') {
      this.setState(() => ({
        count: 0,
        result: this.props.startResult
      }))
    } else if (type === 'addition') {
      this.setState(prevState => ({
        count: prevState.count + 1,
        result: prevState.result + number
      }))
    }
    else {
      this.setState(prevState => ({
        count: prevState.count + 10,
        result: prevState.result + number
      }))
    }

  };

  render() {
    return (
      <React.Fragment>

        <MathButton
          name='-10'
          value='10'
          type='subtraction'
          click={this.handleMathClick}>
        </MathButton>

        <MathButton
          name='-1'
          value='1'
          type='subtraction'
          click={this.handleMathClick}>
        </MathButton>

        <MathButton
          name='Reset'
          type='reset'
          click={this.handleMathClick}>
        </MathButton>

        <MathButton
          name='+1'
          value='1'
          type='addition'
          click={this.handleMathClick}>
        </MathButton>

        <MathButton
          name='+10'
          value='10'
          type='addition'
          click={this.handleMathClick}>
        </MathButton>

        <ResultPanel
          count={this.state.count}
          result={this.state.result}>
        </ResultPanel>

      </React.Fragment>
    )
  }
}

const MathButton = (props) => {
  return (
    <button onClick={() => props.click(props.type, parseInt(props.value))}>{props.name}</button>
  )
}

const ResultPanel = (props) => {
  return (
    <React.Fragment>
      <h1>Click counter: {props.count} {props.count > 9 ? <span>Procesor overloaded!</span> : null} </h1>
      <h1>Result: {props.result}</h1>
    </React.Fragment>
  )
}

const startValue = 0;
ReactDOM.render(<Counter startResult={startValue} />, document.getElementById('root'));