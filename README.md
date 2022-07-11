Nabthat tworzy rozwiązania dla branży automotive. Podstawowym zasobem w niej jest pojazd. Vehicle można opisać m.in. koniecznymi atrybutami: kind (new|used), status (in transit|available|sold), vin, stock, year, make, model, trim oraz opcjonalnie atrybutami cen: price (selling price) i msrp.

Unikalną wartością która indentyfikuje każde auto jest jego numer VIN. Ma on specjalny format m.in. zawsze musi mieć 17 znaków.

Dodatowo samochód może znajdować się w różnej lokalizacji. Location, oprócz unikalnej nazwy, musi posiadać także city, state, zipcode oraz street. Zipcode zawsze występuje w postaci tekstu złożonego z 5 cyfr.

Przygotowane środowisko składa się z dwóch aplikacji osadzonych dla wygody developera w docker-owych kontenerach. Środowisko można uruchomić przy pomocy docker-compose.

W katalogu backend zawarta jest aplikacja Rails-owa. Jest ona odpowiedzialna za pozyskiwanie danych i dostarczanie ich dla aplikacji frontendowej.

W katalogu frontend znajduje się aplikacja frontend-owa napisana w Angularze. Jej celem jest wyświetlanie danych pobieranych z API. Po zainstalowaniu niezbędnych paczek ("npm install") można uruchomić ją za pomocą "npm run start".

Aplikacja Rails-owa posiada już część odpowiedzialną za komunikację z frontendem. Niestety nie działa sortowanie i filtrowanie wyników.
Poza tym nie pozyskuje danych. Nie ma też pewności, że dane zapisywane w bazie są poprawne.

Twoim zadaniem jest napisanie części odpowiedzialnych za:

1) Pobieranie danych z konta FTP z pliku CSV (host: ftp.nabthat.com, user: taskftp, password: \_XxwxaJjNCQ_y9). Nie dodawaj dodatkowych kolumn do bazy danych. Zadbaj o to żeby dane zapisywane w bazie zawsze były poprawne a wiersze niepoprawne odrzucane.

2) Sortowanie i filtrowanie wyników prezentowanych we frontend. Sortowanie po kolumnach: year, price, msrp, name, monthly price. Filtrowanie po kolumnach: kind, status oraz search by text który sprawdza czy tekst występuje w vin, stock lub name.

Nie dokonuj żadnych zmian w części frontend-owej (chyba, że wyłapiesz jakiś błąd który ma wpływ na pracę backendu).

Nie twórz fork-a tego repozytorium. Wynik swojej pracy wyślij do nowej gałęzi w tym repozytorium i zrób pull request.
