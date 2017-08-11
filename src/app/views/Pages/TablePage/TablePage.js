import React from 'react';
import { Link } from 'react-router';
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentCreate from 'material-ui/svg-icons/content/create';
import ContentAdd from 'material-ui/svg-icons/content/add';
import { pink500, grey200, grey500 } from 'material-ui/styles/colors';
import Paper from 'material-ui/Paper';
import Divider from 'material-ui/Divider';
import { Row, Col } from 'react-bootstrap';
import DashboardView from '../../Layouts/DashboardView';
import Data from '../../Config/data';

const TablePage = () => {
  const styles = {
    editButton: {
      fill: grey500,
    },
    columns: {
      id: {
        width: '10%',
      },
      name: {
        width: '40%',
      },
      price: {
        width: '20%',
      },
      category: {
        width: '20%',
      },
      edit: {
        width: '10%',
      },
    },
  };

  return (
    <DashboardView
      title="Table"
    >
      <Row>
        <Col xs={12}>
          <Paper className="paper">
            <h3 className="title">Table</h3>
            <Divider />

            <Link to="/form" >
              <FloatingActionButton className="floating-action-button" backgroundColor={pink500}>
                <ContentAdd />
              </FloatingActionButton>
            </Link>

            <Table>
              <TableHeader>
                <TableRow>
                  <TableHeaderColumn style={styles.columns.id}>ID</TableHeaderColumn>
                  <TableHeaderColumn style={styles.columns.name}>Name</TableHeaderColumn>
                  <TableHeaderColumn style={styles.columns.price}>Price</TableHeaderColumn>
                  <TableHeaderColumn style={styles.columns.category}>Category</TableHeaderColumn>
                  <TableHeaderColumn style={styles.columns.edit}>Edit</TableHeaderColumn>
                </TableRow>
              </TableHeader>
              <TableBody>
                {Data.tablePage.items.map(item =>
                  (<TableRow key={item.id}>
                    <TableRowColumn style={styles.columns.id}>{item.id}</TableRowColumn>
                    <TableRowColumn style={styles.columns.name}>{item.name}</TableRowColumn>
                    <TableRowColumn style={styles.columns.price}>{item.price}</TableRowColumn>
                    <TableRowColumn style={styles.columns.category}>{item.category}</TableRowColumn>
                    <TableRowColumn style={styles.columns.edit}>
                      <Link className="button" to="/form">
                        <FloatingActionButton
                          zDepth={0}
                          mini
                          backgroundColor={grey200}
                          iconStyle={styles.editButton}
                        >
                          <ContentCreate />
                        </FloatingActionButton>
                      </Link>
                    </TableRowColumn>
                  </TableRow>),
                )}
              </TableBody>
            </Table>

          </Paper>
        </Col>
      </Row>
    </DashboardView>
  );
};

export default TablePage;
