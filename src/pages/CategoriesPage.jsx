import React from 'react'
import CategoriesGrid from '../components/Categories/CategoriesGrid'
import CategoriesHero from '../components/Categories/CategoriesHero'

const CategoriesPage = () => {
  return (
    <div className="min-h-screen bg-[#f4f5f7]">
      {/* Hero Section */}
      <CategoriesHero />
      <div className="max-w-[1440px] mx-auto px-4 lg:px-[68px] py-10">
        <h1 className="text-[28px] font-semibold mb-8">Categories</h1>
        <CategoriesGrid />
      </div>
    </div>
  )
}

export default CategoriesPage
