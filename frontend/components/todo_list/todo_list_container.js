import {connect} from 'react-redux';
import {allTodos} from '../../reducers/selector';
import {receiveTodos, receiveTodo} from '../../actions/todo_actions';

const mapStateToProps = (state) => ({
  todos: allTodos(state),
  state
})

const mapDispatchToProps = dispatch => ({
  receiveTodos: () => dispatch(receiveTodos()),
  receiveTodo: (todo) => dispatch(receiveTodo(todo))
})

export default connect {
  mapStateToProps,
  mapDispatchToProps
}(TodoList);
