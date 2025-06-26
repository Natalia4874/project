interface MonthData {
  income: number
  activePartners: number
  plan: {
    income: number
    activePartners: number
  }
  fact: {
    income: number
    activePartners: number
  }
}

interface AdminData {
  id: number
  adminId: number
  adminName: string
  months: (MonthData | null)[]
  year: number
}

interface ApiResponse {
  success: boolean
  data: {
    total: {
      fact: {
        income: number
        activePartners: number
      }
      plan: {
        income: number
        activePartners: number
      }
    }[]
    table: AdminData[]
  }
}

interface iTableItemProps {
  item: string | { name: string; monthIndex: number; key: string | number }
  type?: 'header' | 'default'
  planIncome?: string
  planPartners?: string
  factIncome?: string
  factPartners?: string
  isActive?: boolean
  isNext?: boolean
}

export type { ApiResponse, iTableItemProps }
