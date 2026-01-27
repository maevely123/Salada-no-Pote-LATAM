import React from 'react';
import { ShoppingCart, CheckCircle, ArrowDown, Play, Star, AlertCircle } from 'lucide-react';
import { Button } from './components/Button';
import { RecipeCard } from './components/RecipeCard';
import { Accordion } from './components/Accordion';
import { RECIPES, BONUSES, FAQ_ITEMS } from './constants';

const App: React.FC = () => {
  const scrollToOffer = () => {
    const offerSection = document.getElementById('offer');
    if (offerSection) {
      offerSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleBuyClick = () => {
    window.location.href = "https://pay.hotmart.com/W104065085Q";
  };

  return (
    <div className="min-h-screen bg-[#FDFBF7] font-sans selection:bg-brand-green selection:text-white">
      
      {/* --- HERO SECTION --- */}
      <header className="relative bg-[#cbceae] overflow-hidden">
        <div className="absolute top-0 w-full h-4 bg-brand-green/10"></div>
        <div className="max-w-6xl mx-auto px-4 pt-12 pb-20 text-center relative z-10">
          
          {/* Typography updated for high visibility */}
          <div className="flex flex-col items-center mb-10 scale-105 md:scale-110 origin-top">
            <h1 className="font-serif text-6xl md:text-8xl font-black text-brand-green leading-[0.85] drop-shadow-sm tracking-tight mb-1">
              ensaladas
            </h1>
            <span className="font-serif text-4xl md:text-6xl italic font-bold text-brand-green/90 leading-tight mb-2">
              en envase
            </span>
            <span className="font-sans text-xl md:text-2xl font-extrabold text-[#5c7a52] uppercase tracking-[0.25em] mt-1 border-t border-brand-green/30 pt-2">
              + aderezos
            </span>
          </div>
          
          <h2 className="text-xl md:text-3xl text-gray-800 max-w-4xl mx-auto mb-12 font-medium leading-relaxed">
            <span className="font-black text-3xl md:text-4xl text-[#2a3d24]">60 RECETAS</span> para que las prepares en tu casa y nunca más te quedes sin ensalada lista en el refrigerador, 
            <br className="hidden md:block"/>
            <span className="inline-block bg-brand-green text-white px-4 py-1 rounded-lg font-bold shadow-lg transform -rotate-2 mt-3 md:mt-2 hover:scale-105 transition-transform cursor-default border-2 border-[#3a5230]">¡7 días sin marchitarse!</span>
          </h2>

          <div className="relative max-w-md mx-auto mb-10 group cursor-pointer">
            <img 
              src="https://res.cloudinary.com/dvg6hojfs/image/upload/v1769131619/Design_sem_nome_-_2026-01-22T220511.058_sml922.png" 
              alt="Ensalada en Envase Gigante" 
              className="rounded-2xl shadow-2xl transform rotate-[-2deg] border-4 border-white mx-auto"
            />
            <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-full shadow-lg animate-bounce hidden md:block">
              <span className="text-2xl font-bold text-brand-red">-60% OFF</span>
            </div>
          </div>

          <Button size="lg" onClick={scrollToOffer} className="shadow-brand-green/30 shadow-xl animate-pulse">
            ¡QUIERO LAS RECETAS!
          </Button>
        </div>
      </header>

      {/* --- BENEFITS SECTION --- */}
      <section className="py-16 bg-[#fff7e7]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-brand-green mb-2 uppercase">
            Lo que vas a encontrar:
          </h2>
          <div className="grid md:grid-cols-2 gap-8 items-center mt-10">
            <div className="text-left space-y-4 bg-white p-8 rounded-xl shadow-sm">
              {[
                "Funciona con cualquier envase",
                "60 ensaladas deliciosas",
                "Aderezos irresistibles",
                "El secreto de las capas",
                "Conservación por 7 días",
                "Listas en 30 minutos",
                "Paso a paso de preparación"
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <CheckCircle className="text-brand-green flex-shrink-0" size={24} />
                  <span className="text-lg font-medium text-gray-700">{item}</span>
                </div>
              ))}
            </div>
            <div className="relative">
              <img 
                src="https://res.cloudinary.com/dvg6hojfs/image/upload/v1769131629/orden_de_montaje_que_conserva_fresca_iopvfg.png" 
                alt="Capas de la Ensalada" 
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
          <div className="mt-12">
            <Button onClick={scrollToOffer}>¡QUIERO LAS RECETAS!</Button>
          </div>
        </div>
      </section>

      {/* --- RECIPES SHOWCASE --- */}
      <section className="py-20 bg-[#cbceae]">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-800 mb-4 uppercase">
              Algunas Ensaladas que aprenderás:
            </h2>
            <div className="w-24 h-1 bg-brand-green mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {RECIPES.map((recipe) => (
              <RecipeCard key={recipe.id} recipe={recipe} />
            ))}
          </div>

          <div className="text-center mt-16">
            {/* Removed variant="danger" to make it green (default) */}
            <Button size="lg" onClick={scrollToOffer}>
              ¡QUIERO LAS RECETAS!
            </Button>
          </div>
        </div>
      </section>

      {/* --- VISUAL PROOF (Vertical Images) --- */}
      <section className="py-16 bg-[#fff7e7]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl uppercase tracking-widest font-bold text-gray-500 mb-10">
            Frescura <span className="text-brand-green">EN EL PLATO</span> + aderezos irresistibles
          </h2>
          <div className="space-y-8">
            {[
              "https://res.cloudinary.com/dvg6hojfs/image/upload/v1769133019/8_gd1iri.png",
              "https://res.cloudinary.com/dvg6hojfs/image/upload/v1769133017/9_w4au77.png",
              "https://res.cloudinary.com/dvg6hojfs/image/upload/v1769133017/10_rjgoch.png"
            ].map((src, i) => (
              <img 
                key={i} 
                src={src} 
                alt={`Demostración ${i + 1}`} 
                className="w-full rounded-xl shadow-xl hover:shadow-2xl transition-all"
              />
            ))}
          </div>
        </div>
      </section>

      {/* --- VIDEO PREVIEW --- */}
      <section className="py-20 bg-[#cbceae] text-gray-800 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="font-serif text-3xl mb-8 text-brand-green font-bold">MIRA EL ADELANTO DE LA CLASE 1:</h2>
          <div className="mx-auto w-full max-w-sm aspect-[9/16] bg-gray-800 rounded-xl overflow-hidden shadow-2xl border-4 border-gray-700">
             <iframe 
                className="w-full h-full"
                src="https://www.youtube.com/embed/ZAl1e8nmTbM" 
                title="Adelanto de la Clase 1" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>

      {/* --- BONUSES --- */}
      <section className="py-20 bg-[#fff7e7]">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-xl text-gray-600 mb-2">RECIBE AÚN</h3>
            <h2 className="font-serif text-4xl font-bold text-brand-green">+ 3 BONOS EXCLUSIVOS:</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {BONUSES.map((bonus) => (
              <div key={bonus.id} className="bg-[#CED6B6] rounded-2xl p-6 flex flex-col items-center shadow-lg transition-transform hover:-translate-y-1">
                {/* Image wrapper - no crop */}
                <div className="w-full rounded-xl overflow-hidden mb-6 shadow-sm">
                   <img 
                     src={bonus.imageUrl} 
                     alt={bonus.title} 
                     className="w-full h-auto block" 
                   />
                </div>
                
                <div className="text-center pb-2">
                  <h4 className="text-[#4A4F38] font-bold text-xl mb-4 tracking-wider uppercase">
                    {bonus.count}
                  </h4>
                  
                  <div className="mb-6">
                    <h3 className="text-[#2D2D2D] font-normal text-2xl leading-tight uppercase">
                      {bonus.title}
                    </h3>
                    <p className="text-[#2D2D2D] font-normal text-2xl leading-tight uppercase">
                      {bonus.subtitle}
                    </p>
                  </div>
                  
                  <p className="text-[#4A4F38] text-sm md:text-base font-medium">
                    <span className="line-through opacity-70 mr-2 text-black">{bonus.price}</span>
                    <span className="font-bold">¡HOY ES GRATIS!</span>
                  </p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
             <Button onClick={scrollToOffer}>¡QUIERO MIS BONOS!</Button>
          </div>
        </div>
      </section>

      {/* --- PAIN POINTS --- */}
      <section className="py-20 bg-[#fff7e7]">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="font-serif text-3xl font-bold text-gray-800 mb-8 uppercase">¿Esto te pasa a ti?</h2>
          <div className="bg-red-50 p-8 rounded-2xl border border-red-100 text-left space-y-4">
            {[
              "Pereza de lavar y cortar ensalada todos los días.",
              "Tiras la ensalada antes de lograr usarla.",
              "Dejas de comer ensalada algunos días de la semana.",
              "Te cansaste de la lechuga y el tomate.",
              "Ya comes saludable, pero fallas con la ensalada."
            ].map((pain, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <div className="bg-red-100 p-1 rounded-full mt-1">
                   <AlertCircle size={16} className="text-red-500" />
                </div>
                <span className="text-lg text-gray-700">{pain}</span>
              </div>
            ))}
          </div>
          <div className="mt-10">
            <p className="text-xl font-bold text-brand-green mb-6">Entonces necesitas esto:</p>
            <ArrowDown className="mx-auto text-brand-green animate-bounce" size={40} />
          </div>
        </div>
      </section>

      {/* --- OFFER SECTION (PRICING) --- */}
      <section id="offer" className="py-12 bg-[#cbceae] text-gray-800 relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-white/20 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/20 rounded-full translate-x-1/3 translate-y-1/3"></div>

        <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
          
          <div className="bg-[#fff7e7] text-gray-800 rounded-2xl shadow-2xl p-6 md:p-8 max-w-2xl mx-auto border-4 border-yellow-400">
            
            <div className="mb-4 text-center">
              <h2 className="font-serif text-3xl md:text-5xl font-bold mb-2 text-brand-green leading-tight">ENSALADAS EN ENVASE</h2>
              <h3 className="text-xl md:text-2xl font-light tracking-widest text-gray-600">+ ADEREZOS IRRESISTIBLES</h3>
            </div>

            <div className="mb-4 flex justify-center">
              <img 
                src="https://res.cloudinary.com/dvg6hojfs/image/upload/v1769280711/ChatGPT_Image_24_de_jan._de_2026_15_50_49_dybfkk.png" 
                alt="Pack Completo de Recetas" 
                className="w-3/4 md:w-2/3 h-auto transform hover:scale-105 transition-transform"
              />
            </div>

            <ul className="text-left space-y-3 mb-6 border-b border-gray-200 pb-6">
              <li className="flex items-center gap-2"><CheckCircle className="text-green-600" size={20}/><span className="font-bold">60 RECETAS DE ENSALADAS</span></li>
              <li className="flex items-center gap-2"><CheckCircle className="text-green-600" size={20}/><span className="font-bold">RECETAS DE ADEREZOS</span></li>
              <li className="flex items-center gap-2"><CheckCircle className="text-green-600" size={20}/><span>20 RECETAS DE SMOOTHIES</span></li>
              <li className="flex items-center gap-2"><CheckCircle className="text-green-600" size={20}/><span>5 RECETAS DE SHOTS MATUTINOS</span></li>
              <li className="flex items-center gap-2"><CheckCircle className="text-green-600" size={20}/><span>15 RECETAS DE AGUAS SABORIZADAS</span></li>
            </ul>

            <div className="mb-6">
              <span className="block text-gray-400 line-through text-lg">De $97</span>
              <div className="flex flex-col items-center justify-center">
                <span className="text-xl text-brand-green font-bold">por solo</span>
                <span className="text-6xl font-black text-brand-cta tracking-tighter">$9,90</span>
                <span className="text-sm text-gray-500 mt-2 max-w-xs mx-auto">El valor será convertido automáticamente a la moneda de tu país al momento del pago.</span>
              </div>
            </div>

            {/* Changed variant to cta for brighter green */}
            <Button 
              size="lg" 
              variant="cta" 
              fullWidth 
              className="text-xl py-6 animate-pulse"
              onClick={handleBuyClick}
            >
              ¡COMPRAR AHORA!
            </Button>
            <p className="text-xs text-red-500 font-bold mt-4 uppercase">** La oferta expira hoy **</p>
          </div>
          
          <div className="mt-8 flex justify-center gap-4 text-gray-700 text-sm font-semibold">
            <span className="flex items-center gap-1"><ShoppingCart size={14}/> Compra Segura</span>
            <span className="flex items-center gap-1"><Star size={14}/> Acceso Inmediato</span>
            <span className="flex items-center gap-1"><CheckCircle size={14}/> 7 Días de Garantia</span>
          </div>
        </div>
      </section>

      {/* --- AUTHOR SECTION --- */}
      <section className="py-20 bg-[#fff7e7]">
        <div className="max-w-5xl mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-1/2">
             <img 
              src="https://res.cloudinary.com/dvg6hojfs/image/upload/v1769211901/Generated_Image_January_23_2026_-_8_43PM_ro6pky.jpg" 
              alt="Lucía Fernández" 
              className="rounded-lg shadow-xl w-full"
            />
          </div>
          <div className="w-full md:w-1/2 text-left">
            <h3 className="text-brand-green uppercase tracking-wider font-bold mb-2">Ensaladas de la Nutri</h3>
            <h2 className="font-serif text-4xl font-bold text-gray-800 mb-6">LUCÍA FERNÁNDEZ</h2>
            <div className="w-20 h-1 bg-brand-green mb-6"></div>
            <p className="text-gray-700 leading-relaxed mb-4">
              Mis recetas de Ensaladas en Envase y Aderezos Irresistibles siempre han tenido éxito en internet. Decidí reunir las 60 mejores recetas en un solo lugar y compartir este conocimiento contigo también.
            </p>
            <p className="text-gray-700 leading-relaxed font-bold">
              Mi misión es mostrar que comer saludable puede ser práctico, delicioso y económico.
            </p>
          </div>
        </div>
      </section>

      {/* --- TESTIMONIALS (SOCIAL PROOF) --- */}
      <section className="py-16 bg-[#cbceae] overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h3 className="text-gray-800 font-semibold text-lg mb-8">Mira los mensajes que recibo casi todos los días:</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              "https://res.cloudinary.com/dvg6hojfs/image/upload/v1769216167/01_mcvadg.png",
              "https://res.cloudinary.com/dvg6hojfs/image/upload/v1769216168/02_hjekq4.png",
              "https://res.cloudinary.com/dvg6hojfs/image/upload/v1769216167/03_jamyil.png"
            ].map((src, i) => (
              <div key={i} className="transform hover:scale-105 transition-transform duration-300">
                <img 
                  src={src} 
                  alt={`Testimonio de alumna ${i + 1}`} 
                  className="w-full h-auto rounded-xl shadow-lg"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- FAQ SECTION --- */}
      <section className="py-20 bg-[#fff7e7]">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="font-serif text-3xl font-bold text-center text-gray-800 mb-12 uppercase">Preguntas Frecuentes</h2>
          <Accordion items={FAQ_ITEMS} />
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="bg-gray-800 text-gray-400 py-10 text-center text-sm">
        <div className="max-w-6xl mx-auto px-4">
          <p className="mb-4">&copy; 2024 Lucía Fernández. Todos los derechos reservados.</p>
          <div className="flex justify-center gap-4">
            <a href="#" className="hover:text-white">Términos de Uso</a>
            <a href="#" className="hover:text-white">Políticas de Privacidad</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;