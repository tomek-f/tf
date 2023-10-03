interface Props {
    children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
    return (
        <div className="max-w-screen-3xl mx-auto w-full" data-debug="Layout">
            {children}
        </div>
    );
};

export default Layout;
