import { Route, Switch } from 'react-router-dom';
import AccessControlNav from '../AccessControlNav/AccessControlNav';
import Role from '../Role/Role';
import Roles from '../Roles/Roles';
import './AccessControl.css';

const AccessControl = () => {

    return (
        <div>
            <AccessControlNav />
            <Switch>
                <Route exact path="/">
                    <Roles />
                </Route>
                <Route exact path="/access-control">
                    <Roles />
                </Route>
                <Route exact path="/access-control/permissions">
                    <Roles />
                </Route>
                <Route path="/access-control/permissions/role/:name">
                    <Role />
                </Route>
            </Switch>
        </div>
    );
};

export default AccessControl;