/* eslint-disable react/prop-types */
import React from 'react';
import { useDispatch } from 'react-redux';
import { checkStatus } from '../redux/categories/categories';

function Categories({ categories }) {
  const dispatch = useDispatch();

  const openStatus = () => {
    dispatch(checkStatus());
  };

  return (
    <div className="status-btn">
      <button type="button" onClick={() => openStatus()}>Check Status</button>
      { categories }
    </div>
  );
}

Categories.defaultProps = {
  categories: [],
};

export default Categories;
