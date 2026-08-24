import { createFileRoute } from '@tanstack/react-router'
import Hero from '#/components/home/Hero'
import Navigation from '#/components/Navigation'
import Services from '#/components/home/Services'
import About from '#/components/home/About'
import WhyUs from '#/components/home/WhyUs'
import Contact from '#/components/home/Contact'
import PaymentMethods from '#/components/home/PaymentMethods'
import Footer from '#/components/home/Footer'
import { LocaleProvider } from '#/lib/locale'

export const Route = createFileRoute('/')({ component: App })

function App() {
    return (
        <LocaleProvider>
            <main className="flex flex-col gap-y-6 font-serif">
                <Navigation />
                <Hero />
                <Services />
                <About />
                <WhyUs />
                <Contact />
                <PaymentMethods />
                <Footer />
            </main>
        </LocaleProvider>
    )
}
