import PageLayout from '../layouts/PageLayout'
import TypographyComponent from './TypographyComponent'
import { Button } from '../ui/button'
import Link from 'next/link'
import PreviousPageComponent from './PreviousPageComponent'
import { FC } from 'react'

type IProps = {
    errorCode: number,
    errorMessage: string
}

const ErrorPage: FC<IProps> = ({ errorCode, errorMessage }) => {
    console.log({
        dateTime: new Date(),
        errorCode,
        errorMessage
    })
    return (
        <PageLayout className="flex flex-col items-center justify-center min-h-[60vh] gap-2">
            <TypographyComponent variant="h1">{errorCode}</TypographyComponent>
            <TypographyComponent variant="h2">{errorMessage}</TypographyComponent>
            <p>
                Oops! The page you&apos;re looking for doesn&apos;t exist or has been moved.
            </p>
            <div className="flex gap-2"> <Link href={'/'}>
                <Button>Go to Homepage</Button>
            </Link >
                <PreviousPageComponent />
            </div>
        </PageLayout>
    )
}

export default ErrorPage