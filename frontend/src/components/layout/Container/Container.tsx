const Container = ({
  children,
  children,
}: Readonly<{
  children: React.ReactNode
}>) => (
  <div className='container mx-auto flex items-center justify-between py-6 px-4 lg:px-0'>
    {children}
  </div>
)

export default Container
