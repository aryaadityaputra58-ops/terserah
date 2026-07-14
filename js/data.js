/* ============================================================
   Hammers Wallabe — Data Store
   Semua data kategori & produk didefinisikan di sini agar mudah
   dipelihara. Di produksi nyata, data ini akan datang dari API/CMS.
   ============================================================ */

const CATEGORIES = [
  { slug: "terrace", name: "Terrace Series",  blurb: "Sneaker suede klasik bergaya kota, sol gum ikonik" },
  { slug: "spezial",  name: "Spezial Series",  blurb: "Silhouette handball klasik, warna-warna berani" },
  { slug: "runner",   name: "Classic Runner",  blurb: "Sneaker retro dengan sol tebal empuk sepanjang hari" },
];

const CAT_ACCENT = {
  terrace: "#7C1F3D",
  spezial: "#5B3A8E",
  runner:  "#1E5F8C",
};

/* Setiap produk memakai foto asli koleksi (folder images/) agar
   pembeli bisa melihat detail warna & tekstur suede yang sebenarnya. */
const PRODUCTS = [
  { id: "p01", name: "Wien Suede",          category: "terrace", price: 1850000, rating: 4.9, stock: 10, origin: "Euro City Pack", image: "images/wien.webp",         tags: ["suede","sol gum","pastel"], desc: "Wien Suede tampil dengan upper suede biru pastel lembut, tiga garis kuning pastel yang kontras, dan tali coral pink. Sol gum klasik memberi sentuhan retro sekaligus nyaman dipakai seharian." },
  { id: "p02", name: "Dublin '78",          category: "terrace", price: 1750000, rating: 4.8, stock: 8,  origin: "City Series 1978", image: "images/dublin.jpg",        tags: ["suede","hijau","edisi arsip"], desc: "Dublin '78 menghidupkan kembali arsip city series legendaris dengan suede hijau tajam dan garis krem lembut. Sol karet hitam solid menopang gaya jalanan yang percaya diri." },
  { id: "p03", name: "Liverpool Suede",     category: "terrace", price: 1690000, rating: 4.7, stock: 14, origin: "UK City Pack",    image: "images/liverpool.jpg",     tags: ["suede","hijau tua","kuning"], desc: "Liverpool Suede memadukan suede hijau botol pekat dengan tiga garis kuning cerah yang mencolok, dilengkapi sol karet hitam untuk daya tahan ekstra di jalanan." },
  { id: "p04", name: "Hamburg Navy",        category: "runner",  price: 1590000, rating: 4.8, stock: 20, origin: "Classic Runner",  image: "images/hamburg-navy.jpg",   tags: ["suede","navy","sol krem"], desc: "Hamburg Navy adalah runner klasik dengan upper suede navy tebal, garis putih bersih, dan midsole krem empuk yang jadi favorit sehari-hari sejak dulu." },
  { id: "p05", name: "Bali Teal",           category: "terrace", price: 1450000, rating: 4.6, stock: 16, origin: "Island Edition",  image: "images/bali.jpg",           tags: ["suede","teal","edisi pulau"], desc: "Bali Teal terinspirasi dari birunya laut Nusa Dua — suede teal menyeluruh dengan garis dan sol senada, tampil minimalis namun tetap mencolok." },
  { id: "p06", name: "Birmingham Purple",   category: "spezial", price: 1950000, rating: 4.9, stock: 6,  origin: "Spezial Handball", image: "images/birmingham.jpg",     tags: ["suede","ungu","edisi terbatas"], desc: "Birmingham Purple, edisi terbatas bersilhouette handball klasik. Suede ungu tegas berpadu garis putih dan sol gum, jadi salah satu colorway paling diburu kolektor." },
  { id: "p07", name: "Hamburg Cream Sole",  category: "runner",  price: 1650000, rating: 4.7, stock: 12, origin: "Classic Runner",  image: "images/hamburg-cream.webp", tags: ["suede","navy","sol krem"], desc: "Varian Hamburg dengan midsole krem tebal dan tumit putih kontras. Nyaman dipakai jalan jauh berkat bantalan ekstra pada solnya." },
  { id: "p08", name: "Amsterdam Blue",      category: "terrace", price: 1700000, rating: 4.8, stock: 11, origin: "Euro City Pack",  image: "images/amsterdam.jpg",      tags: ["suede","biru royal","kuning"], desc: "Amsterdam Blue tampil berani dengan suede biru royal, gradasi garis biru muda, dan aksen tumit kuning cerah — sol translucent teal jadi ciri khasnya." },
  { id: "p09", name: "München Navy",        category: "spezial", price: 1780000, rating: 4.8, stock: 9,  origin: "Spezial Handball", image: "images/munich.jpg",         tags: ["suede","navy","merah"], desc: "München Navy memadukan suede navy dalam dengan tiga garis putih-merah yang berani, disempurnakan detail lidah bertali khas seri handball." },
  { id: "p10", name: "London '96 Black",    category: "terrace", price: 1890000, rating: 4.9, stock: 7,  origin: "UK City Pack",    image: "images/london.jpg",         tags: ["suede","hitam","edisi terbatas"], desc: "London '96 Black tampil gelap dan misterius — suede hitam pekat, garis putih dengan aksen burgundy di tumit, sol hitam solid. Edisi terbatas untuk pecinta sneaker klasik." },
];

/* Kurs & format harga */
function formatIDR(n) {
  return "Rp" + n.toLocaleString("id-ID");
}

function getProductById(id) {
  return PRODUCTS.find(p => p.id === id);
}
