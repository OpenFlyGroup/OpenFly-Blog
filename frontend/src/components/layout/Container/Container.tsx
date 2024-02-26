const Container = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="container mx-auto flex items-center justify-between py-6 px-4 lg:px-0">
      {children}
    </div>
  );
};

export default Container;
