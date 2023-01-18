import PropTypes from 'prop-types';
import clsx from 'clsx';
import format from 'date-fns/format';
import css from './CryptoHistory.module.css';

import { BaseTable, THead, Th, Tr, Td } from './CryptoHistory.styled';

export const CryptoHistory = ({ items }) => {
  console.log(
    clsx(css.base, {
      rejectA: true,
      loadingA: false,
      successA: false,
    }),
  );
  return (
    <BaseTable>
      <THead>
        <tr>
          <Th>№</Th>
          <Th>PRICE</Th>
          <Th>AMOUNT</Th>
          <Th>DATE</Th>
          <Th>STATUS</Th>
        </tr>
      </THead>

      <tbody>
        {items.map(({ id, price, amount, date, status }, index) => (
          <Tr price={price} key={id}>
            <Td>{index + 1}</Td>
            <Td>{price}</Td>
            <Td>{amount}</Td>
            <Td>{format(new Date(date), 'MM/dd/yyyy, HH:mm')}</Td>
            <Td>
              <span
                className={clsx(css.base, {
                  [css.rejectA]: status === 'reject',
                  [css.loadingA]: status === 'loading',
                  [css.successA]: status === 'success',
                })}
              >
                {status}
              </span>
            </Td>
          </Tr>
        ))}
      </tbody>
    </BaseTable>
  );
};

CryptoHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.number,
      price: PropTypes.number,
      amount: PropTypes.number,
      date: PropTypes.string,
      status: PropTypes.string,
    }),
  ).isRequired,
};
