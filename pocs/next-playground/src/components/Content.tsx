interface Props {
    children: React.ReactNode;
}

export const Content = ({ children }: Props) => {
    return <main className="flex flex-col gap-4">{children}</main>;
};
