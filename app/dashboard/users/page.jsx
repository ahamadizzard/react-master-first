// "use client";

// import { useState, useEffect } from "react";
// import {
//     createColumnHelper,
//     flexRender,
//     getCoreRowModel,
//     getPaginationRowModel,
//     useReactTable,
// } from "@tanstack/react-table";
// import { getAllUsers } from "@/lib/actions/users"; // Adjust the import as needed

// export default function UsersTable() {
//     const [users, setUsers] = useState([]);
//     const [searchText, setSearchText] = useState("");

//     useEffect(() => {
//         const fetchUsers = async () => {
//             const data = await getAllUsers();
//             setUsers(data);
//         };

//         fetchUsers();
//     }, []);

//     // Filtered users based on the search input
//     const filteredUsers = users.filter((user) =>
//         Object.values(user)
//             .join(" ")
//             .toLowerCase()
//             .includes(searchText.toLowerCase())
//     );

//     const columnHelper = createColumnHelper();

//     const columns = [
//         columnHelper.accessor("name", {
//             header: "Name",
//         }),
//         columnHelper.accessor("email", {
//             header: "Email",
//         }),
//         columnHelper.accessor("emailVerified", {
//             header: "Email Verified",
//         }),
//     ];

//     const table = useReactTable({
//         data: filteredUsers,
//         columns,
//         getCoreRowModel: getCoreRowModel(),
//         getPaginationRowModel: getPaginationRowModel(),
//     });

//     return (
//         <div className="p-4">
//             <h1 className="text-xl font-bold mb-4">Users Table</h1>

//             {/* Search Input */}
//             <div className="mb-4">
//                 <input
//                     type="text"
//                     placeholder="Search users..."
//                     value={searchText}
//                     onChange={(e) => setSearchText(e.target.value)}
//                     className="w-full px-3 py-2 border rounded"
//                 />
//             </div>

//             <table className="w-full border-collapse border border-gray-300">
//                 <thead className="bg-gray-800 text-white">
//                     {table.getHeaderGroups().map((headerGroup) => (
//                         <tr key={headerGroup.id}>
//                             {headerGroup.headers.map((header) => (
//                                 <th key={header.id} className="p-2 border">
//                                     {flexRender(header.column.columnDef.header, header.getContext())}
//                                 </th>
//                             ))}
//                         </tr>
//                     ))}
//                 </thead>
//                 <tbody>
//                     {table.getRowModel().rows.map((row) => (
//                         <tr key={row.id} className="hover:bg-gray-100">
//                             {row.getVisibleCells().map((cell) => (
//                                 <td key={cell.id} className="p-2 border">
//                                     {flexRender(cell.column.columnDef.cell, cell.getContext())}
//                                 </td>
//                             ))}
//                         </tr>
//                     ))}
//                 </tbody>
//             </table>

//             {/* Pagination Controls */}
//             <div className="mt-4 flex items-center gap-4">
//                 <button
//                     onClick={() => table.previousPage()}
//                     disabled={!table.getCanPreviousPage()}
//                     className="bg-gray-800 text-white px-3 py-1 rounded disabled:opacity-50"
//                 >
//                     Previous
//                 </button>
//                 <span>
//                     Page {table.getState().pagination.pageIndex + 1} of{" "}
//                     {table.getPageCount()}
//                 </span>
//                 <button
//                     onClick={() => table.nextPage()}
//                     disabled={!table.getCanNextPage()}
//                     className="bg-gray-800 text-white px-3 py-1 rounded disabled:opacity-50"
//                 >
//                     Next
//                 </button>
//             </div>
//         </div>
//     );
// }
"use client";

import { useEffect, useState } from "react";
import { getAllUsers } from "@/lib/actions/users"; // Adjust the path as needed
import { NotebookPen, Trash2 } from "lucide-react";

export default function UsersList() {
    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const fetchUsers = async () => {
            const data = await getAllUsers();
            setUsers(data);
        };

        fetchUsers();
    }, []);

    return (
        <div>
            <div className="container mx-auto p-4 ">

                <h1 className="text-2xl font-bold mb-4">Users List</h1>
                {isLoading ? (
                    <p>Loading Users...</p>
                ) : users.length === 0 ? (
                    <p>No Users found</p>
                ) : (
                    <table className="bg-white border border-gray-200 ">
                        <thead>
                            <tr className="bg-gray-100">
                                <th className="py-2 px-4 border">Name</th>
                                <th className="py-2 px-4 border">Email</th>
                                <th className="py-2 px-4 border">Email Verified</th>
                                <th className="py-2 px-4 border text-start">Edit / Delete User</th>

                            </tr>
                        </thead>
                        <tbody>
                            {users.map((user) => (
                                <tr key={user._id} className="text-center border-b">
                                    <td className="py-2 px-4">{user.name}</td>
                                    <td className="py-2 px-4">{user.email}</td>
                                    <td className="py-2 px-4">{user.emailVerified ? "✅" : "❌"}</td>
                                    <td className="py-2 px-4 ">
                                        <div className="flex flex-row items-end gap-2">
                                            <div className="flex items-center">
                                                <button className="bg-blue-500 flex w-24 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg" onClick={() => handleEdit(user._id)}> <NotebookPen /> &nbsp; Edit</button>
                                            </div>
                                            <div className="flex items-center">
                                                <button className="bg-red-500 flex w-26 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-lg ml-2" onClick={() => handleDelete(user._id)}><Trash2 />&nbsp; Delete</button>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
            </div>
            {/* <h1>Users List</h1>
            <ul>
                {users.map((user) => (
                    <li key={user._id}>
                        {user.name} ({user.email}) {user.emailVerified ? "✅" : "❌"}
                    </li>
                ))}
            </ul> */}
        </div>
    );
}
