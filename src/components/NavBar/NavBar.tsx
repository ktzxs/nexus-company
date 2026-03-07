import MiddleNav from "./MiddleNav";

export default function NavBar() {
    return (
        <>
            <header className="w-full">
                <div className="hidden lg:block">
                    <MiddleNav />
                </div>
            </header>
        </>
    )
}