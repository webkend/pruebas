import React from 'react';
import {
  BrowserRouter as Router,
  Routes, // instead of "Switch"
  Route,
  Link, // instead of "Redirect"
  Navigate
} from 'react-router-dom';
import * as routes from './routes';
import Loadable from '@loadable/component';
import Loading from '../components/Utils/Loading';

// import AuthRouter from './AuthRouter';

// Dashboard
import DashboardContainer from '../containers/Dashboard/DashboardContainer';

// Headquarters
import HeadquartersContainer from '../containers/Headquarters/HeadquartersContainer';

// Team
import TeamContainer from '../containers/Team/TeamContainer';

// Inventory
import InventoryContainer from '../containers/Inventory/InventoryContainer';

// Thirds
import ThirdsContainer from '../containers/Thirds/ThirdsContainer';

// Dashboard
// const DashboardContainer = Loadable(() => import('../containers/Dashboard/DashboardContainer'), {
//   fallback: <Loading />,
// })

// Headquarters
// const HeadquartersContainer = Loadable(() => import('../containers/Headquarters/HeadquartersContainer'), {
//   fallback: <Loading />,
// })
const CreateHeadquartersContainer = Loadable(() => import('../containers/Headquarters/CreateHeadquartersContainer'), {
  fallback: <Loading />,
})

// Team
// const TeamContainer = Loadable(() => import('../containers/Team/TeamContainer'), {
//   fallback: <Loading />,
// })
const CreateTeamContainer = Loadable(() => import('../containers/Team/CreateTeamContainer'), {
  fallback: <Loading />,
})

// Inventory
// const InventoryContainer = Loadable(() => import('../containers/Inventory/InventoryContainer'), {
//   fallback: <Loading />,
// })
const CreateInventoryContainer = Loadable(() => import('../containers/Inventory/CreateInventoryContainer'), {
  fallback: <Loading />,
})

// Thirds
// const ThirdsContainer = Loadable(() => import('../containers/Thirds/ThirdsContainer'), {
//   fallback: <Loading />,
// })
const CreateThirdsContainer = Loadable(() => import('../containers/Thirds/CreateThirdsContainer'), {
  fallback: <Loading />,
})

const router = () => {
	return (
    <Router>
      <>
        <Routes>
          {/* <Route path="/auth" component={AuthRouter}>
          </Route>
          <Route exact path="/" component={Suite}>
          </Route>
          <Route path="/proyectos" component={Projects}>
          </Route>
          <Route path="/equipo" component={Team}>
          </Route> */}
          {/* <Route exact path="/" element={HomeContainer}>
          </Route> */}
          <Route path={routes.dashboardRoute} element={<DashboardContainer />}>
          </Route>
          <Route path={routes.homeRoute} element={<Navigate replace to="/dashboard" />}>
          </Route>

          // Headquarters
          <Route path={routes.headquartersRoute} element={<HeadquartersContainer />}>
          </Route>
          <Route path={routes.createHeadquartersRoute} element={<CreateHeadquartersContainer />}>
          </Route>

          // Team
          <Route path={routes.teamRoute} element={<TeamContainer />}>
          </Route>
          <Route path={routes.createTeamRoute} element={<CreateTeamContainer />}>
          </Route>

          // Inventory
          <Route path={routes.inventoryRoute} element={<InventoryContainer />}>
          </Route>
          <Route path={routes.createInventoryRoute} element={<CreateInventoryContainer />}>
          </Route>

          // Thirds
          <Route path={routes.thirdsRoute} element={<ThirdsContainer />}>
          </Route>
          <Route path={routes.createThirdsRoute} element={<CreateThirdsContainer />}>
          </Route>

        </Routes>
        <Link to="/auth/login">
        </Link>
      </>
    </Router>
  );
};

export default router;