import { Admin, Resource } from 'react-admin';
import { authProvider } from './auth/authProvider';
import { dataProvider } from './data/dataProvider';
import { AppLayout } from './components/AppLayout';

import { UserList } from './resources/users/list';
import { UserCreate } from './resources/users/create';
import { UserEdit } from './resources/users/edit';
import { UserShow } from './resources/users/show';

import { SiteList } from './resources/sites/list';
import { SiteCreate } from './resources/sites/create';
import { SiteEdit } from './resources/sites/edit';
import { SiteShow } from './resources/sites/show';

import { PlanList } from './resources/plans/list';
import { PlanCreate } from './resources/plans/create';
import { PlanEdit } from './resources/plans/edit';
import { PlanShow } from './resources/plans/show';

import { FeatureList } from './resources/features/list';
import { FeatureCreate } from './resources/features/create';
import { FeatureEdit } from './resources/features/edit';
import { FeatureShow } from './resources/features/show';

import { PlanFeatureList } from './resources/planFeatures/list';
import { PlanFeatureCreate } from './resources/planFeatures/create';
import { PlanFeatureEdit } from './resources/planFeatures/edit';
import { PlanFeatureShow } from './resources/planFeatures/show';

import { ThemeList } from './resources/themes/list';
import { ThemeCreate } from './resources/themes/create';
import { ThemeEdit } from './resources/themes/edit';
import { ThemeShow } from './resources/themes/show';

import { SiteThemeList } from './resources/siteThemes/list';
import { SiteThemeCreate } from './resources/siteThemes/create';
import { SiteThemeEdit } from './resources/siteThemes/edit';
import { SiteThemeShow } from './resources/siteThemes/show';

import { SitePlanList } from './resources/sitePlans/list';
import { SitePlanCreate } from './resources/sitePlans/create';
import { SitePlanEdit } from './resources/sitePlans/edit';
import { SitePlanShow } from './resources/sitePlans/show';

import { SiteFeatureList } from './resources/siteFeatures/list';
import { SiteFeatureCreate } from './resources/siteFeatures/create';
import { SiteFeatureEdit } from './resources/siteFeatures/edit';
import { SiteFeatureShow } from './resources/siteFeatures/show';

import { PaymentList } from './resources/payments/list';
import { PaymentCreate } from './resources/payments/create';
import { PaymentEdit } from './resources/payments/edit';
import { PaymentShow } from './resources/payments/show';

import { Dashboard } from './pages/Dashboard';

export default function App() {
  return (
    <Admin
      layout={AppLayout}
      authProvider={authProvider}
      dataProvider={dataProvider}
      dashboard={Dashboard}
    >
      <Resource name="users" list={UserList} create={UserCreate} edit={UserEdit} show={UserShow} />
      <Resource name="sites" list={SiteList} create={SiteCreate} edit={SiteEdit} show={SiteShow} />
      <Resource name="plans" list={PlanList} create={PlanCreate} edit={PlanEdit} show={PlanShow} />
      <Resource name="features" list={FeatureList} create={FeatureCreate} edit={FeatureEdit} show={FeatureShow} />
      <Resource name="plan-features" list={PlanFeatureList} create={PlanFeatureCreate} edit={PlanFeatureEdit} show={PlanFeatureShow} />
      <Resource name="themes" list={ThemeList} create={ThemeCreate} edit={ThemeEdit} show={ThemeShow} />
      <Resource name="site-themes" list={SiteThemeList} create={SiteThemeCreate} edit={SiteThemeEdit} show={SiteThemeShow} />
      <Resource name="site-plans" list={SitePlanList} create={SitePlanCreate} edit={SitePlanEdit} show={SitePlanShow} />
      <Resource name="site-features" list={SiteFeatureList} create={SiteFeatureCreate} edit={SiteFeatureEdit} show={SiteFeatureShow} />
      <Resource name="payments" list={PaymentList} create={PaymentCreate} edit={PaymentEdit} show={PaymentShow} />
    </Admin>
  );
}
