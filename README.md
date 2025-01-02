<div align="center">
    <img src="./public/images/infor.png"  height="100%" width="40%" alt="logo">
</div>

<hr>

1. Taufiqurrahman Yudhi Atmadja (202210370311066)
2. Nafhilal Akbiratul Firmansyah (202210370311099)
3. Jaki Nurhadiyansah (202210370311275)


## Fitur
1. Aplikasi Obrolan Satu-satu untuk pengguna
2. Karyawan
- Manajemen Karyawan yang Mudah
- Profil Karyawan yang Terstruktur dengan Baik untuk mengelola
1. Informasi Pribadi
2. Kontak Darurat
3. Pendidikan
4. Pengalaman kerja dan anggota keluarga mereka
5. Aset yang Ditugaskan.
6. Ajukan Masalah tentang aset untuk memberi tahu admin

- Kehadiran
Tampilan Tabular yang Dikurasi dari kehadiran karyawan dengan filter untuk nama karyawan, bulan dan tahun kehadiran.
- Manajemen Departemen
- Manajemen Jabatan
- Manajemen Hari Libur

3. Klien
Tampilan Kartu dan Tabular untuk Klien. Membuat manajemen klien menjadi mudah.

4. Tiket
Manajemen Tiket yang Mudah.
Edit Tiket untuk menugaskan pengguna (karyawan) ke tiket. sehingga, mereka dapat berbicara dengan orang yang membuka tiket.

Catatan: Anda tidak dapat menugaskan admin ke tiket. Tetapi mereka dapat melihat semua tiket dan ikut serta dalam percakapan.

Selain itu, untuk saat ini hanya admin yang dikirimi email saat tiket baru dibuka.

5. Pengguna
Manajemen Crud pengguna dalam sistem.
Setiap pengguna yang Anda tambahkan di sini akan menjadi admin dan mereka memiliki hak istimewa tertentu atas karyawan dan klien.

6. Cadangan
Panel sederhana untuk mengelola cadangan aplikasi.
Anda dapat memulai cadangan untuk seluruh aplikasi (kode + db) atau hanya basis data. Tentu saja Anda juga dapat mengunduh atau menghapus cadangan jika Anda diberi izin.

7. Pengaturan
- Perusahaan
Masukkan detail perusahaan Anda di sini. Detail ini akan digunakan saat membuat faktur
- Lokalisasi
- Lokalisasi Dasar untuk aplikasi
Ini termasuk negara, zona waktu, bahasa, format tanggal, mata uang, dan kode mata uang Anda.
- Faktur
Pengaturan dasar untuk faktur Anda.
Untuk saat ini, Anda hanya dapat mengatur logo dan awalan

- Tema
Pengaturan Tema Umum. Perhatikan bahwa, pengaturan yang dilakukan di sini akan memengaruhi seluruh aplikasi.

8. Aset
Manajemen Crud aset. Saat aset ditetapkan kepada karyawan dan Anda melihat profilnya, Anda akan melihat tab aset. Yang akan menampilkan semua aset yang ditetapkan kepada karyawan tersebut
9. Akuntansi
1. Anggaran
- Manajemen kategori anggaran
- Manajemen Anggaran
Tambah dan Kelola anggaran Anda baik untuk proyek atau berdasarkan kategori.

- Kelola Pengeluaran Anggaran
- Kelola Pendapatan Anggaran

10. Proyek
Manajemen Proyek Lengkap dengan papan tugas dan manajemen tugas.

- Manajemen proyek CRUD
- Tetapkan Pimpinan Proyek dan tim untuk proyek
- Tampilan Rinci proyek dengan semua deskripsi singkat, deskripsi terperinci, dan file yang diunggah.
- Manajemen Papan Tugas Proyek
Anda dapat menambahkan tugas baru ke papan tugas atau bahkan menambahkan papan baru ke papan tugas default
- Tetapkan Tugas kepada karyawan melalui papan tugas.
Pindahkan tugas dari satu papan ke papan lainnya hanya dengan menyeretnya ke papan berikutnya.
- Anda juga dapat mengatur papan tugas default yang akan dimuat untuk setiap proyek baru

11. Peran & Izin
Kelola peran dan izin pengguna untuk seluruh aplikasi di sini.
- Anda dapat menambahkan Peran baru, mengedit yang sudah ada, dan juga memperbarui izin untuk setiap peran yang Anda pilih.

12. Penjualan
Di bagian penjualan, Anda akan dapat mengelola Pajak, Estimasi, dan Faktur.

- Manajemen pajak kasar

- Manajemen Estimasi kasar. Anda juga dapat melihat estimasi secara terperinci. Tambahkan item baru ke dalamnya dan unduh sebagai pdf atau cetak.

- Manajemen faktur kasar

Sama seperti Estimasi, Anda dapat membuat, mengedit, melihat, mencetak, mengunduh pdf, dan menghapusnya.

13. Penggajian

Buat dan kelola slip gaji untuk karyawan.

Kelola tunjangan dan potongan slip gaji.



## Installation

- Install dependencies
    - Composer

	```
	composer install

	```
	- Npm
	```
	npm install
    npm run build
	```

- membuat database

- copy paste .env.example dan rename menjadi .env


- Generate app key 
```
php artisan key:generate

```

- Set database connection

```
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=hrm
DB_USERNAME=root
DB_PASSWORD=

```

- Run migrations dan seeders

```
php artisan migrate:fresh --seed

```

- membuat Symlink storage
```
php artisan storage:link
```


- jalankan local server laravel 
```
php artisan serve

```

### Login Credentials

- Admin
```
 email: superadmin@gmail.com
 password: password
```

- Employee
```
 email: employee@gmail.com
 password: password
```

- Client
```
 email: client@gmail.com
 password: password
```

