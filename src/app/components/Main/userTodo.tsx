import React from 'react';

//types
import { statusType } from '@/types/maintypes/todoTypes';

const UserTodo = () => {
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

    return (
        <section className='mt-8'>
            <h2 className='font-bold text-gray-800'>
                あなたのタスク一覧
            </h2>
            <div className='relative pt-2 before:block before:w-full before:h-[1px] before:bg-gray-400 before:absolute before:bottom-0'>
                <ul className='flex'>
                    {
                        statusArr.map((state: statusType, index: number) => (
                            <li 
                            key={index}
                            className={`mr-2 px-4 py-2 text-sm cursor-pointer rounded-md relative transition-all
                            ${state.selected ? "after:bg-blue-400 text-blue-400" : ""}
                            after:block after:w-full after:h-[3px] after:absolute after:bottom-[-1px] after:left-0 after:transition-all
                            hover:after:bg-blue-400 hover:text-blue-400
                            `}
                            >
                                {state.status}
                            </li>
                        ))
                    }
                </ul>
            </div>
        </section>
    )
}

export default UserTodo;