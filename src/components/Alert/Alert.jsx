import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import './Alert.css';
const MySwal = withReactContent(Swal);

const alertClass = 'my-alert-class' ;

export { MySwal, alertClass };

