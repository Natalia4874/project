'use client'

import { useEffect, useState } from 'react'

import { ApiResponse } from '@/interfaces'
import { NextPage } from 'next'

import { ChevronLeftIcon, ChevronRightIcon } from '../Icons/Icons'
import { TableItem } from '../TableItem/TableItem'

const Table: NextPage = () => {
  const [data, setData] = useState<ApiResponse | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth())

  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ]
  const getVisibleMonths = () => {
    return Array.from({ length: 6 }).map((_, i) => {
      const monthIndex = (currentMonth + i) % 12
      return {
        name: months[monthIndex],
        monthIndex,
        key: monthIndex
      }
    })
  }

  const handlePrevMonth = () => {
    setCurrentMonth((prev) => (prev - 1 + 12) % 12)
  }

  const handleNextMonth = () => {
    setCurrentMonth((prev) => (prev + 1) % 12)
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://3snet.co/js_test/api.json')
        if (!response.ok) throw new Error('Network response was not ok')
        const result = await response.json()
        setData(result)
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Unknown error')
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  const visibleMonths = getVisibleMonths()

  if (loading) return <div className="p-4 text-center">Loading...</div>
  if (error)
    return <div className="p-4 text-center text-red-500">Error: {error}</div>
  if (!data) return <div className="p-4 text-center">No data found</div>

  return (
    <>
      <div className="flex items-center justify-end mb-6 gap-3">
        <button
          onClick={handlePrevMonth}
          className="p-1 border border-gray-300 rounded cursor-pointer"
        >
          <ChevronLeftIcon />
        </button>
        <button
          onClick={handleNextMonth}
          className="p-1 border border-gray-300 rounded cursor-pointer"
        >
          <ChevronRightIcon />
        </button>
      </div>

      <div className="flex w-ful flex-col border-t border-r border-l border-blue-200">
        <div className="flex bg-blue-50 border-b border-blue-200">
          <div className="p-3 min-w-[200px] flex-1" />
          <div className="p-3 border-l border-blue-200 w-[150px]" />
          {visibleMonths.map((month, index) => (
            <TableItem
              key={month.key}
              item={month}
              type="header"
              isActive={index === 0}
              isNext={index === 1}
            />
          ))}
        </div>

        {data.data.table.map((admin) => (
          <div
            key={`admin-${admin.id}`}
            className="flex border-b border-blue-200"
          >
            <div className="p-3 min-w-[200px] flex-1 text-blue-900 font-semibold">
              {admin.adminName}
            </div>
            <div className="border-l border-blue-200 w-[150px] text-gray-400">
              <div className="p-3 border-b border-blue-200">Income</div>
              <div className="p-3">Active Partners</div>
            </div>
            {visibleMonths.map((month, index) => (
              <TableItem
                key={month.key}
                item={month}
                isActive={index === 0}
                isNext={index === 1}
                planIncome={
                  data.data.total[
                    month.monthIndex
                  ]?.plan.income.toLocaleString() || '-'
                }
                planPartners={
                  data.data.total[
                    month.monthIndex
                  ]?.plan.activePartners.toLocaleString() || '-'
                }
                factIncome={
                  data.data.total[
                    month.monthIndex
                  ]?.fact.income.toLocaleString() || '-'
                }
                factPartners={
                  data.data.total[
                    month.monthIndex
                  ]?.fact.activePartners.toLocaleString() || '-'
                }
              />
            ))}
          </div>
        ))}
      </div>
    </>
  )
}

export { Table }
