import React from 'react';
import { cyan500, pink500, purple500, orange500 } from 'material-ui/styles/colors';
import Assessment from 'material-ui/svg-icons/action/assessment';
import Face from 'material-ui/svg-icons/action/face';
import ThumbUp from 'material-ui/svg-icons/action/thumb-up';
import ShoppingCart from 'material-ui/svg-icons/action/shopping-cart';
import { Row, Col } from 'react-bootstrap';
import DashboardView from '../../Layouts/DashboardView';
import InfoBox from '../../Components/Dashboard/InfoBox';
import NewOrders from '../../Components/Dashboard/NewOrders';
import MonthlySales from '../../Components/Dashboard/MonthlySales';
import Data from '../../Config/data';

const DashboardPage = () => (
  <DashboardView
    title="Dashboard"
  >
    <Row>
      <Col xs={12} sm={6} md={3}>
        <InfoBox
          Icon={ShoppingCart}
          color={pink500}
          title="Total Profit"
          value="1500k"
        />
      </Col>

      <Col xs={12} sm={6} md={3}>
        <InfoBox
          Icon={ThumbUp}
          color={cyan500}
          title="Likes"
          value="4231"
        />
      </Col>

      <Col xs={12} sm={6} md={3}>
        <InfoBox
          Icon={Assessment}
          color={purple500}
          title="Sales"
          value="460"
        />
      </Col>

      <Col xs={12} sm={6} md={3}>
        <InfoBox
          Icon={Face}
          color={orange500}
          title="New Members"
          value="248"
        />
      </Col>
    </Row>

    <Row className="top-buffer">
      <Col xs={12} sm={6} md={6}>
        <NewOrders data={Data.dashBoardPage.newOrders} />
      </Col>

      <Col xs={12} sm={6} md={6} lg={6}>
        <MonthlySales data={Data.dashBoardPage.monthlySales} />
      </Col>
    </Row>

  </DashboardView>
);

export default DashboardPage;
