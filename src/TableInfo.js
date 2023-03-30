import React, { useEffect, useState, } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
// import Update from './Update';

const TableInfo = () => {
    const [usersInfo, setUsersInfo] = useState([]);
    // console.log(usersInfo);
    
    



    useEffect(() => {
        fetch('http://localhost:5000/users')
            .then(response => response.json())
            .then(data => setUsersInfo(data));
    }, [usersInfo]);


    // const handleUpdateInfo = () => {
    //     console.log('click');
    //     // fetch(`http://localhost:5000/user/${_id}`, {
    //     //     method: 'DELETE'
    //     // })
    //     //     .then(res => res.json())
    //     //     .then(data => {
    //     //         if (data.deletedCount > 0) {
    //     //             toast.success("delete info successfully")
    //     //             setDeletingInfo(true)
    //     //         }
    //     //     })
    // }


    // handle delete info

    const handleDeleteInfo = (id) => {
        console.log(id);
        fetch(`http://localhost:5000/user/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount > 0) {
                    toast.success("delete info successfully")
                    // setDeletingInfo(true)
                }
            })
    }
    

    return (
        <div className='mx-5 my-10'>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>

                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Hobby</th>
                            <th>Update</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}

                        {
                            usersInfo?.map((userInfo) => <tr
                                key={userInfo?._id}
                            >
                                <td>
                                    {userInfo?.name}
                                </td>
                                <td>
                                    {userInfo?.email}
                                </td>
                                <td>
                                    {userInfo?.phone}
                                </td>
                                <td>
                                    {userInfo?.hobby}
                                </td>

                                <td><button
                                    // onClick={() => handleUpdateData(userInfo?._id)}
                                    className='text-blue-500  hover:text-blue-600 hover:font-semibold'> Update</button></td>
                                <td><button
                                    onClick={() => handleDeleteInfo(userInfo?._id)}
                                    className='text-red-500  hover:text-red-600 hover:font-semibold'>Delete
                                </button></td>

                            </tr>)

                        }

                    </tbody>
                </table>
               
            </div>

        </div>
    );
};


export default TableInfo;