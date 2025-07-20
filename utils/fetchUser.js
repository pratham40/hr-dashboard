import axios from "axios";

export async function fetchUser(page=1) {
        const skip = (page - 1) * 20;
        const {data} = await axios.get(`https://dummyjson.com/users?limit=5&skip=${skip}`);
        const users = data.users.map((user)=>(
            {
                ...user,
                performanceRating: Math.floor(Math.random()*5)+1
            }
        ))
        return users;
}