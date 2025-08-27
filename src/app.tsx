import { Zap, Clock, Target, Shield, Heart, Award, Phone, Mail, MapPin, Calendar, Users, Star, Activity, Dumbbell, Brain, Flame, TrendingUp, CheckCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

function App() {
  const handleReservation = () => {
    window.open('https://lhdc-zdravi.snippet.myfox.cz/', '_blank')
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-gray-100">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-pink-100 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              {/* Logo místo - nahraďte src s cestou k vašemu logu */}
              <div className="flex items-center space-x-2">
                <img 
                  src="/logo.png" 
                  alt="EMS Cvičme Efektivně Logo" 
                  className="h-12 w-12 object-contain"
                  onError={(e) => {
                    // Fallback na ikonu blesku, pokud logo neexistuje
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    target.nextElementSibling?.classList.remove('hidden');
                  }}
                />
                {/* Fallback ikona, která se zobrazí, pokud logo neexistuje */}
                <div className="hidden w-12 h-12 bg-gradient-to-r from-pink-500 to-pink-600 rounded-lg flex items-center justify-center">
                  <Zap className="h-7 w-7 text-white" />
                </div>
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-pink-600 to-gray-700 bg-clip-text text-transparent">
                  EMS Cvičme
                </h1>
                <p className="text-sm text-gray-600">Efektivně</p>
              </div>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#vyhody" className="text-gray-700 hover:text-pink-600 transition-colors font-medium">Výhody</a>
              <a href="#galerie" className="text-gray-700 hover:text-pink-600 transition-colors font-medium">Galerie</a>
              <a href="#funkce" className="text-gray-700 hover:text-pink-600 transition-colors font-medium">Funkce</a>
              <a href="#o-nas" className="text-gray-700 hover:text-pink-600 transition-colors font-medium">O nás</a>
              <a href="#kontakt" className="text-gray-700 hover:text-pink-600 transition-colors font-medium">Kontakt</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h2 className="text-5xl md:text-6xl font-bold mb-6">
                <span className="bg-gradient-to-r from-pink-600 via-pink-500 to-gray-700 bg-clip-text text-transparent">
                  EMS Trénink
                </span>
                <br />
                <span className="text-gray-800">za pouhých 20 minut</span>
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Elektro-myo-stimulace (EMS) byla původně vyvinuta pro prevenci svalové atrofie. 
                Nyní vám pomůže dosáhnout výsledků celého těla za rekordně krátký čas.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center">
                <Button 
                  size="lg" 
                  onClick={handleReservation}
                  className="bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
                >
                  <Calendar className="mr-2 h-5 w-5" />
                  Rezervovat termín
                </Button>
                <Button variant="outline" size="lg" className="border-pink-300 text-pink-600 hover:bg-pink-50 px-8 py-4 text-lg rounded-xl">
                  Zjistit více
                </Button>
              </div>
            </div>
            
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="/instagram-photos/hero-photo.jpg" 
                  alt="EMS trénink v našem studiu v Děčíně" 
                  className="w-full h-[400px] object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop&crop=center";
                  }}
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl p-4 shadow-xl">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-pink-600 rounded-full flex items-center justify-center">
                    <Zap className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">Miha Bodytec</p>
                    <p className="text-sm text-gray-600">Profesionální EMS</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Photo Gallery Section - VAŠE FOTKY Z INSTAGRAMU @ems.decin */}
      <section id="galerie" className="py-20 px-4 bg-white/50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-800 mb-4">Naše EMS studio v Děčíně</h3>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Podívejte se na naše profesionální vybavení Miha Bodytec a prostředí pro EMS trénink
            </p>
            <p className="text-lg text-pink-600 mt-2 font-medium">
              📸 Sledujte nás na Instagramu: @ems.decin
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Fotka 1 - EMS zařízení Miha Bodytec */}
            <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
              <img 
                src="/instagram-photos/miha-bodytec-zarizeni.jpg" 
                alt="Profesionální EMS vybavení Miha Bodytec v našem studiu" 
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=400&h=300&fit=crop&crop=center";
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h4 className="font-semibold mb-1">Miha Bodytec zařízení</h4>
                  <p className="text-sm">Nejmodernější EMS technologie</p>
                </div>
              </div>
            </div>

            {/* Fotka 2 - EMS trénink v akci */}
            <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
              <img 
                src="/instagram-photos/trenink-v-akci.jpg" 
                alt="EMS trénink v akci - klient s trenérem" 
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=400&h=300&fit=crop&crop=center";
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h4 className="font-semibold mb-1">EMS trénink v akci</h4>
                  <p className="text-sm">Efektivní cvičení celého těla</p>
                </div>
              </div>
            </div>

            {/* Fotka 3 - Studio prostředí */}
            <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
              <img 
                src="/instagram-photos/studio-prostredi.jpg" 
                alt="Moderní prostředí našeho EMS studia v Děčíně" 
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = "https://images.unsplash.com/photo-1544717297-fa95b6ee9643?w=400&h=300&fit=crop&crop=center";
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h4 className="font-semibold mb-1">Moderní studio</h4>
                  <p className="text-sm">Profesionální prostředí v Děčíně</p>
                </div>
              </div>
            </div>

            {/* Fotka 4 - EMS oblek a příprava */}
            <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
              <img 
                src="/instagram-photos/ems-oblek-priprava.jpg" 
                alt="Příprava klienta - EMS oblek s elektrodami" 
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop&crop=center";
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h4 className="font-semibold mb-1">EMS oblek a příprava</h4>
                  <p className="text-sm">Individuální nastavení stimulace</p>
                </div>
              </div>
            </div>

            {/* Fotka 5 - Úspěšní klienti */}
            <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
              <img 
                src="/instagram-photos/uspesni-klienti.jpg" 
                alt="Spokojení klienti po EMS tréninku" 
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop&crop=center";
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h4 className="font-semibold mb-1">Spokojení klienti</h4>
                  <p className="text-sm">Viditelné výsledky za krátký čas</p>
                </div>
              </div>
            </div>

            {/* Fotka 6 - Before/After nebo trenér */}
            <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
              <img 
                src="/instagram-photos/trener-a-vysledky.jpg" 
                alt="Profesionální trenér a dosažené výsledky" 
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = "https://images.unsplash.com/photo-1566241142559-40e1dab266c6?w=400&h=300&fit=crop&crop=center";
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h4 className="font-semibold mb-1">Profesionální vedení</h4>
                  <p className="text-sm">Individuální přístup k výsledkům</p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA pro Instagram */}
          <div className="text-center mt-16">
            <div className="bg-gradient-to-r from-pink-500 to-pink-600 rounded-2xl p-8 text-white">
              <h4 className="text-2xl font-bold mb-4">Sledujte naše pokroky na Instagramu</h4>
              <p className="text-xl mb-6 text-pink-100">
                Denně sdílíme fotky z tréninků, tipy a úspěchy našich klientů
              </p>
              <Button 
                size="lg" 
                onClick={() => window.open('https://www.instagram.com/ems.decin/', '_blank')}
                className="bg-white text-pink-600 hover:bg-gray-50 px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
              >
                📸 Sledovat @ems.decin
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced EMS Advantages Section */}
      <section id="vyhody" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-5xl font-bold text-gray-800 mb-6">
              <span className="bg-gradient-to-r from-pink-600 to-gray-700 bg-clip-text text-transparent">
                Výhody EMS Tréninku
              </span>
            </h3>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto mb-8">
              Revolučné technologie elektro-myo-stimulace přináší jedinečné výhody, 
              které tradiční cvičení nemůže nabídnout
            </p>
            <div className="bg-gradient-to-r from-pink-500 to-pink-600 rounded-2xl p-6 text-white inline-block">
              <p className="text-xl font-semibold">
                ⚡ Aktivace až 90% svalových vláken současně
              </p>
            </div>
          </div>

          {/* Hlavní výhody - karty */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <Card className="group hover:shadow-2xl transition-all duration-300 border-0 bg-gradient-to-br from-pink-50 to-white transform hover:-translate-y-2">
              <CardHeader className="text-center pb-4">
                <div className="w-20 h-20 bg-gradient-to-r from-pink-500 to-pink-600 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform shadow-lg">
                  <Clock className="h-10 w-10 text-white" />
                </div>
                <CardTitle className="text-2xl text-gray-800 mb-2">Maximální úspora času</CardTitle>
                <CardDescription className="text-lg text-gray-600">
                  20 minut = 90 minut tradičního tréninku
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-700 mb-4">
                  EMS aktivuje až 90% všech svalových vláken současně, což je 6x více než při klasickém cvičení.
                </p>
                <div className="bg-pink-100 rounded-lg p-3">
                  <p className="text-pink-700 font-semibold text-sm">
                    ✓ Stejný efekt jako 1,5h v posilovně
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-300 border-0 bg-gradient-to-br from-gray-50 to-white transform hover:-translate-y-2">
              <CardHeader className="text-center pb-4">
                <div className="w-20 h-20 bg-gradient-to-r from-gray-600 to-gray-700 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform shadow-lg">
                  <Target className="h-10 w-10 text-white" />
                </div>
                <CardTitle className="text-2xl text-gray-800 mb-2">Precizní cílení</CardTitle>
                <CardDescription className="text-lg text-gray-600">
                  Individuální nastavení pro každou svalovou skupinu
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-700 mb-4">
                  Kontrolovaná elektrostimulace umožňuje přesnou práci s konkrétními svaly dle vašich potřeb.
                </p>
                <div className="bg-gray-100 rounded-lg p-3">
                  <p className="text-gray-700 font-semibold text-sm">
                    ✓ Zaměření na problémové partie
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-300 border-0 bg-gradient-to-br from-pink-50 to-white transform hover:-translate-y-2">
              <CardHeader className="text-center pb-4">
                <div className="w-20 h-20 bg-gradient-to-r from-pink-500 to-pink-600 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform shadow-lg">
                  <Shield className="h-10 w-10 text-white" />
                </div>
                <CardTitle className="text-2xl text-gray-800 mb-2">Naprostá bezpečnost</CardTitle>
                <CardDescription className="text-lg text-gray-600">
                  Šetrné k celému pohybovému aparátu
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-700 mb-4">
                  EMS minimalizuje zátěž na klouby, šlachy a páteř, přitom maximalizuje svalovou aktivitu.
                </p>
                <div className="bg-pink-100 rounded-lg p-3">
                  <p className="text-pink-700 font-semibold text-sm">
                    ✓ Vhodné i po zranění
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-300 border-0 bg-gradient-to-br from-green-50 to-white transform hover:-translate-y-2">
              <CardHeader className="text-center pb-4">
                <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-green-600 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform shadow-lg">
                  <Heart className="h-10 w-10 text-white" />
                </div>
                <CardTitle className="text-2xl text-gray-800 mb-2">Zdravotní benefity</CardTitle>
                <CardDescription className="text-lg text-gray-600">
                  Prevence svalové atrofie a rehabilitace
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-700 mb-4">
                  Metoda původně vyvinutá v medicíně pro prevenci svalové atrofie u pacientů.
                </p>
                <div className="bg-green-100 rounded-lg p-3">
                  <p className="text-green-700 font-semibold text-sm">
                    ✓ Podporuje zdraví páteře
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-300 border-0 bg-gradient-to-br from-blue-50 to-white transform hover:-translate-y-2">
              <CardHeader className="text-center pb-4">
                <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-blue-600 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform shadow-lg">
                  <Zap className="h-10 w-10 text-white" />
                </div>
                <CardTitle className="text-2xl text-gray-800 mb-2">Rychlé výsledky</CardTitle>
                <CardDescription className="text-lg text-gray-600">
                  Viditelné změny již po 4-6 sezeních
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-700 mb-4">
                  Intenzivní svalová stimulace přináší rychlejší výsledky než tradiční trénink.
                </p>
                <div className="bg-blue-100 rounded-lg p-3">
                  <p className="text-blue-700 font-semibold text-sm">
                    ✓ Efekt už po prvním tréninku
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-300 border-0 bg-gradient-to-br from-purple-50 to-white transform hover:-translate-y-2">
              <CardHeader className="text-center pb-4">
                <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-purple-600 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform shadow-lg">
                  <Award className="h-10 w-10 text-white" />
                </div>
                <CardTitle className="text-2xl text-gray-800 mb-2">Profesionální kvalita</CardTitle>
                <CardDescription className="text-lg text-gray-600">
                  Certifikované přístroje Miha Bodytec
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-700 mb-4">
                  Využíváme pouze nejmodernější EMS technologie s nejvyššími bezpečnostními standardy.
                </p>
                <div className="bg-purple-100 rounded-lg p-3">
                  <p className="text-purple-700 font-semibold text-sm">
                    ✓ Německá kvalita Miha Bodytec
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Kompletní seznam výhod EMS */}
          <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 mb-16">
            <div className="text-center mb-12">
              <h4 className="text-4xl font-bold text-gray-800 mb-6">
                📋 Kompletní seznam výhod EMS tréninku
              </h4>
              <p className="text-xl text-gray-600">
                Zde jsou všechny vědecky potvrzené benefity elektro-myo-stimulace
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Fyzické výhody */}
              <div className="bg-gradient-to-br from-pink-50 to-pink-100 rounded-2xl p-6">
                <div className="flex items-center mb-4">
                  <Dumbbell className="h-8 w-8 text-pink-600 mr-3" />
                  <h5 className="text-xl font-bold text-pink-700">Fyzické výhody</h5>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-pink-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Nárůst svalové hmoty až o 15%</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-pink-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Snížení tuku až o 25%</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-pink-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Zlepšení svalové síly o 30%</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-pink-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Zpevnění hlubokých stabilizačních svalů</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-pink-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Zlepšení držení těla</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-pink-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Aktivace všech hlavních svalových skupin</span>
                  </li>
                </ul>
              </div>

              {/* Časové a praktické výhody */}
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-6">
                <div className="flex items-center mb-4">
                  <Clock className="h-8 w-8 text-blue-600 mr-3" />
                  <h5 className="text-xl font-bold text-blue-700">Časové výhody</h5>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Pouze 20 minut na trénink</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">1-2 tréninky týdně postačí</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Žádné převlékání sportovního oblečení</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Bez pocení a sprchování</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Flexibilní termíny</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Ideální pro zaneprázdněné</span>
                  </li>
                </ul>
              </div>

              {/* Zdravotní výhody */}
              <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-6">
                <div className="flex items-center mb-4">
                  <Heart className="h-8 w-8 text-green-600 mr-3" />
                  <h5 className="text-xl font-bold text-green-700">Zdravotní benefity</h5>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Prevence svalové atrofie</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Úleva při bolestech zad</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Zlepšení cirkulace krve</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Snížení celulitidy</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Rehabilitace po zranění</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Posílení imunitního systému</span>
                  </li>
                </ul>
              </div>

              {/* Metabolické výhody */}
              <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-6">
                <div className="flex items-center mb-4">
                  <Flame className="h-8 w-8 text-orange-600 mr-3" />
                  <h5 className="text-xl font-bold text-orange-700">Metabolismus</h5>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-orange-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Zvýšení bazálního metabolismu</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-orange-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Spalování kalorií až 24h po tréninku</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-orange-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Efektivní hubnutí</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-orange-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Zlepšení inzulinové citlivosti</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-orange-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Regulace hormonální rovnováhy</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-orange-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Detoxikace organismu</span>
                  </li>
                </ul>
              </div>

              {/* Mentální výhody */}
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-6">
                <div className="flex items-center mb-4">
                  <Brain className="h-8 w-8 text-purple-600 mr-3" />
                  <h5 className="text-xl font-bold text-purple-700">Mentální benefity</h5>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-purple-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Uvolnění endorfinů</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-purple-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Snížení stresu a úzkosti</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-purple-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Zlepšení kvality spánku</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-purple-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Posílení sebevědomí</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-purple-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Relaxace a odstranění napětí</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-purple-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Zlepšení koncentrace</span>
                  </li>
                </ul>
              </div>

              {/* Praktické výhody */}
              <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-6">
                <div className="flex items-center mb-4">
                  <TrendingUp className="h-8 w-8 text-gray-600 mr-3" />
                  <h5 className="text-xl font-bold text-gray-700">Praktické výhody</h5>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-gray-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Vhodné pro všechny věkové kategorie</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-gray-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Individuální přístup</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-gray-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Bez nutnosti předchozích zkušeností</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-gray-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Profesionální dohled trenéra</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-gray-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Měřitelné výsledky</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-gray-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Bezpečné pro těhotné (s lékařským doporučením)</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Statistiky a fakta */}
          <div className="bg-gradient-to-r from-pink-500 to-pink-600 rounded-3xl p-8 md:p-12 text-white text-center">
            <h4 className="text-4xl font-bold mb-8">📊 EMS v číslech</h4>
            <div className="grid md:grid-cols-4 gap-8">
              <div className="bg-white/20 rounded-2xl p-6 backdrop-blur-sm">
                <div className="text-4xl font-bold mb-2">90%</div>
                <div className="text-lg">aktivovaných svalových vláken</div>
              </div>
              <div className="bg-white/20 rounded-2xl p-6 backdrop-blur-sm">
                <div className="text-4xl font-bold mb-2">20</div>
                <div className="text-lg">minut na trénink</div>
              </div>
              <div className="bg-white/20 rounded-2xl p-6 backdrop-blur-sm">
                <div className="text-4xl font-bold mb-2">500+</div>
                <div className="text-lg">spálených kalorií</div>
              </div>
              <div className="bg-white/20 rounded-2xl p-6 backdrop-blur-sm">
                <div className="text-4xl font-bold mb-2">15%</div>
                <div className="text-lg">nárůst svalové hmoty</div>
              </div>
            </div>
            <div className="mt-12">
              <p className="text-2xl font-semibold mb-6">
                Přesvědčte se sami o výhodách EMS tréninku!
              </p>
              <Button 
                size="lg" 
                onClick={handleReservation}
                className="bg-white text-pink-600 hover:bg-pink-50 px-12 py-4 text-xl font-bold rounded-2xl shadow-xl hover:shadow-2xl transition-all transform hover:scale-105"
              >
                <Calendar className="mr-3 h-6 w-6" />
                Vyzkoušet
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="funkce" className="py-20 px-4 bg-white/50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-800 mb-4">Jak EMS funguje?</h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Elektro-myo-stimulace využívá elektrické impulsy k aktivaci svalových vláken, 
              což umožňuje intenzivnější trénink než tradiční cvičení.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="relative mb-8">
                <img 
                  src="/instagram-photos/priprava-krok1.jpg" 
                  alt="Příprava na EMS trénink - oblečení speciálního obleku" 
                  className="w-full h-48 object-cover rounded-2xl shadow-lg"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=300&h=200&fit=crop&crop=center";
                  }}
                />
                <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-gradient-to-r from-pink-500 to-pink-600 rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-2xl font-bold text-white">1</span>
                </div>
              </div>
              <h4 className="text-xl font-semibold text-gray-800 mb-4">Příprava</h4>
              <p className="text-gray-600">
                Oblečení speciálního EMS obleku s elektrodami, které jsou umístěny na klíčových svalových skupinách.
              </p>
            </div>
            
            <div className="text-center">
              <div className="relative mb-8">
                <img 
                  src="/instagram-photos/stimulace-krok2.jpg" 
                  alt="EMS stimulace během tréninku s trenérem" 
                  className="w-full h-48 object-cover rounded-2xl shadow-lg"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=200&fit=crop&crop=center";
                  }}
                />
                <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-gradient-to-r from-gray-600 to-gray-700 rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-2xl font-bold text-white">2</span>
                </div>
              </div>
              <h4 className="text-xl font-semibold text-gray-800 mb-4">Stimulace</h4>
              <p className="text-gray-600">
                Kontrolované elektrické impulsy aktivují svalová vlákna synchronně s vašimi pohyby.
              </p>
            </div>
            
            <div className="text-center">
              <div className="relative mb-8">
                <img 
                  src="/instagram-photos/vysledky-krok3.jpg" 
                  alt="Výsledky EMS tréninku - spokojený klient" 
                  className="w-full h-48 object-cover rounded-2xl shadow-lg"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = "https://images.unsplash.com/photo-1566241142559-40e1dab266c6?w=300&h=200&fit=crop&crop=center";
                  }}
                />
                <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-gradient-to-r from-pink-500 to-pink-600 rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-2xl font-bold text-white">3</span>
                </div>
              </div>
              <h4 className="text-xl font-semibold text-gray-800 mb-4">Výsledky</h4>
              <p className="text-gray-600">
                Za 20 minut dosáhnete stejných výsledků jako při 90minutovém tradičním tréninku.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="o-nas" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-4xl font-bold text-gray-800 mb-8">O EMS metodě</h3>
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-8 items-center mb-8">
                <div className="text-left">
                  <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                    EMS (Elektro-myo-stimulace) byla původně vyvinuta v medicíně pro prevenci svalové atrofie 
                    u pacientů, kteří nemohli aktivně cvičit. Dnes je tato revolučního technologie dostupná 
                    široké veřejnosti jako efektivní metoda fitness tréninku.
                  </p>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Naše přístroje Miha Bodytec využívají nejmodernější technologie a jsou certifikovány pro bezpečné použití. 
                    Každý trénink je veden kvalifikovaným trenérem, který zajistí optimální intenzitu a bezpečnost.
                  </p>
                </div>
                <div className="rounded-xl overflow-hidden shadow-lg">
                  <img 
                    src="/instagram-photos/o-nas-foto.jpg" 
                    alt="Naše EMS studio v Děčíně s Miha Bodytec zařízením" 
                    className="w-full h-64 object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop&crop=center";
                    }}
                  />
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="text-left">
                  <h4 className="text-xl font-semibold text-pink-600 mb-3 flex items-center">
                    <Star className="mr-2 h-5 w-5" />
                    Vědecky ověřeno
                  </h4>
                  <p className="text-gray-700">
                    Metoda je podložena četnými studiemi a je využívána v profesionálním sportu i rehabilitaci.
                  </p>
                </div>
                <div className="text-left">
                  <h4 className="text-xl font-semibold text-pink-600 mb-3 flex items-center">
                    <Users className="mr-2 h-5 w-5" />
                    Personalizovaný přístup
                  </h4>
                  <p className="text-gray-700">
                    Každý trénink je přizpůsoben vašim individuálním potřebám a fitness cílům.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reservation Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-pink-500 to-pink-600">
        <div className="container mx-auto text-center">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-4xl font-bold text-white mb-6">Rezervujte si svůj termín</h3>
            <p className="text-xl text-pink-100 mb-8 leading-relaxed">
              Využijte naší online rezervační systém a vyberte si termín, který vám nejvíce vyhovuje. 
              Budeme se na vás těšit!
            </p>
            <Button 
              size="lg" 
              onClick={handleReservation}
              className="bg-white text-pink-600 hover:bg-gray-50 px-12 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
            >
              <Calendar className="mr-3 h-6 w-6" />
              Otevřít rezervační kalendář
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="kontakt" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-800 mb-4">Kontaktujte nás</h3>
            <p className="text-xl text-gray-600">Začněte svou cestu k efektivnějšímu tréninku ještě dnes</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <Card className="text-center p-6 border-0 bg-gradient-to-br from-pink-50 to-white hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-pink-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Phone className="h-6 w-6 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-gray-800 mb-2">Telefon</h4>
                <p className="text-gray-600">+420 725 800 064</p>
              </Card>

              <Card className="text-center p-6 border-0 bg-gradient-to-br from-gray-50 to-white hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-gradient-to-r from-gray-600 to-gray-700 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Mail className="h-6 w-6 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-gray-800 mb-2">E-mail</h4>
                <p className="text-gray-600">halesovaostrahak9@gmail.com</p>
              </Card>

              <Card className="text-center p-6 border-0 bg-gradient-to-br from-pink-50 to-white hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-pink-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <MapPin className="h-6 w-6 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-gray-800 mb-2">Adresa</h4>
                <p className="text-gray-600">Berounská 165/25<br />Děčín - Horní Oldřichov<br />40502</p>
              </Card>
            </div>

            <div className="text-center">
              <Button 
                size="lg" 
                onClick={handleReservation}
                className="bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white px-12 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
              >
                <Calendar className="mr-2 h-5 w-5" />
                Rezervovat konzultaci
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-3 mb-6">
              {/* Logo v patičce - stejně jako v hlavičce */}
              <img 
                src="/logo.png" 
                alt="EMS Cvičme Efektivně Logo" 
                className="h-10 w-10 object-contain"
                onError={(e) => {
                  // Fallback na ikonu blesku, pokud logo neexistuje
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  target.nextElementSibling?.classList.remove('hidden');
                }}
              />
              {/* Fallback ikona */}
              <div className="hidden w-8 h-8 bg-gradient-to-r from-pink-500 to-pink-600 rounded-lg flex items-center justify-center">
                <Zap className="h-5 w-5 text-white" />
              </div>
              <h4 className="text-xl font-bold">EMS Cvičme Efektivně</h4>
            </div>
            <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
              Revolučné EMS technologie pro maximální výsledky za minimální čas. 
              Začněte svou fitness transformaci ještě dnes.
            </p>
            <div className="border-t border-gray-700 pt-6">
              <p className="text-gray-500 text-sm">
                © 2024 EMS Cvičme Efektivně. Všechna práva vyhrazena.
              </p>
              <p className="text-gray-500 text-sm mt-2">
                📸 Sledujte nás na Instagramu: @ems.decin
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App