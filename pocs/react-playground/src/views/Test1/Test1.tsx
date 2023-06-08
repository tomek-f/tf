const Test = () => {
  const onClick = async () => {
    await import('REACT_PG/testCode/arrowFunc');
    await import('REACT_PG/testCode/AbstractClass');
    await import('REACT_PG/testCode/enums');
    await import('REACT_PG/testCode/generics');
    await import('REACT_PG/testCode/global');
  };

  return (
    <button onClick={onClick} type="button">
      load test
    </button>
  );
};

export default Test;
