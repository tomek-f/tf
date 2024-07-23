interface Props {
    children: React.ReactNode;
}

export const Layout = ({ children }: Props) => {
    return (
        <div className="mx-auto max-w-7xl" data-debug="Layout">
            {children}
        </div>
    );
};
