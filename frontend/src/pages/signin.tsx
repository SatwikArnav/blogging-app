import { Quote } from "../components/quotes"
import { SigninAuth } from "../components/signinauth"

export const Signin = () => {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2">
            <SigninAuth></SigninAuth>
            <Quote></Quote>
        </div>
    )
}