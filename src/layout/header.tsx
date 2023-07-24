import planningPokerLogo from '../assets/images/logo-planning-poker.png';

type HeaderProps = {
    username?: string,
}
export default function Header({username}: HeaderProps) {
    return (
        <>
            <header className="sticky top-0 flex mx-auto pt-1 pb-4 px-1 sm:px-4 lg:px-2 justify-between h-1/5">
                <div className="text-left self-center">
                    <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">
                        Planning Poker
                    </h1>
                    {
                        username && (
                            <p className="mt-1.5 text-sm text-gray-500">
                                Welcome {username}
                            </p>
                        )
                    }
                </div>
                <div>
                    <img src={planningPokerLogo} alt="react logo" className="object-cover h-24 w-48"/>
                </div>
            </header>
        </>

    )
}