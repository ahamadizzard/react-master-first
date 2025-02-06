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
