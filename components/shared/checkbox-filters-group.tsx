'use client';

import React, { useState } from 'react'
import { FilterChecboxProps, FilterCheckbox } from './filter-checkbox'
import { Input } from '../ui'

type Item = FilterChecboxProps

interface Props {
  title: string
  items: Item[]
  defaultItems: Item[]
  limit?: number
  searchInputPlaceholder?: string
  onChange?: (values: string[]) => void
  defaultValue?: string[]
  className?: string
}

export const CheckboxFiltersGroup: React.FC<Props> = ({ title, items, defaultItems, limit = 5, searchInputPlaceholder = "Search...", className, onChange, defaultValue }) => {
  const [showAll, setShowAll] = useState(false)
  const [searchValue, setSearchValue] = useState('')

  const list = showAll ? items.filter((item) => item.text.toLowerCase().includes(searchValue.toLowerCase())) : defaultItems?.slice(0, limit)

  const onChangeSearchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value)
  }

  return (

    <div className={className}>
      <p className='font-bold mb-3'>{title}</p>

      <div className='mb-5'>
        {
          showAll ?
            <Input onChange={onChangeSearchInput} placeholder={searchInputPlaceholder} className='bg-gray-50 border-none' />
            : ''
        }
      </div>

      <div className='flex flex-col gap-4 max-h-96 pr-2 overflow-auto scrollbar' >
        {list.map((item, index) => (
          <FilterCheckbox key={index} text={item.text} value={item.value} endAdornment={item.endAdornment} checked={false} onCheckedChange={(ids) => console.log(ids)} />
        ))}
      </div>
      {items.length > limit && (
        <div className={showAll ? 'border-t border-t-neutral-100 mt-4' : ''}>
          <button onClick={() => setShowAll(!showAll)} className='text-primary mt-3'>
            {showAll ? 'Hide' : '+ show all'}
          </button>
        </div>
      )}
    </div>
  )
}
