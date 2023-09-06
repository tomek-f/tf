interface Props {
    children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
    return (
        <div className="w-full max-w-screen-3xl mx-auto" data-debug="Layout">
            {children}
        </div>
    );
};

export default Layout;
