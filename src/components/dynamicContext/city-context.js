import React from 'react'

export const CityList = [
  {
    A: '安庆',
    B: '北京',
    C: '池州',
    D: '大连'
  },
  ['A', 'B', 'C', 'D']
]
export const CityContext = React.createContext(CityList[0].A)
