import Page from '../components/page';
import TopMenu from '../components/topMenu';
import Intro from '../components/intro'
import AppList from '../components/appList';

export default () => (
  <Page title="Fozg.net">
    <TopMenu />
    <Intro />
    
    <div className="col-md-8 col-sm-10 mx-auto">
      <AppList />
    </div>
  </Page>
)