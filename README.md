Nabthat tworzy rozwiązania dla branży automotive. Podstawowym zasobem w niej jest Vehicle, który można opisać wieloma atrybutami np. year, make, model, trim oraz to czy samochód już został sprzedany (sold). Unikalną wartością która opisuje każde auto jest jego numer VIN.

Twoim zadaniem jest stworzenie prostego narzędzia do zarządzania danymi samochodów po stronie panelu, tak by można było wyświetlić listę dodanych aut, dodawać je, edytować i usuwać. Druga aplikacja powinna jedynie prezentować dane (pobierane z aplikacji zarządzającej) w postaci listy dostępnych aut i karty poszczególnego samochodu. 

Przygotowane środowisko składa się z kilku dockerowych kontenerów na których funkcjonują dwie świeżo wygenerowane aplikacje: backendowa w Rails, tj. panel do zarządzania danymi i frontendowa w Angular, czyli strona do przedstawiania danych światu.
