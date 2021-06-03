import React from 'react';
import { setTracingShipments } from '../../../actions/shipmentActions';
import { useDispatch } from 'react-redux';
import alert from '../../../assets/icons/alert.png';
import location from '../../../assets/icons/CurrentLocationWhite.svg';
import previous from '../../../assets/icons/previous.png';
import next from '../../../assets/icons/next.png';
import user from '../../../assets/icons/user.svg';
import { Link } from 'react-router-dom';
import { formatDate } from '../../../utils/dateHelper';
import Pagination from '@material-ui/lab/Pagination';
import './style.scss';

const Table = props => {
  const {ordrs, visible } = props;
  const orders = ordrs();
  const handlePageChange  = (event, value) => {
    props.onPageChange(value)
  };
  console.log(orders);
  return (
    <div className="table pr-1">
        <div className="rTable">
          <div className="">
          {orders.length == 0 && <div className="rTableRow pt-2 pb-2 justify-content-center text-muted shadow-none">No records found</div>}
          {orders.map((order, index) => {
              let statusStyle = 'bg-primary';
              let status = order.poStatus;
              if (order.poStatus === 'CREATED') {
                status = visible == 'one' ? 'Sent' : 'Received';
              }
              else if (order.poStatus === 'Received') {
                statusStyle = 'bg-info';
                status = 'Received';
              }
              else if (order.poStatus === 'ACCEPTED') {
                statusStyle = 'bg-success';
                status = 'Accepted';
              }else if (order.poStatus === 'REJECTED') {
                statusStyle = 'bg-warning';
                status = 'Rejected';
              }
              else if (order.poStatus === 'TRANSIT&FULLYFULFILLED') {
                statusStyle = 'bg-secondary';
                status = 'Transit&FullyFilled';
              }
              else if (order.poStatus === 'FULLYFULFILLED') {
                statusStyle = 'bg-secondary';
                status = 'FullyFilled';
              }

              const { customer, products, supplier } = order;

              return (
              <div className="rTableRow pt-2 pb-2 shadow-none" key={index}>
                <div className="rTableCell">
                  <div className="userPic text-right rounded d-flex flex-row">
                    <img src={user} width="30" height="20" alt="User" className="rounded mr-1 align-self-center" />
                    <div className="flex-column d-flex">
                      <span className="text-primary bold">{visible == 'one' ? supplier.organisation.name : customer.organisation.name}</span>
                      <p className="address mb-0 text-primary">{visible == 'one' ? supplier.organisation.id : customer.organisation.id}</p>
                  </div>
                  </div>
                </div>
                <div className="rTableCell">
                  {formatDate(order.creationDate)}
                </div>
                  <div className="rTableCell"><p className="mb-0 bold address mb-0 text-muted">{order.id}</p></div>
                  <div className="rTableCell mr-4"><p className="mb-0 bold mb-0 address text-muted">{products[0]?.name+(products.length > 1 ? ' + '+(products.length-1)+' more' : '')}</p></div> 
                <div className="rTableCell d-flex flex-column mr-4"> 
                  <span>{customer.warehouse?.warehouseAddress?.city}</span>
                  <span className="text-muted">{customer.shippingAddress.shippingAddressId}</span>
                </div> 
                <div className="rTableCell pl-5"> 
                
                <div className={`status secondary-bg ${statusStyle}`}>
                  {status} 
                </div>
                </div>
                <div >
                <div className="rTableCell">
                  <Link to={`/vieworder/${order.id}`}
                    className="button text-right">
                    View
                  </Link>
                  </div>
                </div>
              </div>
              )
            })}
          {orders?.length > 0 && (
            <div className="d-flex flex-row-reverse">
            <Pagination showFirstButton showLastButton color="primary" count={Math.ceil(props.count/10)} onChange={handlePageChange} />
            <span className="mx-5 my-1 rounded text-primary">Total Records {props.count} </span>
          </div> 
          )}
          </div>
        </div>
    </div>
  );
};

export default Table;
