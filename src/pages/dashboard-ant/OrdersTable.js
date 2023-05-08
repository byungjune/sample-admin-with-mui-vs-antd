import PropTypes from 'prop-types';
import { useState } from 'react';

import { Row, Col, Table, Typography } from 'antd';

// third-party
import NumberFormat from 'react-number-format';

// project import
import Dot from 'components/@extended/Dot';

// ==============================|| ORDER TABLE - STATUS ||============================== //

const OrderStatus = (status) => {
  let color;
  let title;

  switch (status) {
    case 0:
      color = 'warning';
      title = 'Pending';
      break;
    case 1:
      color = 'success';
      title = 'Approved';
      break;
    case 2:
      color = 'error';
      title = 'Rejected';
      break;
    default:
      color = 'primary';
      title = 'None';
  }

  return (
    <Row align="middle">
      <Col>
        <Dot color={color} />
      </Col>
      <Col offset={2}>
        <Text>{title}</Text>
      </Col>
    </Row>
  );
};

OrderStatus.propTypes = {
  status: PropTypes.number
};

const TotalAmount = (amount) => {
  return <NumberFormat value={amount} displayType="text" thousandSeparator prefix="$" />;
};

function createData(trackingNo, name, fat, carbs, protein) {
  return { trackingNo, name, fat, carbs: OrderStatus(carbs), protein: TotalAmount(protein) };
}

const { Text } = Typography;

const rows = [
  createData(84564564, 'Camera Lens', 40, 2, 40570),
  createData(98764564, 'Laptop', 300, 0, 180139),
  createData(98756325, 'Mobile', 355, 1, 90989),
  createData(98652366, 'Handset', 50, 1, 10239),
  createData(13286564, 'Computer Accessories', 100, 1, 83348),
  createData(86739658, 'TV', 99, 0, 410780),
  createData(13256498, 'Keyboard', 125, 2, 70999),
  createData(98753263, 'Mouse', 89, 2, 10570),
  createData(98753275, 'Desktop', 185, 1, 98063),
  createData(98753291, 'Chair', 100, 0, 14001)
];

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === 'desc' ? (a, b) => descendingComparator(a, b, orderBy) : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

// ==============================|| ORDER TABLE - HEADER CELL ||============================== //

const headCells = [
  {
    dataIndex: 'trackingNo',
    align: 'left',
    disablePadding: false,
    title: 'Tracking No.'
  },
  {
    dataIndex: 'name',
    align: 'left',
    disablePadding: true,
    title: 'Product Name'
  },
  {
    dataIndex: 'fat',
    align: 'right',
    disablePadding: false,
    title: 'Total Order'
  },
  {
    dataIndex: 'carbs',
    align: 'left',
    disablePadding: false,

    title: 'Status'
  },
  {
    dataIndex: 'protein',
    align: 'right',
    disablePadding: false,
    title: 'Total Amount'
  }
];

// ==============================|| ORDER TABLE ||============================== //

export default function OrderTable() {
  const [order] = useState('asc');
  const [orderBy] = useState('trackingNo');

  return (
    <Table
      columns={headCells}
      scroll={{ x: 'max-content' }}
      size="middle"
      dataSource={stableSort(rows, getComparator(order, orderBy))}
      pagination={false}
      bordered
    />
  );
}
