import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as actions from './redux/action'
// 载入
import Form from '../../containers/FormContainer';

// 将actions绑定到props上
const mapDispatchToProps = (dispatch) => ({
  actions:bindActionCreators(actions,dispatch)
});

// 将state绑定到props上
const mapStateToProps = (state) => ({
  state: state.Form
});

// 导出链接好的React Class
export default connect(mapStateToProps, mapDispatchToProps)(Form)