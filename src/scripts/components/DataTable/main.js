import React, {Component, PropTypes} from 'react';
import {Table, Button, Row, Col} from '@ali/dblx';
export default class DataTable extends Component {
  constructor(props) {
    super(props);
    let tabIndex = 0;
    if (this.props.tabs) {
      this.props.tabs.forEach((tab, index)=>tab.default ? tabIndex = index : 0);
    }
    this.state = {
      tabIndex: tabIndex
    };
    this.default = {
      pagination: {
        total: 0,
        pageSize: 1,
        current: 1,
        showTotal: total=>`共 ${total} 条`,
        onChange: currentPage=> {
          if (this.props.onPageChange) {
            this.props.onPageChange(currentPage, this.default.pagination.pageSize);
          }
        }
      }
    }
  }

  onTabClick(key, index) {
    this.setState({
      tabIndex: index
    });
    if (this.props.onTabClick) {
      this.props.onTabClick(key);
    }
  }

  componentDidMount() {
  }

  render() {
    // 数据信息
    let data = this.props.data;
    if (!data) {
      data = [];
    }
    // 分页信息
    let pagination = this.default.pagination;
    const pageCfg = this.props.pageCfg;
    if (pageCfg) {
      pagination.total = pageCfg.totalRow;
      pagination.pageSize = pageCfg.pageSize;
      pagination.current = pageCfg.currentPage;
      pagination.onChange = currentPage => {
        if (this.props.onPageChange) {
          this.props.onPageChange(currentPage, pagination.pageSize);
        }
      }
    } else {
      pagination = false;
    }
    // 顶部筛选框信息
    let topbarInfo = '';
    if (this.props.tabs) {
      topbarInfo = this.props.tabs.map((tab, index)=> {
        return (
          <Button type={this.state.tabIndex == index ? "primary" : "default"} className="gap-right" key={index}
                  onClick={this.onTabClick.bind(this, tab.key, index)}>
            {tab.name}
          </Button>
        )
      })
    }
    // 表名
    let tableName = '';
    if (this.props.tableName) {
      tableName = (
        <Row type="flex" justify="start" className="table-header">
          <Col span="12">
            {
              this.props.tableName ? <p className="text-left text-table-header">{this.props.tableName}</p> : ''
            }
          </Col>
        </Row>
      )
    }
    return (
      <div>
        {topbarInfo ? (
          <Row className="table-tab">
            <span className="gap-right text-md ">请选择:</span>
            {topbarInfo}
          </Row>
        ) : ""}
        {this.props.children}
        <div className="table-container">
          {tableName}
          <Table
            columns={this.props.col}
            dataSource={data}
            pagination={pagination}
            rowKey={(record, index)=>index}
          />
        </div>
      </div>
    );
  }
}
