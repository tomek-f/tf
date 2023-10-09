const onClick = async () => {
    await import('REACT_PG/testCode/arrow-functions');
    await import('REACT_PG/testCode/AbstractClass');
    await import('REACT_PG/testCode/enums');
    await import('REACT_PG/testCode/generics');
    await import('REACT_PG/testCode/global');
};

const Test = () => {
    return (
        <button onClick={onClick} type="button">
            load test
        </button>
    );
};

export default Test;
