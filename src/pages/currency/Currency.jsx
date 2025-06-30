import CurrencyProvider from './CurrenContext'
import MobileDateTime from './currenccycomponents/MobileDateTime'
import DesktopDateTime from './currenccycomponents/DesktopDateTime'
import CurrencyTitle from './currenccycomponents/CurrencyTitle'
import CurrencyButtons from './currenccycomponents/CurrencyButtons'
import CurrencyCardList from './currenccycomponents/CurrencyCardList'
export default function Currency() {
    return (
        <>
            <div className="flex flex-col bg-gray-50 mx-1 shadow-sm px-2 md:mx-8 md:px-6 lg:mx16">
                <CurrencyProvider>
                    <div className="block md:hidden">
                        <MobileDateTime />
                    </div>
                    <div className="hidden md:block">
                        <DesktopDateTime />
                    </div>
                    <CurrencyTitle />
                    <CurrencyButtons />
                    <CurrencyCardList />
                </CurrencyProvider>
            </div>
        </>
    );
}