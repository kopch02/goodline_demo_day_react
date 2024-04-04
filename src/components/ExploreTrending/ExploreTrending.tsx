import { useEffect, useState } from 'react'

import { getItem } from '../../api/api'
import { ITrendingItem } from '../../types/types'
import { TrendingItem } from '../TrendingItem/TrendingItem'
import s from './ExploreTrending.module.scss'

export const ExploreTrending = () => {
  const [trendingData, setTrendingData] = useState<ITrendingItem[]>([])

  const fetchItems = async () => {
    try {
      setTrendingData(await getItem())
    } catch (error) {
      throw new Error('Ошибка')
    }
  }

  useEffect(() => {
    fetchItems()
  }, [])

  return (
    <div className={s.explore_trending}>
      <ul className={s.trending__list}>
        {trendingData.map((item) => (
          <TrendingItem
            key={item.id}
            item={item}
          />
        ))}
      </ul>
    </div>

  )
}
