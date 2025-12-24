import React from 'react'
import CategoryCard from './CategoryCard'


const categories = [
  {
    id: 1,
    title: "Electronics",
    image: "/categories/electronics.png",
  },
  {
    id: 2,
    title: "Home Appliances",
    image: "/categories/appliances.png",
  },
  {
    id: 3,
    title: "Mobile Accessories",
    image: "/categories/mobiles.png",
  },
  {
    id: 4,
    title: "LED Lights",
    image: "/categories/lights.png",
  },
];

const CategoriesGrid = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {categories.map((item) => (
        <CategoryCard key={item.id} item={item} />
      ))}
    </div>
  )
}

export default CategoriesGrid