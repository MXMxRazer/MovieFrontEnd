import { InjectEntityManager } from '@nestjs/typeorm';
import { useRef, useState } from 'react';
import '../../sass/SassComponents/filter.css';

export type Selector = {
    label: string;
    value: any;
}

type singleValue = {
    multiple?: false;
    options: Selector[];
    selected?: Selector;
    onValueChange: (selected?: Selector | undefined) => void;
}

type multiValue = {
    multiple: true;
    options: Selector[];
    selected: Selector[];
    onValueChange: (selected: Selector[]) => void;
}

type SelectProps = {
    increment: number | undefined;
} & (singleValue | multiValue);

export default function FilterBox({ multiple, options, selected, onValueChange, increment }: SelectProps) {

    const [hightLight, setHighLight]: [string[], any] = useState([]);

    const [open, setOpen] = useState(false);
    console.log(`${multiple ? 'multiple' : 'single'}: ${open}`);

    const setter = (para: boolean = false): void => {
        (para) ? setOpen(true) : setOpen(prev => !prev);
    }

    const clear = () => {
        (multiple) ? onValueChange([]) : onValueChange(undefined);
    }

    const selector = (item: Selector) => {
        if (multiple) {
            if (selected.includes(item)) {
                onValueChange(selected.filter(i => i !== item));
            } else {
                onValueChange([...selected, item]);
            }
        } else {
            if (item !== selected) onValueChange(item);
        }
    }

    const colorSelect = (item: Selector): boolean => {
        if (multiple) {
            if (selected.includes(item)) {
                return false;
            }
            return true;
        }
        return true;
    }

    return (
        <div
            // tabIndex={increment}
            onBlur={e => {
                setter(true);
            }}
            onClick={e => {
                setter();
            }}
            className={'filter-container'}
            style={{
                marginBottom: '8rem'
            }}
        >
            <div className="selected">
                {(multiple) ? selected.map(item => (
                    <button
                        key={item.value}
                        onClick={e => {
                            e.stopPropagation();
                            selector(item);
                        }
                        }
                    >
                        {item.label}
                    </button>
                )) :
                    selected?.label}
            </div>
            <span
                onClick={e => {
                    e.stopPropagation();
                    clear();
                }}
                className="cross">&times;</span>
            <div className="divider"></div>
            <div className="drop-down">&#10137;</div>
            <ul className={`${(open) ? 'showList' : 'listOfItems'}`}>
                {
                    options.map(item => {
                        return (
                            <li
                                onClick={e => {
                                    selector(item);
                                    setHighLight((prev: any): any => {
                                        return [
                                            ...prev,
                                            item.label
                                        ]
                                    })
                                    console.log(`HighLight: ${hightLight}`);
                                }}
                                key={item.label}
                                className={`${(colorSelect(item)) ? null : "highLight"}`}
                                id="items"
                            > {item.label}</li>
                        );
                    })
                }
            </ul>
        </div >
    )
}