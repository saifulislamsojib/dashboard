import React from 'react';
import { Container } from 'react-bootstrap';
import { Route, Switch } from 'react-router-dom';
import AccessControl from '../AccessControl/AccessControl';
import Sidebar from '../Sidebar/Sidebar';

const Dashboard = () => {
    return (
        <Container fluid>
            <div className="row">
                <div className="col-lg-2">
                    <Sidebar />
                </div>
                <div className="col-lg-10">
                <Switch>
                    <Route exact path="/">
                        <AccessControl />
                    </Route>
                    <Route path="/access-control">
                        <AccessControl />
                    </Route>
                </Switch>
                </div>
            </div>
        </Container>
    );
};

export default Dashboard;