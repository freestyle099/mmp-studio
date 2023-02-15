function emailTemplate(body) {
  return `
      <div style="width: 640px; color: rgba(0,0,0,.87)">
        <p style="font-weight: bold; font-size: 14px">
        Dziękujemy za wysłanie wiadomości. Skontaktujemy się z Państwem najszybciej jak to będzie możliwe.</p> 
        <p style="font-weight: bold; font-size: 14px">Wiadomość wysłana automatycznie prosimy na nią nie odpowiadać.</p>
        <hr/>
        <p>Treść wiadomości: </p>
        <div><span style="font-weight: bold">Imię: </span><span>${body.name}</span></div>
        <div><span style="font-weight: bold">Nazwisko: </span><span>${body.surname}</span></div>
        <div><span style="font-weight: bold">Adres email: </span><span>${body.email}</span></div>
        <div><span style="font-weight: bold">Telefon kontaktowy: </span><span>${body.phone}</span></div>
        <div><span style="font-weight: bold">Wiadomość: </span><span>${body.message}</span></div>
        <hr />
        <div style="font-size: 12px; color: #333">
            <div>MMPStudio.pl</div>
            <div>Pod Blachówką 2</div>
            <div>34-511 Kościelisko</div>
            <div>NIP: PL736-170-53-69</div>
            <div>+48 696 388 885</div>
        </div>
      </div>`;
}

module.exports = emailTemplate;
