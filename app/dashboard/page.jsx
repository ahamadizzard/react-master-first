// import React from 'react'

import { getMovies } from '../libs/apis/server';
export default async function DashboardPage() {
    // 1. Add shadcn card component
    // 2. Create Movies GET endpoint
    // 3. Read a dummy response
    // 4. Render data set in the UI
    const { movies } = await getMovies();

    // console.log("Movies Data: " + JSON.stringify(movies));
    return (
        <main>
            {/* navbar section */}
            <nav className="bg-blue-300 w-full h-16 flex p-4 justify-start items-center">
                <div className="container">
                    <h1 className="text-4xl font-bold text-white">Mflix Dashboard</h1>

                </div>
            </nav>
            {/* body section */}
            <div className='container mt-8'>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2'>
                    {movies?.length &&
                        movies.map((movie) => (
                            <div key={movies.id} className='h-96 bg-gray-400 rounded-lg shadow-md p-8'>
                                {movie.title}
                            </div>
                        ))}
                </div>
            </div>
        </main>
    )
}
