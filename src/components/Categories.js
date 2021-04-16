import React from "react";

const Categories = ({ categories, setCategorie }) => {
  return (
    <div>
      <select
        name="category-selector"
        id="category-selector"
        onChange={(e) => setCategorie(e.target.value)}
      >
        {categories.map((cat) => (
          <option key={cat} value={cat}>
            {cat}
          </option>
        ))}
      </select>
      <button onClick={() => setCategorie(categories)}>Réinitialiser</button>
    </div>
  );
};

export default Categories;
