import React from 'react';
import Coursecard from '../../components/CourseCard/Coursecard';

const Course = ({ products, onAdd, onRemove }) => {
  return (
    <div className='row'>
      {products.map((product) => (
        <Coursecard
          key={product.id}
          course={product} 
          onAdd={onAdd}
          onRemove={onRemove}
        />
      ))}
    </div>
  );
}

export default Course;
