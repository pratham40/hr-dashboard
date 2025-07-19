import axios from "axios";

export async function fetchUser() {
        const {data} = await axios.get("https://dummyjson.com/users?limit=20");
        const users = data.users.map((user)=>(
            {
                ...user,
                performanceRating: Math.floor(Math.random()*5)+1
            }
        ))
}