import React, {useEffect, useState} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import UserService from "../service/UserService";
import bg from "../images/defaul-bg.png"
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Divider from "../components/Divider";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

const User = () => {
    const [user, setUser] = useState()

    const {id} = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        let userService = new UserService()
        userService.getUser(id).then(res => setUser(res.data))
    }, [id])

    const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    return (
        <div className={"flex flex-col border-r border-l border-gray-extraLight w-1/2 mr-auto"}>
            {user &&
                <>
                    <header
                        className="sticky flex items-center top-0 z-10 bg-white p-2 border-b border-gray-extraLight ">
                        <ArrowBackIcon
                            style={{cursor: "pointer", marginRight: "10px", marginLeft: "5px"}}
                            fontSize={"small"}
                            onClick={() => navigate("/")}/>
                        <div className="flex flex-col">
                            <span className="font-medium text-lg text-gray-900">{user.name}</span>
                            <span className="font-light text-sm
                    ">{user.tweets.length} tweets</span>
                        </div>
                    </header>
                    <div className="h-52" style={{
                        backgroundImage: `url(${bg}`,
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover"
                    }}>
                        <img
                            src="https://pbs.twimg.com/profile_images/1617244452027879425/cODTtPoH_400x400.jpg"
                            alt="Profile"
                            className="w-28 h-28 rounded-full mt-36 ml-3 absolute"
                        />
                    </div>
                    <div className="h-52 ">
                        <button
                            className="float-right h-10 bg-transparent py-2 px-4 rounded-2xl mt-1 mr-1 font-bold text-sm"
                            style={{color: "#1DA1F2", border: `1px solid #1DA1F2`}}>Edit profile
                        </button>
                        <div className="mt-16 ml-3">
                            <span className="font-bold block mb-0">{user.name}</span>
                            <span className="font-light block text-sm">@{user.username}</span>
                            <span className="block">{user.bio}</span>
                            <span className="font-light block mt-2" style={{fontSize: "13px"}}>
                                <CalendarMonthIcon fontSize="small"
                                                   style={{color: "lightslategrey", marginRight: "3px"}}/>
                                Joined {month[new Date(user.creationTimestamp).getUTCMonth()]} {new Date(user.creationTimestamp).getFullYear()}</span>
                        </div>
                    </div>
                    <Divider/>
                </>
            }
        </div>
    );
};

export default User;