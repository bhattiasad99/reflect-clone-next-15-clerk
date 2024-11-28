import ImageComponent from "@/components/custom/ImageComponent"
import LinkComponent from "@/components/custom/LinkComponent"
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs"

const HeaderComponent = () => {
    return (
        <header className="container mx-auto">
            <nav className="py-6 px-4 flex justify-between items-center">
                <LinkComponent href={'/'}>
                    <ImageComponent source={'/global-assets/logo.png'} alt="Logo" width="200px" height="60px" />
                </LinkComponent>

                <div className="flex items-center gap-4">
                    <SignedOut>
                        <SignInButton />
                    </SignedOut>
                    <SignedIn>
                        <UserButton />
                    </SignedIn>
                </div>
            </nav>
        </header>
    )
}

export default HeaderComponent