import Link from "next/link"

const NotFoundPage = () => {
    return (
        <section className="box-container">
            <div className="text-center flex flex-col gap-5 justify-center items-center min-h-[calc(100vh-64px)] medium:min-h-[calc(100vh-64px)] large:min-h-[calc(100vh-100px)] py-20">
                <h1 className="text-[40px] medium:text-[60px] font-bold">
                    <span className="text-[60px] medium:text-[80px] font-space-mono">404</span> Error
                </h1>
                <p> Page not found </p>
                <p className="max-w-[500px] mx-auto"> {`The page you're looking for might have been removed, had its name changed, or is temporarily unavailable.`} </p>
                <Link href={'/'} className="hover:underline w-fit mx-auto"> Back to Home </Link>
            </div>
        </section>
    )
}
export default NotFoundPage