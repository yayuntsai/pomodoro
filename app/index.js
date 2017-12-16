class PomodoroTimer extends React.Component{

    totalTime(timeOne, timeTwo){
        return timeOne + timeTwo;
    }

    render(){
      return(
        <div>This timer runs for {this.props.workingTime} minutes,
        followed by rest of {this.props.restingTime} minutes.
        <br />
        For a total time of {this.totalTime(this.props.workingTime, this.props.restingTime)} minutes.
        <br />
        There are 88 seconds elapsed.</div>
      )
    }

}

ReactDOM.render(
    <PomodoroTimer workingTime={25} restingTime={5}/>,
    document.getElementById('app')

);
