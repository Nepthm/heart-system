/* =====================================================
   ISI WEBSITE: ubah file ini untuk mempersonalisasi.
   Nama, surat, alasan, dan keterangan foto ada di sini.

   Cara memasang foto:
   1. Taruh file foto di folder  public/photos/  (mis. 1.jpg, 2.jpg)
   2. Isi  src: '/photos/1.jpg'  pada foto yang sesuai di bawah.
   ===================================================== */

export const CONFIG = {
  name: 'Elisabeth',
  sender: 'Neptune',
  intro:
    'Masa ini seseorang yang dulunya memiliki dunia abu - abu, sekarang memiliki dunia yang berwarna. Terima kasih sudah menjadi warna di duniaku. ',
  photos: [
    { src: '/photos/1.webp', caption: 'Healing', date: 'Jd inget pas hujann' },
    { src: '/photos/4.webp', caption: 'Malam yang indah', date: 'Maen game bareng kamu tuh seruuu' },
    { src: '/photos/3.webp', caption: 'Lari 20mnt, istirahat 30mnt', date: 'Halo tantee' },
    { src: '/photos/6.webp', caption: 'Anak senja kaak?', date: 'Takut air laut🤭' },
    { src: '/photos/5.webp', caption: 'Jalan - jalan yg seruu', date: 'Bunganya kalah indah' },
    { src: '/photos/2.webp', caption: 'Fotomu yang paling kusuka', date: 'Selalu kusimpan buat jadi sticker yeeaaayy' },
  ],
  letter: [
    'Untuk {name},',
    'Selamat ulang tahun, {name}.',
    'Hari ini gw ingin berhenti nugas sejenak dan mengucapkan terima kasih. Terima kasih sudah menemani di dunia ini dan sudah mendengarkan beberapa cerita gw yang absurd.',
    'Bersamamu, hal-hal kecil terasa besar & waktu terasa terlalu cepat. Terima kasih sudah selalu ada di saat aku butuh. Terima kasih sudah menjadi orang yang sabar, yang selalu mengerti gw meski gw kadang sulit dimengerti.',
    'Di usia yang baru ini, semoga kamu selalu sehat, bahagia, dan dikelilingi orang-orang yang menyayangimu. Semoga semua mimpimu pelan-pelan menjadi nyata, dan apakah bisa aku ada di setiap langkahmu? ( hehehe... ).',
    'Aku tidak bisa berjanji untuk menjadi sempurna. Aku hanya berjanji akan terus belajar mencintaimu dengan lebih baik lagi, lagi dan lagi, hari demi hari.',
    'Selamat ulang tahun. Aku sayang kamu, hari ini dan seterusnya.',
  ],
  reasons: [
    'Tawamu membuat hari terberatku terasa ringan.',
    'Kamu mendengarkan dengan sungguh-sungguh, bahkan saat ceritaku absurd.',
    'Caramu menyikapi orang lain membuatku sadar kembali dan ingin menjadi pribadi yang lebih baik.',
    'Senyummu itu menular, nyengirr 😁😁😁.',
    'Bersamamu, diam pun terasa nyaman.',
    'Kamu adalah rumah, tempat aku selalu ingin pulang.',
  ],
};

export const LETTER_TEXT = CONFIG.letter.join('\n\n').replace(/\{name\}/g, CONFIG.name);
