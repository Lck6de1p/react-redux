import CountUI from '../../components/Count'
import {
  createIncrementAction, 
  createDecrementAction,
  createIncrementAsyncAction
} from '../../redux/count_action'
import {connect} from 'react-redux'
// a函数返回的对象中的key就作为传递给ui组件props的key value
function mapStateToProps(state) {
  return {
    count: state
  }
}
function mapDispatchToProps(dispatch) {
  return {
    increment: number => dispatch(createIncrementAction(number)),
    decrement: number => dispatch(createDecrementAction(number)),
    incrementAsync: (number, time) => dispatch(createIncrementAsyncAction(number, time)),
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(CountUI)

