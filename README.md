# Aplikacija za upravljanje materijalima za lekcije

Web aplikacija namenjena upravljanju i pristupu materijalima za lekcije. Sistem omogućava instruktorima da otpremaju materijale (video zapise i dokumente) za svoje lekcije, dok studenti mogu pregledati i preuzeti te materijale.

UPUTSTVO ZA POKRETANJE APLIKACIJE

**1.Klonirajte frontend i backend repozitorijume:**

git clone https://github.com/elab-development/internet-tehnologije-projekat-aplikacijazaonlineucenje_2020_0122

**2.INSTALIRAJTE XAMPP**

preuzmite i instalirajte xampp control panel sa službenog sajta. https://www.apachefriends.org/.
startujte apache i mysql

**3. Podešavanje backend-a**
Pređite u backend direktorijum:
cd laravel

Instalirajte potrebne PHP zavisnosti:
composer install

Pokrenite migracije za bazu podataka:
php artisan migrate 

Pokrenite backend server:
php artisan serve
Backend će biti dostupan na http://localhost:8000.

**4.Podešavanje frontend-a**
Pređite u frontend direktorijum:
cd frontend

instalirajte potrebne zavisnosti:
npm install

pokrenite frontend aplikaciju:
npm start
Frontend će biti dostupan na http://localhost:3000.


Otvorite http://localhost:3000 u vašem browseru.
