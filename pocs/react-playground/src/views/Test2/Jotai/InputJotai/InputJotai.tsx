import { useAtom } from 'jotai';

import Fieldset from 'REACT_PG/components/Fieldset/Fieldset';
import Input from 'REACT_PG/components/Input/Input';
import { textAtom } from 'REACT_PG/jotai';

const InputJotai = () => {
    const [text, setText] = useAtom(textAtom);
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) =>
        setText(event.target.value);

    return (
        <Fieldset legend="Input">
            <div className="flex flex-wrap items-center gap-2">
                {Math.random()}
                <Input onChange={handleChange} value={text} />
            </div>
        </Fieldset>
    );
};

export default InputJotai;
