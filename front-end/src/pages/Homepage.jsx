import React from 'react'
import CategoryList from '../components/layout/Home/CategoryList'
import DiscountBanner from '../components/layout/Home/DiscountBanner'
import SearchNavigation from '../components/layout/Home/SearchNavigation'

const Homepage = () => {
  return (
    <>
        <SearchNavigation />
        <DiscountBanner />
        <CategoryList />
    </>
  )
}

export default Homepage