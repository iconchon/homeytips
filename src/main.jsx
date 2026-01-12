import React, { useState, useEffect } from 'react';
import { 
  Home, 
  ShoppingBag, 
  Menu, 
  X, 
  ChevronRight, 
  Star, 
  CheckCircle, 
  Calendar, 
  DollarSign, 
  Plane, 
  Coffee,
  MessageCircle,
  Instagram,
  Github,
  Loader
} from 'lucide-react';

// --- COMPONENTS ---

const Header = ({ currentView, setView, isMobileMenuOpen, setIsMobileMenuOpen }) => (
  <header className="fixed top-0 w-full bg-white shadow-sm z-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between items-center h-16">
        <div className="flex items-center cursor-pointer" onClick={() => setView('home')}>
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center mr-2">
            <Home className="text-white w-5 h-5" />
          </div>
          <span className="font-bold text-xl text-blue-900">HomeyTips</span>
        </div>
        
        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-8">
          <button onClick={() => setView('home')} className={`${currentView === 'home' ? 'text-blue-600 font-semibold' : 'text-gray-500 hover:text-blue-600'}`}>Beranda</button>
          <button onClick={() => setView('tools')} className={`${currentView === 'tools' ? 'text-blue-600 font-semibold' : 'text-gray-500 hover:text-blue-600'}`}>Free Tools</button>
          <button onClick={() => setView('products')} className={`${currentView === 'products' ? 'text-blue-600 font-semibold' : 'text-gray-500 hover:text-blue-600'}`}>Produk</button>
          <button onClick={() => setView('testimonials')} className={`${currentView === 'testimonials' ? 'text-blue-600 font-semibold' : 'text-gray-500 hover:text-blue-600'}`}>Testimoni</button>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-gray-500 hover:text-blue-600">
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>
    </div>

    {/* Mobile Dropdown */}
    {isMobileMenuOpen && (
      <div className="md:hidden bg-white border-t border-gray-100">
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <button onClick={() => { setView('home'); setIsMobileMenuOpen(false); }} className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 w-full text-left">Beranda</button>
          <button onClick={() => { setView('tools'); setIsMobileMenuOpen(false); }} className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 w-full text-left">Free Tools</button>
          <button onClick={() => { setView('products'); setIsMobileMenuOpen(false); }} className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 w-full text-left">Produk</button>
        </div>
      </div>
    )}
  </header>
);

const Hero = ({ setView }) => (
  <div className="bg-gradient-to-br from-blue-50 to-white pt-24 pb-12 px-4 sm:px-6 lg:px-8">
    <div className="max-w-7xl mx-auto text-center">
      <h1 className="text-4xl tracking-tight font-extrabold text-blue-900 sm:text-5xl md:text-6xl">
        Kelola Hidup Lebih <span className="text-blue-600">Terencana</span>
      </h1>
      <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
        Tools sederhana dan template produktivitas untuk keuangan keluarga, rencana liburan, hingga menu harian. Mulai tata hidupmu hari ini.
      </p>
      <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
        <div className="rounded-md shadow">
          <button onClick={() => setView('products')} className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg">
            Lihat Template
          </button>
        </div>
        <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
          <button onClick={() => setView('tools')} className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-gray-50 md:py-4 md:text-lg">
            Coba Tools Gratis
          </button>
        </div>
      </div>
    </div>
  </div>
);

// --- TOOLS SECTION COMPONENTS ---

const FinancialTool = () => {
  const [income, setIncome] = useState('');
  const [expense, setExpense] = useState('');
  const [result, setResult] = useState(null);

  const calculate = () => {
    const inc = parseFloat(income) || 0;
    const exp = parseFloat(expense) || 0;
    const savings = inc - exp;
    const ratio = inc > 0 ? (savings / inc) * 100 : 0;
    setResult({ savings, ratio });
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-md border border-blue-100 h-full">
      <div className="flex items-center mb-4 text-blue-600">
        <DollarSign className="w-6 h-6 mr-2" />
        <h3 className="text-xl font-bold">Cek Kesehatan Keuangan</h3>
      </div>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Pemasukan Bulanan</label>
          <input type="number" value={income} onChange={(e) => setIncome(e.target.value)} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 bg-gray-50 p-2" placeholder="Contoh: 5000000" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Pengeluaran Bulanan</label>
          <input type="number" value={expense} onChange={(e) => setExpense(e.target.value)} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 bg-gray-50 p-2" placeholder="Contoh: 3000000" />
        </div>
        <button onClick={calculate} className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700">Hitung</button>
        
        {result && (
          <div className={`p-4 rounded-md ${result.savings >= 0 ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'}`}>
            <p className="font-bold">Sisa Uang: Rp {result.savings.toLocaleString()}</p>
            <p className="text-sm mt-1">
              Saving Ratio: {result.ratio.toFixed(1)}% 
              {result.ratio >= 20 ? " (Sehat! Targetkan >20%)" : " (Perlu ditingkatkan)"}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

const UmrahTool = () => {
  const [target, setTarget] = useState(30000000);
  const [saving, setSaving] = useState('');
  const [months, setMonths] = useState(null);

  const calculate = () => {
    const sav = parseFloat(saving) || 0;
    if (sav > 0) {
      setMonths(Math.ceil(target / sav));
    }
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-md border border-blue-100 h-full">
      <div className="flex items-center mb-4 text-blue-600">
        <Plane className="w-6 h-6 mr-2" />
        <h3 className="text-xl font-bold">Kalkulator Umrah/Liburan</h3>
      </div>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Target Dana (Rp)</label>
          <input type="number" value={target} onChange={(e) => setTarget(e.target.value)} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 bg-gray-50 p-2" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Kemampuan Menabung / Bulan</label>
          <input type="number" value={saving} onChange={(e) => setSaving(e.target.value)} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 bg-gray-50 p-2" placeholder="Contoh: 1000000" />
        </div>
        <button onClick={calculate} className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700">Hitung Estimasi</button>
        
        {months && (
          <div className="p-4 bg-blue-50 text-blue-900 rounded-md">
            <p>Anda bisa berangkat dalam waktu:</p>
            <p className="text-2xl font-bold">{months} Bulan</p>
            <p className="text-xs text-blue-600 mt-2">Atau sekitar {(months/12).toFixed(1)} tahun.</p>
          </div>
        )}
      </div>
    </div>
  );
};

const MealTool = () => {
  const [suggestion, setSuggestion] = useState(null);
  const meals = ["Sop Ayam + Perkedel", "Sayur Asem + Ikan Asin", "Tumis Kangkung + Tempe", "Ayam Kecap Mentega", "Soto Lamongan", "Gado-gado", "Nasi Goreng Spesial"];

  const generate = () => {
    const random = meals[Math.floor(Math.random() * meals.length)];
    setSuggestion(random);
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-md border border-blue-100 h-full">
      <div className="flex items-center mb-4 text-blue-600">
        <Coffee className="w-6 h-6 mr-2" />
        <h3 className="text-xl font-bold">Random Meal Idea</h3>
      </div>
      <div className="text-center space-y-4">
        <p className="text-gray-600 text-sm">Bingung mau masak apa besok? Klik tombol di bawah.</p>
        <div className="h-16 flex items-center justify-center bg-gray-50 rounded-md border border-dashed border-gray-300">
            {suggestion ? <span className="font-bold text-lg text-gray-800">{suggestion}</span> : <span className="text-gray-400">???</span>}
        </div>
        <button onClick={generate} className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700">Cari Ide Masak</button>
      </div>
    </div>
  );
};

// --- PRODUCT & CHECKOUT ---

const ProductCard = ({ product, onBuy }) => (
  <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow duration-300 flex flex-col h-full">
    <div className="h-48 bg-blue-100 flex items-center justify-center">
      {/* Placeholder Image using Icon */}
      <Calendar className="w-20 h-20 text-blue-300" />
    </div>
    <div className="p-6 flex flex-col flex-grow">
      <div className="flex items-center justify-between mb-2">
        <span className="px-3 py-1 bg-blue-50 text-blue-600 text-xs font-semibold rounded-full uppercase tracking-wide">
          {product.category}
        </span>
        <span className="text-lg font-bold text-blue-900">
          Rp {product.price.toLocaleString()}
        </span>
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-2">{product.title}</h3>
      <p className="text-gray-600 text-sm mb-4 flex-grow">{product.description}</p>
      
      <ul className="mb-6 space-y-2">
        {product.features.slice(0, 3).map((feat, idx) => (
          <li key={idx} className="flex items-center text-sm text-gray-500">
            <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
            {feat}
          </li>
        ))}
      </ul>

      <button 
        onClick={() => onBuy(product)}
        className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700"
      >
        <ShoppingBag className="w-4 h-4 mr-2" />
        Beli Sekarang
      </button>
    </div>
  </div>
);

const CheckoutModal = ({ product, onClose }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  // Whatsapp Generator
  const handleConfirm = () => {
    const phone = "6281234567890"; // Ganti dengan nomor Admin
    const message = `Halo HomeyTips, saya ingin membeli template: *${product.title}* seharga Rp ${product.price.toLocaleString()}. \n\nNama: ${name}\nEmail: ${email}`;
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg max-w-md w-full p-6 animate-fade-in-up">
        <div className="flex justify-between items-center mb-4 border-b pb-4">
          <h3 className="text-lg font-bold text-gray-900">Detail Pesanan</h3>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-500">
            <X className="w-6 h-6" />
          </button>
        </div>
        
        <div className="mb-6 bg-blue-50 p-4 rounded-md flex items-start">
            <ShoppingBag className="w-6 h-6 text-blue-600 mr-3 mt-1" />
            <div>
                <p className="font-semibold text-blue-900">{product.title}</p>
                <p className="text-sm text-blue-700">Rp {product.price.toLocaleString()}</p>
            </div>
        </div>

        <div className="space-y-4 mb-6">
            <p className="text-sm text-gray-600">Lengkapi data untuk konfirmasi pesanan:</p>
            <div>
                <label className="block text-sm font-medium text-gray-700">Nama Lengkap</label>
                <input type="text" value={name} onChange={e => setName(e.target.value)} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 bg-gray-50 p-2" />
            </div>
            <div>
                <label className="block text-sm font-medium text-gray-700">Email (untuk pengiriman file)</label>
                <input type="email" value={email} onChange={e => setEmail(e.target.value)} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 bg-gray-50 p-2" />
            </div>
        </div>

        <div className="space-y-3">
            <button 
                onClick={handleConfirm}
                disabled={!name || !email}
                className={`w-full flex items-center justify-center px-4 py-3 border border-transparent rounded-md shadow-sm text-sm font-medium text-white ${(!name || !email) ? 'bg-gray-400 cursor-not-allowed' : 'bg-green-600 hover:bg-green-700'}`}
            >
                <MessageCircle className="w-5 h-5 mr-2" />
                Beli via WhatsApp
            </button>
            <p className="text-xs text-center text-gray-500">
                Anda akan diarahkan ke WhatsApp untuk instruksi pembayaran (Transfer Bank / E-Wallet). File akan dikirim ke email setelah pembayaran dikonfirmasi.
            </p>
        </div>
      </div>
    </div>
  );
};

// --- MAIN APP ---

const App = () => {
  const [currentView, setView] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  
  // State untuk Data Dinamis dari JSON
  const [products, setProducts] = useState([]);
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);

  // FETCH DATA SAAT KOMPONEN DIMUAT
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        // Menggunakan path './data/...' agar compatible dengan Github Pages
        const prodRes = await fetch('./data/products.json');
        
        // Handle jika fetch gagal (misal file json belum tersedia di preview environment)
        if (!prodRes.ok) throw new Error('Network response was not ok');
        
        const prodData = await prodRes.json();
        
        const testiRes = await fetch('./data/testimonials.json');
        const testiData = await testiRes.json();

        setProducts(prodData);
        setTestimonials(testiData);
      } catch (error) {
        console.warn("Menggunakan data fallback karena fetch gagal:", error);
        // Fallback data agar preview tetap jalan meskipun json tidak terload di environment ini
        setProducts([
            { id: 1, title: "Template Keuangan (Offline Demo)", price: 49000, category: "Finance", description: "Deskripsi placeholder saat offline.", features: ["Fitur A"], image: "financial-sheet" },
            { id: 2, title: "Meal Prep (Offline Demo)", price: 29000, category: "Food", description: "Deskripsi placeholder saat offline.", features: ["Fitur B"], image: "meal-sheet" },
            { id: 3, title: "Umrah Planner (Offline Demo)", price: 35000, category: "Travel", description: "Deskripsi placeholder saat offline.", features: ["Fitur C"], image: "umrah-sheet" }
        ]);
        setTestimonials([
             { id: 1, name: "User Demo", role: "Pengunjung", text: "Konten gagal dimuat dari JSON, menampilkan data demo.", rating: 5 }
        ]);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Simple Router Switch
  const renderContent = () => {
    if (loading) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center text-blue-600">
                <Loader className="w-12 h-12 animate-spin mb-4" />
                <p>Memuat Data...</p>
            </div>
        );
    }

    switch(currentView) {
      case 'home':
        return (
          <>
            <Hero setView={setView} />
            
            {/* Featured Tools Teaser */}
            <div className="py-12 bg-white">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-extrabold text-blue-900">Tools Perencanaan Gratis</h2>
                  <p className="mt-4 text-gray-500">Gunakan tools sederhana ini langsung dari browser atau HP Anda.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <FinancialTool />
                  <UmrahTool />
                  <MealTool />
                </div>
                <div className="text-center mt-10">
                    <button onClick={() => setView('tools')} className="text-blue-600 font-semibold hover:text-blue-800 flex items-center justify-center mx-auto">
                        Lihat Semua Tools <ChevronRight className="w-4 h-4 ml-1"/>
                    </button>
                </div>
              </div>
            </div>

            {/* Featured Products */}
            <div className="py-12 bg-blue-50">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-extrabold text-blue-900">Template Premium</h2>
                  <p className="mt-4 text-gray-500">Upgrade produktivitas Anda dengan template siap pakai.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {/* Tampilkan 3 produk pertama */}
                  {products.slice(0,3).map(product => (
                    <ProductCard key={product.id} product={product} onBuy={setSelectedProduct} />
                  ))}
                </div>
                 <div className="text-center mt-10">
                    <button onClick={() => setView('products')} className="text-blue-600 font-semibold hover:text-blue-800 flex items-center justify-center mx-auto">
                        Lihat Katalog Lengkap <ChevronRight className="w-4 h-4 ml-1"/>
                    </button>
                </div>
              </div>
            </div>
            
             {/* Testimonials */}
            <div className="py-12 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-extrabold text-center text-blue-900 mb-12">Kata Mereka</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {testimonials.map(testi => (
                            <div key={testi.id} className="bg-gray-50 p-6 rounded-lg border border-gray-100">
                                <div className="flex text-yellow-400 mb-2">
                                    {[...Array(testi.rating)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                                </div>
                                <p className="text-gray-600 italic mb-4">"{testi.text}"</p>
                                <div>
                                    <p className="font-bold text-gray-900">{testi.name}</p>
                                    <p className="text-xs text-gray-500">{testi.role}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
          </>
        );
      case 'tools':
        return (
          <div className="pt-24 pb-12 px-4 max-w-7xl mx-auto min-h-screen">
             <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">Tools Perencanaan</h2>
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <FinancialTool />
                <UmrahTool />
                <MealTool />
                {/* Placeholder for future tools */}
                <div className="bg-gray-50 p-6 rounded-xl border border-dashed border-gray-300 flex flex-col items-center justify-center text-center">
                    <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center mb-3">
                        <span className="text-2xl text-gray-400">+</span>
                    </div>
                    <h3 className="text-gray-500 font-medium">Coming Soon</h3>
                    <p className="text-sm text-gray-400 mt-1">Kalkulator KPR</p>
                </div>
             </div>
          </div>
        );
      case 'products':
        return (
          <div className="pt-24 pb-12 px-4 max-w-7xl mx-auto min-h-screen">
            <h2 className="text-3xl font-bold text-blue-900 mb-4 text-center">Katalog Template</h2>
            <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
                File Excel/Google Sheet yang dirancang profesional untuk memudahkan hidup Anda. 
                Sekali bayar, pakai selamanya.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
               {products.map(product => (
                  <ProductCard key={product.id} product={product} onBuy={setSelectedProduct} />
               ))}
            </div>
          </div>
        );
        case 'testimonials':
            return (
                <div className="pt-24 pb-12 px-4 max-w-7xl mx-auto min-h-screen">
                    <h2 className="text-3xl font-bold text-blue-900 mb-12 text-center">Pengalaman Pengguna</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                         {testimonials.map(testi => (
                            <div key={testi.id} className="bg-white shadow-lg p-8 rounded-xl border-l-4 border-blue-500">
                                <div className="flex items-center mb-4">
                                     <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold text-xl mr-4">
                                        {testi.name.charAt(0)}
                                     </div>
                                     <div>
                                        <p className="font-bold text-gray-900 text-lg">{testi.name}</p>
                                        <p className="text-sm text-blue-600">{testi.role}</p>
                                     </div>
                                </div>
                                <div className="flex text-yellow-400 mb-4">
                                    {[...Array(testi.rating)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" />)}
                                </div>
                                <p className="text-gray-700 text-lg leading-relaxed">"{testi.text}"</p>
                            </div>
                        ))}
                    </div>
                </div>
            );
      default:
        return null;
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen font-sans text-gray-900">
      <Header 
        currentView={currentView} 
        setView={setView} 
        isMobileMenuOpen={isMobileMenuOpen} 
        setIsMobileMenuOpen={setIsMobileMenuOpen} 
      />
      
      <main>
        {renderContent()}
      </main>

      {/* Footer */}
      <footer className="bg-blue-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                    <div className="flex items-center mb-4">
                        <Home className="w-6 h-6 mr-2" />
                        <span className="font-bold text-xl">HomeyTips</span>
                    </div>
                    <p className="text-blue-200 text-sm">
                        Membantu keluarga Indonesia merencanakan masa depan dengan lebih baik melalui tools digital sederhana.
                    </p>
                </div>
                <div>
                    <h4 className="font-bold mb-4 text-lg">Menu</h4>
                    <ul className="space-y-2 text-blue-200 text-sm">
                        <li><button onClick={() => setView('tools')} className="hover:text-white">Tools Gratis</button></li>
                        <li><button onClick={() => setView('products')} className="hover:text-white">Template Excel</button></li>
                        <li><button onClick={() => setView('testimonials')} className="hover:text-white">Testimoni</button></li>
                    </ul>
                </div>
                <div>
                    <h4 className="font-bold mb-4 text-lg">Hubungi Kami</h4>
                    <div className="flex space-x-4 mb-4">
                        <a href="#" className="text-blue-200 hover:text-white"><Instagram className="w-5 h-5"/></a>
                        <a href="#" className="text-blue-200 hover:text-white"><MessageCircle className="w-5 h-5"/></a>
                        <a href="#" className="text-blue-200 hover:text-white"><Github className="w-5 h-5"/></a>
                    </div>
                    <p className="text-xs text-blue-400">&copy; 2024 HomeyTips. All rights reserved.</p>
                </div>
            </div>
        </div>
      </footer>

      {/* Modals */}
      {selectedProduct && (
        <CheckoutModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />
      )}
    </div>
  );
};

export default App;