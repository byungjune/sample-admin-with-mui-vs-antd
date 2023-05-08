import { useState } from 'react';

// ant design ui
import { Radio, Row, Col, Button, Dropdown, List, Typography } from 'antd';

const { Title, Text } = Typography;

// project import
import OrdersTable from './OrdersTable';
import IncomeAreaChart from './IncomeAreaChart';
import MonthlyBarChart from './MonthlyBarChart';
import ReportAreaChart from './ReportAreaChart';
import SalesColumnChart from './SalesColumnChart';
import MainCardAnt from 'components/MainCardAnt';
import AnalyticEcommerceAnt from 'components/cards/statistics/AnalyticEcommerceAnt';

// assets
import { DownOutlined } from '@ant-design/icons';

// ==============================|| DASHBOARD - DEFAULT ||============================== //

const AntDashboard = () => {
  const [value, setValue] = useState('today');
  const [slot, setSlot] = useState('week');

  // sales report status
  const status = [
    {
      key: 'today',
      label: (
        <a role="presentation" onClick={() => setValue('Today')}>
          Today
        </a>
      )
    },
    {
      key: 'month',
      label: (
        <a role="presentation" onClick={() => setValue('This Month')}>
          This Month
        </a>
      )
    },
    {
      key: 'year',
      label: (
        <a role="presentation" onClick={() => setValue('This Year')}>
          This Year
        </a>
      )
    }
  ];

  return (
    <Row gutter={[18, 12]}>
      {/* row 1 */}
      <Col span={24}>
        <Title level={5}>ANT Dashboard</Title>
      </Col>
      {/* </Row> */}
      {/* <Row gutter={[24, 16]}> */}
      <Col xs={24} sm={12} md={8} lg={6}>
        <AnalyticEcommerceAnt title="Total Page Views" count="4,42,236" percentage={59.3} extra="35,000" />
      </Col>
      <Col xs={24} sm={12} md={8} lg={6}>
        <AnalyticEcommerceAnt title="Total Users" count="78,250" percentage={70.5} extra="8,900" />
      </Col>
      <Col xs={24} sm={12} md={8} lg={6}>
        <AnalyticEcommerceAnt title="Total Order" count="18,800" percentage={27.4} isLoss color="warning" extra="1,943" />
      </Col>
      <Col xs={24} sm={12} md={8} lg={6}>
        <AnalyticEcommerceAnt title="Total Sales" count="$35,078" percentage={27.4} isLoss color="warning" extra="$20,395" />
      </Col>

      <Col md={16} sx={{ display: { sm: 'none', md: 'block', lg: 'none' } }} />

      {/* row 2 */}
      <Col xs={24} md={14} lg={16}>
        <Row justify="space-between" align="middle">
          <Col>
            <Title level={5}>Unique Visitor</Title>
          </Col>
          <Col>
            <Radio.Group value={slot} onChange={(e) => setSlot(e.target.value)}>
              <Radio.Button value="month">Month</Radio.Button>
              <Radio.Button value="week">Week</Radio.Button>
            </Radio.Group>
          </Col>
        </Row>
        <MainCardAnt>
          <IncomeAreaChart slot={slot} />
        </MainCardAnt>
      </Col>

      <Col xs={24} md={10} lg={8}>
        <Row justify="space-between" align="middle">
          <Col>
            <Title level={5}>Income Overview</Title>
          </Col>
        </Row>
        <MainCardAnt>
          <Text type="secondary">This Week Statistics</Text>
          <Title level={3}>$7,650</Title>
          <MonthlyBarChart />
        </MainCardAnt>
      </Col>

      {/* row 3 */}
      <Col xs={24} md={14} lg={16}>
        <Row justify="space-between" align="middle">
          <Col>
            <Title level={5}>Recent Orders</Title>
          </Col>
        </Row>
        <MainCardAnt>
          <OrdersTable />
        </MainCardAnt>
      </Col>
      <Col xs={24} md={10} lg={8}>
        <Row justify="space-between" align="middle">
          <Col>
            <Title level={5}>Analytics Report</Title>
          </Col>
        </Row>
        <MainCardAnt sx={{ marginTop: '20px' }}>
          <List>
            <List.Item>
              <Text strong>Company Finance Growth</Text>
              <span style={{ fontSize: '16px', fontWeight: 'bold' }}>+45.14%</span>
            </List.Item>
            <List.Item>
              <Text strong>Company Expenses Ratio</Text>
              <span style={{ fontSize: '16px', fontWeight: 'bold' }}>0.58%</span>
            </List.Item>
            <List.Item>
              <Text strong>Business Risk Cases</Text>
              <span style={{ fontSize: '16px', fontWeight: 'bold' }}>Low</span>
            </List.Item>
          </List>
          <ReportAreaChart />
        </MainCardAnt>
      </Col>

      {/* row 4 */}
      <Col xs={24} md={14} lg={16}>
        <Row justify="space-between" align="middle">
          <Col>
            <Title level={5}>Sales Report</Title>
          </Col>
          <Col>
            <Dropdown
              menu={{
                items: status,
                selectable: true
              }}
              placement="bottomLeft"
            >
              <Button>
                {value}
                <DownOutlined />
              </Button>
            </Dropdown>
          </Col>
        </Row>
        <MainCardAnt sx={{ marginTop: '14px' }}>
          <div style={{ marginBottom: '-96px' }}>
            <Text color="secondary">Net Profit</Text>
            <Title level={4} style={{ margin: '12px 0 0 0' }}>
              $1560
            </Title>
          </div>
          <SalesColumnChart />
        </MainCardAnt>
      </Col>
      <Col xs={24} md={10} lg={8}>
        <Row justify="space-between" align="middle">
          <Col>
            <Title level={5}>Transaction History</Title>
          </Col>
        </Row>
        <MainCardAnt sx={{ marginTop: '14px' }}>
          <List>
            <List.Item>
              <Text strong>Company Finance Growth</Text>
              <span style={{ fontSize: '16px', fontWeight: 'bold' }}>+45.14%</span>
            </List.Item>
            <List.Item>
              <Text strong>Company Expenses Ratio</Text>
              <span style={{ fontSize: '16px', fontWeight: 'bold' }}>0.58%</span>
            </List.Item>
            <List.Item>
              <Text strong>Business Risk Cases</Text>
              <span style={{ fontSize: '16px', fontWeight: 'bold' }}>Low</span>
            </List.Item>
          </List>
        </MainCardAnt>
      </Col>
    </Row>
  );
};

export default AntDashboard;
