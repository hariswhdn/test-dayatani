# Test Dayatani

Proyek aplikasi web yang memungkinkan pengguna untuk mengelola informasi detail petani.

## Table of Contents

- [Feature](#feature)
- [Stack](#stack)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)

## Feature

- Kelola Petani
- Responsive Web Design

## Stack

- **Vite (SWC):** Bundler
- **React:** Library
- **Redux:** State management
- **React Router:** Routing
- **Axios:** Fetching
- **Tailwind:** CSS framework
- **Urbanist:** Fonts
- **Icons & Mock server Agricola:** Dayatani

## Prerequisites

Pastikan komputer sudah terinstal software berikut:

- **[Node.js](https://nodejs.org/en/download)**: versi 20 atau lebih tinggi.
- **[Pnpm](https://pnpm.io)**: Instal Pnpm secara global menggunakan npm dengan perintah berikut:

```
npm install -g pnpm
```

- **[Agricola](https://github.com/DayaTani/agricola)**: Proyek ini memerlukan Mock server Agricola milik DayaTani.

## Installation

1. Unduh proyek ke komputer

```
git clone https://gitlab.com/test-dayatani/hrswhdn/test-dayatani.git
```

2. Buka folder dan instal dependency proyek

```
cd test-dayatani
pnpm install
```

## Usage

1. Ganti nama file .env.example menjadi .env
2. Ubah isi file .env dengan URL dan Password Agricola yang telah dijalankan, contoh:

```
VITE_BASE_URL="http://localhost:3000"
VITE_PASSWORD="haris123"
```

3. Jalankan proyek ini

```
pnpm run dev
```

## License

Proyek ini dilisensikan di bawah Lisensi MIT - [LICENSE.md](LICENSE.md).
