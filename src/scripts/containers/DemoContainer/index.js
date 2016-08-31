import React, {Component, PropTypes} from 'react';
import DataTable from '../../components/DataTable';
const columns = [{
  title: '姓名',
  dataIndex: 'name',
  render: text => <a href="#">{text}</a>,
}, {
  title: '年龄',
  dataIndex: 'age',
}, {
  title: '住址',
  dataIndex: 'address',
}];
const data = [{
  key: '1',
  name: '胡彦斌',
  age: 32,
  address: '西湖区湖底公园1号',
}, {
  key: '2',
  name: '胡彦祖',
  age: 42,
  address: '西湖区湖底公园1号',
}, {
  key: '3',
  name: '李大嘴',
  age: 32,
  address: '西湖区湖底公园1号',
}];
export default class DemoContainer extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const {actions, state} = this.props;
    actions.demo("Hello,这儿发起了一个actions,你可以直接发起你在redux定义的actions");
    actions.getInfo();
  }

  pageChange(currentPage, pageSize) {
    console.log(currentPage, pageSize);
  }

  onTabClick(key) {
    console.log(key);
  }

  render() {
    const tabs = [{
      key: 'ecs',
      name: 'ECS'
    }, {
      key: 'rds',
      name: 'RDS数据库'
    }];
    return (
      <div>
        <DataTable
          col={columns}
          data={data}
          tableName="表名"
          pageCfg={{pageSize: 1, currentPage: 2}}
          onPageChange={this.pageChange}
          tabs={tabs}
          onTabClick={this.onTabClick}
        >
          <h1>表单区域</h1>
        </DataTable>
      </div>
    );
  }
}
