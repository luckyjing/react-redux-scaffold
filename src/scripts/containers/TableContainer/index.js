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
const data = [{
  key: '1',
  name: '阿里巴巴',
  age: 12,
  address: '西溪园区',
}, {
  key: '2',
  name: '阿里妈妈',
  age: 22,
  address: '滨江园区',
}, {
  key: '3',
  name: '阿里娃娃',
  age: 32,
  address: '乐佳国际',
}];
const tabs = [{
  key: '1',
  name: '类别1'
}, {
  key: '2',
  name: '类别2'
}];
const pageCfg = {pageSize: 1, currentPage: 2};


export default class TableContainer extends Component {
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
    return (
      <div>
        <Title title="表格"/>
        <DataTable
          col={columns}
          data={data}
          tableName="表名"
          pageCfg={pageCfg}
          onPageChange={this.pageChange}
          tabs={tabs}
          onTabClick={this.onTabClick}
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
