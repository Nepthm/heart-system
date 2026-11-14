# Taman Hati

Website ulang tahun romantis: album polaroid, surat dalam amplop, kartu alasan, kue berlilin, taman bunga, dan musik kotak musik.
Dibuat dengan React 18, Vite 5, dan Tailwind CSS 3.

## Menjalankan

Butuh Node.js 18 atau lebih baru.

```bash
npm install
npm run dev       # buka alamat yang tampil, biasanya http://localhost:5173
npm run build     # hasil siap upload ada di folder dist/
npm run preview   # mencoba hasil build secara lokal
```

## Mengubah isi

Semua teks ada di satu file: `src/config.js`.

- `name`: nama yang diberi kejutan
- `sender`: tanda tangan di akhir surat
- `intro`: kalimat di halaman pembuka
- `photos`: keterangan dan tanggal tiap foto
- `letter`: isi surat, satu item per paragraf (`{name}` diganti otomatis)
- `reasons`: isi kartu "kenapa aku jatuh cinta padamu"

### Memasang foto

1. Taruh foto di folder `public/photos/` (mis. `1.jpg`, `2.jpg`).
2. Di `src/config.js`, isi `src: '/photos/1.jpg'` pada foto yang sesuai.

Foto juga bisa dipasang langsung di halaman dengan mengetuk bingkai kosong, tetapi cara itu hanya tersimpan di browser yang dipakai. Untuk dibagikan ke orang lain, pakai cara folder di atas.

## Struktur

```
src/
  main.jsx            titik masuk
  App.jsx             menyusun semua bagian
  config.js           isi website (teks, foto, surat)
  utils.js            fungsi bantu (ledakan hati, kompres foto)
  index.css           Tailwind + gaya dan animasi
  hooks/useMusic.js   musik kotak musik (Web Audio)
  components/
    Hero, Gallery, Polaroid, Lightbox, LetterSection,
    Reasons, Cake, Garden, Finale, Footer
    Ambient (kelopak jatuh), Bouquet, Flower, Leaf, Heart, MusicButton, SectionHead
```

## Menayangkan online

Setelah `npm run build`, upload isi folder `dist/` ke hosting statis seperti Netlify, Vercel, Cloudflare Pages, atau GitHub Pages.
