interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <div className="w-full max-w-3xl mx-auto" data-debug="Layout">
      {children}
    </div>
  );
};

export default Layout;
