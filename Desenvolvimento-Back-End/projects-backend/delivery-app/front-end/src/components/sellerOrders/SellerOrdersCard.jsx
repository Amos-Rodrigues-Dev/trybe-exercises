import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import socket from '../../api/socketClient';

const colorDic = {
  pendente: '#D3C63C',
  entregue: '#3BD5B0',
  preparando: '#87D53C',
};

function SellerOrdersCard({ order, setSales }) {
  const orderLower = order.status.toLowerCase();
  const datePt = new Date(order.saleDate).toLocaleDateString('pt-br');
  const pricePt = order.totalPrice.replace('.', ',');
  const color = colorDic[orderLower];
  const history = useHistory();

  useEffect(() => {
    if (!order.id) return;
    const socketRefresh = (status) => {
      setSales((sales) => {
        const newSales = sales.map((sale) => {
          if (sale.id !== order.id) return sale;
          return { ...sale, status };
        });
        return newSales;
      });
    };
    socket.emit('joinRoom', { id: order.id });
    socket.on('refreshStatus', socketRefresh);
  }, [order.id, setSales]);

  return (
    <div
      className="seller-order-card"
      aria-hidden="true"
    >
      <div className="order">
        <p>Pedido</p>
        <button
          type="button"
          className="number"
          data-testid={ `seller_orders__element-order-id-${order.id}` }
          onClick={ () => history.push(`/seller/orders/${order.id}`) }
        >
          {order.id}
        </button>
      </div>
      <div className="seller-info">
        <div className="basic">
          <div className="status" style={ { backgroundColor: color } }>
            <button
              type="button"
              data-testid={ `seller_orders__element-delivery-status-${order.id}` }
              onClick={ () => history.push(`/seller/orders/${order.id}`) }
            >
              {order.status}
            </button>
          </div>
          <div className="info">
            <p data-testid={ `seller_orders__element-order-date-${order.id}` }>
              {datePt}
            </p>
            <p>{`R$ ${pricePt}`}</p>
          </div>
        </div>
        <p className="address">{`${order.deliveryAddress}, ${order.deliveryNumber}`}</p>
      </div>
    </div>
  );
}

export default SellerOrdersCard;

SellerOrdersCard.propTypes = {
  order: PropTypes.shape({
    deliveryAddress: PropTypes.string,
    deliveryNumber: PropTypes.string,
    totalPrice: PropTypes.string,
    saleDate: PropTypes.string,
    status: PropTypes.string,
    id: PropTypes.number,
  }).isRequired,
  setSales: PropTypes.func.isRequired,
};
