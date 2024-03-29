import React from 'react'

const Header = () => {
    return (
        <header className='px-8 h-[68px] bg-sky-400 flex justify-between items-center'>
            <div className='flex items-center'>
                <svg className="w-6 h-6 text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                    <path d="M9 1.334C7.06.594 1.646-.84.293.653a1.158 1.158 0 0 0-.293.77v13.973c0 .193.046.383.134.55.088.167.214.306.366.403a.932.932 0 0 0 .5.147c.176 0 .348-.05.5-.147 1.059-.32 6.265.851 7.5 1.65V1.334ZM19.707.653C18.353-.84 12.94.593 11 1.333V18c1.234-.799 6.436-1.968 7.5-1.65a.931.931 0 0 0 .5.147.931.931 0 0 0 .5-.148c.152-.096.279-.235.366-.403.088-.167.134-.357.134-.55V1.423a1.158 1.158 0 0 0-.293-.77Z"/>
                </svg>
                <h1 className='text-xl tracking-tighter ml-2 pb-1'>Todoアプリ</h1>
            </div>
            <div>
                <button className='py-2 px-4 bg-stone-50 rounded-full hover:bg-stone-200 transition-all'>
                    <p className='text-sm'>
                        ログイン
                    </p>
                </button>
            </div>
        </header>
    )
}

export default Header