export default function PublicLayout ({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className='flex flex-col w-screen items-center justify-center h-screen'>
      <div className='w-full flex-1'>{children}</div>
      <footer className='text-xs text-gray-500'>
        <p>© {new Date().getFullYear()} jp3gs</p>
      </footer>
    </div>
  )
}
