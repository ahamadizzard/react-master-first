"use client";

function DashboardPage() {
    return (
        <div className='flex flex-col gap-4 p-6'>
            <div className='flex flex-row justify-between gap-4 p-6'>
                <div className='flex items-center bg-amber-600 justify-between gap-2 border-b px-6 shadow-sm h-48 w-80 rounded-lg'>
                    <h1>Total Movies</h1>
                </div>
                <div className='flex items-center bg-blue-400 justify-between gap-2 border-b px-6 shadow-sm h-48 w-80 rounded-lg'>
                    <h1>Dashboard</h1>
                </div>
                <div className='flex items-center bg-green-200 justify-between gap-2 border-b px-6 shadow-sm h-48 w-80 rounded-lg'>
                    <h1>Dashboard</h1>
                </div>

            </div>
            <div>
                dashboard
            </div>
        </div>
    )
}

export default DashboardPage