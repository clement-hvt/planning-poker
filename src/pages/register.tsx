import Input from "../components/input.tsx";
import Button from "../components/button.tsx";

export default function Register() {
    return (
        <div className="mx-auto max-w-lg">
            <h1 className="text-center text-2xl font-bold text-indigo-600 sm:text-3xl">
                Please enter your username
            </h1>
            <form
                action="/"
                method="post"
                className="mb-0 mt-6 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8"
            >
                <Input label="Username" placeholder="Username"></Input>
                <Button type="submit" label="Submit"></Button>
            </form>
        </div>
    )
}