import React, { useState } from 'react';
import Coursecard from '../../components/CourseCard/Coursecard';


const Course = ({ products, onAdd, onRemove }) => {
  const [searchTerm, setSearchTerm] = useState("");

  // Funkcija za filtriranje kurseva po imenu
  const filteredCourses = products.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container">
      {/* Pretraga u gornjem desnom uglu */}
      <div className="row" style={{ justifyContent: 'flex-end', marginBottom: '20px' }}>
        <input
          type="text"
          placeholder="Search courses"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="input"
        />
      </div>

      {/* Prikaz filtriranih kurseva */}
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