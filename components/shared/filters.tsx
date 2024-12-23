'use client'

import React from 'react'
import { Title } from './title'
import { CheckboxFiltersGroup, RangeSlider } from '.'
import { Input } from '../ui'
import { useIngredients, useFilters, useQueryFilters } from '@/hooks'

interface Props {
  className?: string
}


export const Filters: React.FC<Props> = ({ className }) => { 
  const { ingredients, loading } = useIngredients();
  const filters = useFilters();
  useQueryFilters(filters)
  const items = ingredients.map(item => ({ value: String(item.id), text: item.name }))

  const updatePrices = (prices: number[]) => {
    filters.setPrices('priceFrom', prices[0])
    filters.setPrices('priceTo', prices[1])
  }

  return (
    <div className={className}>
      <Title text="Фильтрация" size="sm" className="mt-5 font-bold" />

      <CheckboxFiltersGroup title="Тип теста" name="pizzaTypes" className='mb-5' limit={6} loading={loading}
        items={[
          { text: 'Тонкое', value: '1' },
          { text: 'Традиционное', value: '2' },
        ]} onCLickCheckbox={filters.setPizzaTypes} selectedValues={filters.pizzaTypes} />

      <CheckboxFiltersGroup title="Размеры" name="sizes" className='mb-5' limit={6} loading={loading}
        items={[
          { text: '20 см', value: '20' },
          { text: '30 см', value: '30' },
          { text: '40 см', value: '40' }
        ]} onCLickCheckbox={filters.setSizes} selectedValues={filters.sizes} />

      <div className='mt-5 border-y border-y-neutral-100 py-6 pb-7'>
        <p className='font-bold nb-3'>Цена с по </p>
        <div className='flex mb-5 gap-3'>
          <Input type="number" placeholder="0" min={0} max={30000} value={String(filters.prices.priceFrom || '')} onChange={(e) => filters.setPrices('priceFrom', Number(e.target.value))} />
          <Input type="number" placeholder="30000" value={String(filters.prices.priceTo || '1000')} min={100} max={30000} onChange={(e) => filters.setPrices('priceTo', Number(e.target.value))} />
        </div>
        <RangeSlider min={0} max={1000} step={10} value={[filters.prices.priceFrom || 0, filters.prices.priceTo || 1000]} onValueChange={updatePrices} />
      </div>

      <CheckboxFiltersGroup title="Ингредиенты" name="ingredients" className='mt-5' limit={6} loading={loading}
        defaultItems={items.slice(0, 6)} items={items} onCLickCheckbox={filters.setSelectedIngredients} selectedValues={filters.selectedIngredients} />
    </div>
  )
}
