import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ReservationContent } from "@/components/reservation-content"

export default function ReserverPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <ReservationContent />
      </main>
      <Footer />
    </div>
  )
}
