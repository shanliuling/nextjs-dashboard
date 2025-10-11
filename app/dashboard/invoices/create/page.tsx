import Form from '@/app/ui/invoices/create-form'
import Breadcrumbs from '@/app/ui/invoices/breadcrumbs'
import { fetchCustomers } from '@/app/lib/data'

export default async function Page() {
  const customers = await fetchCustomers()

  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Invoices', href: '/dashboard/invoices' },
          {
            label: 'Create Invoice',
            href: '/dashboard/invoices/create',
            active: true,
          },
        ]}
      />
      <Form customers={customers} />
    </main>
  )
}
// 这个页面组件是一个异步函数，利用 Next.js 13 的服务器组件特性来预取数据
// 它调用 fetchCustomers 函数来获取客户数据，并将其传递给 Form 组件以供选择客户
// Breadcrumbs 组件用于显示导航路径，提升用户体验
// 整个页面布局简洁，专注于创建发票的功能
