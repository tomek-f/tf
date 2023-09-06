interface Props {
    children: React.ReactNode;
    legend: string;
}

const Fieldset = ({ children, legend }: Props) => {
    return (
        <fieldset className="border-2 p-2">
            <legend>{legend}</legend>
            {children}
        </fieldset>
    );
};

export default Fieldset;
