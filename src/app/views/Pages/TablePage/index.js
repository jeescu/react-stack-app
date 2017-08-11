import Loadable from 'react-loadable';
import Loading from '../../Components/Loading';

export default Loadable({
  loader: () => import('./TablePage'),
  loading: Loading,
});
