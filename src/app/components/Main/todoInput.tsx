import React, { useState } from 'react';

//types
import { statusType } from '@/types/maintypes/todoTypes';

const TodoInput = () => {
    const statusArr: statusType[] = [
        {
            statusId: 0,
            status: "未着手",
            selected: true
        },
        {
            statusId: 1,
            status: "着手中",
            selected: false
        },
        {
            statusId: 2,
            status: "完了",
            selected: false
        }
    ];

    //状態管理
    const [statuses, setStatuses] = useState<statusType[]>(statusArr);

    const handleStatus = (state: statusType, index: number) => {
        const oldStatuses: statusType[] = [...statuses];

        const resetStatuses: statusType[] = oldStatuses.map((state) => (
            {
                ...state,
                selected: false
            }
        ));
        const newState: statusType = {
            ...state,
            selected: true
        };
        
        resetStatuses[index] = newState;
        const newStatuses: statusType[] = [...resetStatuses];

        setStatuses(newStatuses);
    };

    return (
        <>
        <section className='mt-4'>
            <h2 className='font-bold text-gray-800'>
                新しいタスクを登録
            </h2>
            <div className='py-2'>
                <input 
                className='border rounded-full w-full px-4 py-2 text-sm'
                type="text" 
                />
                <span className='text-xs pl-2 text-gray-400'>
                    ※ Enterで登録できます
                </span>
                <div className='mt-4'>
                    <span
                    className={`block text-sm mb-2 relative`}
                    >
                        ステータス
                    </span>
                    <ul className='flex'>
                        {
                            statuses.map((state, index) => (
                                <li 
                                key={index}
                                className={`mr-2 py-2 px-4 
                                ${state.selected ? "bg-gray-900 text-white" : ""}
                                text-sm border rounded-full border-gray-800
                                hover:cursor-pointer hover:bg-gray-900 hover:text-white
                                transition-all`}
                                onClick={() => handleStatus(state, index)}
                                >
                                    {state.status}
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </section>      
        </>
    )
}

export default TodoInput;