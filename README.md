
# Notes App 

Panduan sederhana untuk memulai proyek Node.js dengan Framework Hapi, dilengkapi dengan Nodemon untuk *live reload* dan aturan *linting* dari Dicoding Academy. Referensi dari Dicoding: AWS Back-End Academy sebagai sumber panduan.




# Installation

### 1. Inisialisasi Proyek
Membuat file `package.json` secara otomatis menggunakan perintah berikut:

```bash
 npm init --y
```
### 2. Instalasi Nodemon
Install Nodemon sebagai devDependency agar aplikasi dapat dijalankan ulang otomatis saat ada perubahan:

```bash
 npm install nodemon --save-dev
```
### 3. Instalasi Hapi
Install Hapi sebagai framework server:

```bash
npm install @hapi/hapi

```
Dokumentasi Hapi: https://hapi.dev/




    
### 4. Modifikasi Scripts
Sesuaikan bagian scripts pada `package.json` untuk menjalankan server dalam mode pengembangan menggunakan Nodemon. Tambahkan konfigurasi berikut:

```javascript
"scripts": {
  "start:dev": "nodemon ./src/server.js",
  "test": "echo \"Error: no test specified\" && exit 1"
}
```
Sekarang, `npm run start:dev` akan menjalankan server dan melakukan reload otomatis setiap kali ada perubahan kode.



### 5. Setup ESLint dengan Style Guide Dicoding Academy
Untuk memastikan konsistensi kode, tambahkan ESLint ke proyek dengan style guide dari Dicoding Academy:

```bash
 npm init @eslint/config@latest
 npm install --save-dev eslint-config-dicodingacademy
```


### 6. Konfigurasi di Eslint
Tambahkan kode berikut pada `eslint.config.mjs` untuk mengaktifkannya:

```javascript
import daStyle from 'eslint-config-dicodingacademy';

export default [
  daStyle,
  // konfigurasi lainnya
];
```
### 7. NPM Runner ESLint
npm runner untuk menjalankan ESLint di dalam berkas `package.json`:

```javascript
"scripts": {
  "start": "nodemon server.js",
  "lint": "eslint ./src"
}
```
```bash
 npm run lint
```
Unduh Extension: https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint






### 5. Setup ESLint dengan Style Guide Dicoding Academy
Untuk memastikan konsistensi kode, tambahkan ESLint ke proyek dengan style guide dari Dicoding Academy:

```bash
 npm init @eslint/config@latest
 npm install --save-dev eslint-config-dicodingacademy
```

### 5. Setup ESLint dengan Style Guide Dicoding Academy
Untuk memastikan konsistensi kode, tambahkan ESLint ke proyek dengan style guide dari Dicoding Academy:

```bash
 npm init @eslint/config@latest
 npm install --save-dev eslint-config-dicodingacademy
```

