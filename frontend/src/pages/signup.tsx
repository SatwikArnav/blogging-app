import { Quote } from "../components/quotes"
import { SignupAuth } from "../components/signupauth"

export const Signup = () => {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2">
            <SignupAuth></SignupAuth>
            <Quote></Quote>
        </div>
    )
}
