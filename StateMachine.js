import CircularList from './CircularList'
class StateMachine {
    constructor () {
        this.circularList = new CircularList()
    }
    addState (element) {
        this.circularList.append(element)
        return this
    }
    changeState () {
        this.circularList.getCurrent().element.start()
        this.circularList.changeCurrent()
    }
}
export default StateMachine
