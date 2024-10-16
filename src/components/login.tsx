import { Link } from "react-router-dom"



const Login = () => {
    return (
        <div className="h-screen flex justify-center items-center">
        <div className="flex flex-col items-center justify-center gap-4">
            <h1 className="font-bold text-3xl">If you’re reading this, you owe me a drink for reviewing my code!</h1>
            <Link to="/">
            <button className="border rounded-lg p-2 w-[90px] hover:bg-blue-400">Back</button>
            </Link>
        </div>
        </div>
    )
}


export default Login;