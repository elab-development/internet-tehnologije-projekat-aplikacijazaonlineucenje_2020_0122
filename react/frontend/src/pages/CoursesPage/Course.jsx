import React, { useState } from 'react';
import Coursecard from '../../components/CourseCard/Coursecard';


const Course = ({ products, onAdd, onRemove }) => {
  const [searchTerm, setSearchTerm] = useState("");

  
  const filteredCourses = products.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container">
      
      <div className="row" style={{ justifyContent: 'flex-end'}}>
        <input
          type="text"
          placeholder="Search courses"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="input"
        />
      </div>

      <div className="row">
        {filteredCourses.map((product) => (
          <Coursecard
            key={product.id}
            course={product}
            onAdd={onAdd}
            onRemove={onRemove}
          />
        ))}
      </div>
    </div>
  );
};

export default Course;