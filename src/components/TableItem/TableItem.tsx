import { iTableItemProps } from '@/interfaces'

const TableItem = ({
  item,
  type = 'default',
  planIncome,
  planPartners,
  factIncome,
  factPartners,
  isActive = false,
  isNext = false
}: iTableItemProps) => {
  const content = typeof item === 'string' ? item : item.name

  const headerColorClass = isActive
    ? 'text-blue-900 font-semibold'
    : isNext
      ? 'text-blue-900 font-semibold'
      : 'text-gray-400'

  const textColorClass = isActive
    ? 'text-black font-medium'
    : isNext
      ? 'text-black font-medium'
      : 'text-gray-400'

  return (
    <>
      {type === 'header' ? (
        <div className="p-3 border-l border-blue-200 w-[150px]">
          <div className={headerColorClass}>{content}</div>
          <div className="grid grid-cols-2 text-gray-400">
            <div>Plan</div>
            <div>Fact</div>
          </div>
        </div>
      ) : (
        <div className={`border-l border-blue-200 w-[150px] ${textColorClass}`}>
          <div className="p-3">
            <div className="grid grid-cols-2">
              <div>{planIncome}</div>
              <div>{planPartners}</div>
            </div>
          </div>
          <div className="p-3">
            <div className="grid grid-cols-2">
              <div>{factIncome}</div>
              <div>{factPartners}</div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export { TableItem }
