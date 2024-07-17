import { LinkedIn } from "./icons/linked-in"

export const Footer = () => {
    return <div className="flex flex-1 w-full justify-between">
        <span>{new Date().getFullYear()} ©{' '}
            The Arc Project
            .
        </span>
        <a href="https://www.linkedin.com/in/maheshraj-r-p-37689b164/" target="_blank">
            <LinkedIn className="h-6 w-6" />
        </a>
    </div >
}