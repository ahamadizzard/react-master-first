// import { clientPromise } from "@/lib/mongodb";
// import { UserTable } from "@/components/ui/user-table";
// import { User } from "@/lib/types";

// export default async function UserData() {
//     try {
//         const client = await clientPromise();
//         const db = client.db("sample_mflix");
//         const users = await db
//             .collection("user")
//             .find({})
//             .limit(10)
//             .toArray();

//         if (users) {
//             console.log("Users: ", users);

//             const refinedUsers = users.map((user) => ({
//                 id: user._id.toString(),
//                 name: user.name,
//                 email: user.email,
//                 role: "User",
//                 status: "Active",
//             }));

//             return <UserTable users={refinedUsers} />;
//         }
//     } catch (error) {
//         console.error("An error occurred while fetching users: ", error);

//         return (
//             <div>
//                 An error occurred while fetching users
//             </div>
//         );

//     }
//     return (
//         <UserTable
//             users={users}
//         />
//     );
// }