import ErrorPage from "@/components/custom/ErrorPage"

const NotFoundPage = () => {
    return (
        <ErrorPage errorCode={404} errorMessage="Page Not Found!" />
    )
}

export default NotFoundPage