# INSTITUTIONAL TRADER PRO - PWA (GitHub Pages)

Cara upload ke GitHub Pages (dari HP juga bisa):

1. Di github.com -> New repository -> Nama: `trader-pro-pwa` (bebas) -> Public -> Create
2. Di repo baru -> Add file -> Upload files -> Upload SEMUA file di folder ini:
   - index.html
   - manifest.webmanifest
   - sw.js
   - .nojekyll (JANGAN lupa, file ini wajib!)
   - icons/icon-192.png, icons/icon-192-maskable.png, icons/icon-512.png, icons/icon-512-maskable.png
   PENTING: Upload langsung di root repo, JANGAN di dalam folder lagi. Jadi di repo harus langsung kelihatan index.html, bukan trader-pro-pwa/index.html
3. Commit -> Settings -> Pages -> Branch: main, Folder: / (root) -> Save
4. Tunggu 1-2 menit -> Buka https://USERNAME.github.io/trader-pro-pwa/
   Ganti USERNAME dengan username GitHub kamu.

Catatan:
- Di GitHub Pages, Netlify Function TIDAK jalan. Script sudah otomatis deteksi github.io dan langsung fetch ke api.twelvedata.com (direct). Jadi Test Koneksi tetap LIVE.
- API Key tetap disimpan di HP (localStorage), tidak di GitHub.
- Kalau update file, commit lagi, tunggu 1 menit, tutup total PWA lalu buka lagi.
