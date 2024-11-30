import ImageComponent from "@/components/custom/ImageComponent"
import LinkComponent from "@/components/custom/LinkComponent"
import { Button } from "@/components/ui/button"
import { SignedIn, SignedOut, SignInButton } from "@clerk/nextjs"
import ResponsiveIconButton from "./ResponsiveIconButton"
import { FolderOpen, PenBox } from "lucide-react"
import UserMenuComponent from "../UserMenuComponent"
import HoverWrapper from "./HoverWrapper"

const HeaderComponent = () => {
    return (
        <>
            <HoverWrapper>
                <nav className="container mx-auto py-6 px-4 flex justify-between items-center">
                    <LinkComponent href={'/'}>
                        <ImageComponent source={'/global-assets/logo.png'} alt="Logo" width="200px" height="60px" />
                    </LinkComponent>
                    <div className="flex items-center gap-4">
                        <SignedIn>
                            <LinkComponent href="/dashboard#collections">
                                <ResponsiveIconButton icon={<FolderOpen size={18} />} variant="outline">Collections</ResponsiveIconButton>
                            </LinkComponent>
                        </SignedIn>
                        <LinkComponent href="/journal/write">
                            <ResponsiveIconButton icon={<PenBox size={18} />}>Write New</ResponsiveIconButton>
                        </LinkComponent>
                        <SignedOut>
                            <SignInButton forceRedirectUrl={'/dashboard'}>
                                <Button variant="outline">Login</Button>
                            </SignInButton>
                        </SignedOut>
                        <SignedIn>
                            <UserMenuComponent />
                        </SignedIn>
                    </div>
                </nav>
            </HoverWrapper>
            <div className="h-20" />
        </>
    )
}

export default HeaderComponent