import React, {Component, PropTypes} from 'react';
import Title from '../../components/Title';
import DataTable from '../../components/DataTable';
import {Row, Col, Input, Button, Form, DatePicker} from '@ali/dblx'
const FormItem = Form.Item;

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


export default class TableContainer extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const {actions, state} = this.props;
    actions.renderTable();
  }

  pageChange(currentPage, pageSize) {
    console.log(currentPage, pageSize);
    this.props.actions.renderTable({
      pageSize,
      currentPage
    })
  }

  onTabClick(key) {
    const {setTab, renderTable} = this.props.actions;
    setTab(key);
    renderTable();
  }

  render() {
    const {data, page, tabs} = this.props.state;
    return (
      <div>
        <Title title="表格"/>
        <DataTable
          col={columns}
          data={data}
          tableName="表名"
          pageCfg={page}
          onPageChange={this.pageChange.bind(this)}
          tabs={tabs}
          onTabClick={this.onTabClick.bind(this)}
        >
          <Row>
            <Form inline>
              <Col span="12">
                <FormItem label="激活时间:">
                  <DatePicker/>
                </FormItem>
                <FormItem>
                  <p className="ant-form-split">-</p>
                </FormItem>
                <FormItem>
                  <DatePicker />
                </FormItem>
              </Col>
            </Form>
          </Row>
        </DataTable>
      </div>
    );
  }
}
