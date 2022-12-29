import { useEffect, useRef, useState } from 'react';
import '../../sass/SassComponents/numberSlider.css';

export default function NumberSlider() {

    let counter = 0;

    const [numbers, setNumbers]: any = useState<number[]>([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

    const numberSlidingFunctionNext = (numberValue?: number): void => {
        let firstElement = numbers.shift();
        numbers.push(firstElement);
        setNumbers((prev: any) => {
            return [...numbers]
        });
    }

    const numberSlidingFunctionPrev = (numberValue?: number): void => {
        let poppedNumber = numbers.pop();
        numbers.unshift(poppedNumber);
        setNumbers((prev: any) => {
            return [...numbers];
        })
    }


    return (
        <div className="number-slider-super">
            <div className="number-slides">
                <>
                    <button
                        className="before"
                        onClick={e => {
                            numberSlidingFunctionPrev();
                        }}
                    >
                        &#10594;
                    </button>
                </>
                {
                    numbers.map((item: any) => {
                        counter++;
                        if (counter < 4) {
                            return (
                                <span
                                    key={item}
                                    className='number-counter'
                                    id={item.toString()}
                                >
                                    {item}
                                </span>
                            )
                        }
                    }
                    )
                }
                <button
                    className="after"
                    onClick={e => {
                        numberSlidingFunctionNext();
                    }}
                >
                    &#10596;
                </button>
            </div>
        </div>
    );
}