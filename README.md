# circular-list-state-machine
Use circular list to do a state machine

For example

var state1 = {
  start: function () {
    console.log('this is state1')
  }
}
var state2 = {
  start: function () {
    console.log('this is state2')
  }
}
var state3 = {
  start: function () {
    console.log('this is state3')
  }
}

var sm = new StateMachine()

sm.addState(state1)
sm.addState(state2)
sm.addState(state3)

sm.changeState() // this is state1
sm.changeState() // this is state2
sm.changeState() // this is state3
sm.changeState() // this is state1
sm.changeState() // this is state2
