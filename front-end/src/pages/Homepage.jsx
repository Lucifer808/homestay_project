import React from 'react'
import CategoryList from '../components/layout/Home/CategoryList'
import DiscountBanner from '../components/layout/Home/DiscountBanner'
import RecommendList from '../components/layout/Home/RecommendList'
import SearchNavigation from '../components/layout/Home/SearchNavigation'
import TrendingList from '../components/layout/Home/TrendingList'

const Homepage = () => {
  return (
    <>
        <SearchNavigation />
        <DiscountBanner />
        <CategoryList />
        <TrendingList />
        <RecommendList />
    </>
  )
}

export default Homepage