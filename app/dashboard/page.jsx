// "use client";

// import {
//     Card,
//     CardContent,
//     CardDescription,
//     CardFooter,
//     CardHeader,
//     CardTitle,
// } from "@/components/ui/card"

// function DashboardPage() {
//     return (
//         <div className='flex flex-col gap-4 p-6'>
//             <div className='flex flex-row justify-center gap-10 '>
//                 <Card className='w-80 bg-blue-400 rounded-lg shadow-md p-1 transition-transform duration-300 ease-in-out hover:scale-105'>
//                     <CardHeader>
//                         <CardTitle className="text-white font-bold text-2xl text-center">Total Movies</CardTitle>
//                         <CardDescription>Card Description</CardDescription>
//                     </CardHeader>
//                     <CardContent>
//                         <p>Card Content</p>
//                     </CardContent>
//                     <CardFooter>
//                         <p>Card Footer</p>
//                     </CardFooter>
//                 </Card>
//                 <Card className='w-80 bg-green-400 rounded-lg shadow-md p-1 transition-transform duration-300 ease-in-out hover:scale-105'>
//                     <CardHeader>
//                         <CardTitle className="text-white font-bold text-2xl text-center">Total Users</CardTitle>
//                         <CardDescription>Card Description</CardDescription>
//                     </CardHeader>
//                     <CardContent>
//                         <p>Card Content</p>
//                     </CardContent>
//                     <CardFooter>
//                         <p>Card Footer</p>
//                     </CardFooter>
//                 </Card>
//                 <Card className='w-80 bg-orange-400 rounded-lg shadow-md p-1 transition-transform duration-300 ease-in-out hover:scale-105'>
//                     <CardHeader>
//                         <CardTitle className="text-white font-bold text-2xl text-center">Card Title</CardTitle>
//                         <CardDescription>Card Description</CardDescription>
//                     </CardHeader>
//                     <CardContent>
//                         <p>Card Content</p>
//                     </CardContent>
//                     <CardFooter>
//                         <p>Card Footer</p>
//                     </CardFooter>
//                 </Card>
//             </div>
//             <div>
//                 dashboard
//             </div>
//         </div>
//     )
// }

// export default DashboardPage
"use client";

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

function DashboardPage() {
    return (
        <div className='flex flex-col gap-4 p-6'>
            {/* Cards Container */}
            <div className='flex flex-col md:flex-row justify-center gap-4 md:gap-10'>
                {/* Card 1 */}
                <Card className='w-full md:w-80 bg-blue-400 rounded-lg shadow-md p-1 transition-transform duration-300 ease-in-out hover:scale-105'>
                    <CardHeader>
                        <CardTitle className="text-white font-bold text-2xl text-center">Total Movies</CardTitle>
                        <CardDescription className="text-center">Card Description</CardDescription>
                    </CardHeader>
                    <CardContent className="text-center">
                        <p>Card Content</p>
                    </CardContent>
                    <CardFooter className="text-center">
                        <p>Card Footer</p>
                    </CardFooter>
                </Card>

                {/* Card 2 */}
                <Card className='w-full md:w-80 bg-green-400 rounded-lg shadow-md p-1 transition-transform duration-300 ease-in-out hover:scale-105'>
                    <CardHeader>
                        <CardTitle className="text-white font-bold text-2xl text-center">Total Users</CardTitle>
                        <CardDescription className="text-center">Card Description</CardDescription>
                    </CardHeader>
                    <CardContent className="text-center">
                        <p>Card Content</p>
                    </CardContent>
                    <CardFooter className="text-center">
                        <p>Card Footer</p>
                    </CardFooter>
                </Card>

                {/* Card 3 */}
                <Card className='w-full md:w-80 bg-orange-400 rounded-lg shadow-md p-1 transition-transform duration-300 ease-in-out hover:scale-105'>
                    <CardHeader>
                        <CardTitle className="text-white font-bold text-2xl text-center">Card Title</CardTitle>
                        <CardDescription className="text-center">Card Description</CardDescription>
                    </CardHeader>
                    <CardContent className="text-center">
                        <p>Card Content</p>
                    </CardContent>
                    <CardFooter className="text-center">
                        <p>Card Footer</p>
                    </CardFooter>
                </Card>
            </div>

            {/* Dashboard Section */}
            <div className="mt-6">
                <h2 className="text-2xl font-bold text-center">Dashboard</h2>
            </div>
        </div>
    );
}

export default DashboardPage;