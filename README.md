<div align="center">
    <img src="./public/images/infor.png"  height="100%" width="40%" alt="logo">
</div>

<hr>

1. Taufiqurrahman Yudhi Atmadja (202210370311066)
2. Nafhilal Akbiratul Firmansyah (202210370311099)
3. Jaki Nurhadiyansah (202210370311275)

## role : 
1. admin:
- manajemen tiket 
- chat
2. employee
- Manajemen Karyawan
- Profil Karyawan 
- chat
3. Klien
- Tampilan Kartu dan Tabular untuk Klien.
- chat

## Fitur
1. chat
2. Informasi Pribadi
3. Kontak Darurat
4. Kehadiran
Tampilan Tabular yang Dikurasi dari kehadiran karyawan dengan filter untuk nama karyawan, bulan dan tahun kehadiran.
5. Tiket
Manajemen Tiket yang Mudah.
Edit Tiket untuk menugaskan pengguna (karyawan) ke tiket. sehingga, mereka dapat berbicara dengan orang yang membuka tiket.
Catatan: tidak dapat menugaskan admin ke tiket. Tetapi dapat melihat semua tiket dan ikut serta dalam percakapan.
hanya admin yang dikirimi email saat tiket baru dibuka.


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

- jalankan migrations dan seeders

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

- Super Admin
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

