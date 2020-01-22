import React from 'react'

import Priorities from './Priorities'
import priorities from './priorities.json'

function Home() {
  return (
    <>
      <p>
        Jakou má naše země budoucnost? Pracujeme za peníze, které nám sotva
        zaplatí slušné bydlení. Každý desátý člověk žije pod hranicí příjmové
        chudoby. Téměř milion z nás se potýká s exekucí. Desetitisíce lidí
        nemají ani střechu nad hlavou nebo jim hrozí, že o ni přijdou.
        Oligarchové zatím bezostyšně prosazují své zájmy. Pánové Křetínský,
        Kellner, Bakala, Babiš, Tykač a další pustoší naši krásnou zemi a
        rozkrádají budoucnost nás všech i našich dětí. Důsledkem klimatické
        krize přicházíme o zdraví, úrodu na polích i vodu ve studnách.
      </p>
      <p>
        Pravidla a daňová zátěž nejvíce dopadají na nás obyčejné lidi, zatímco
        ti nahoře se jim úspěšně vyhýbají. Politické strany si vybírají zástupná
        témata a neřeší příčinu problémů.
        <br />
        Kvůli elitářství a neprostupnosti mocenských struktur se lidé nemohou na
        správě věcí reálně podílet. Z demokracie se stává prázdný pojem. Každý
        rok do zahraničí odtečou stovky miliard korun. Fungujeme jako montovna
        pro zbytek Evropy, na které vydělávají spekulanti a majitelé
        nadnárodních korporací. Krátkozraká politika patří minulosti, je na čase
        říct, že toho máme dost!
      </p>
      <p>
        Přicházíme s vizí spravedlivé, bezpečné a udržitelné budoucnosti.
        Budoucnosti, ve které ze společně vytvořeného bohatství těžíme všichni a
        ne jen úzká vrstva nejbohatších. Budoucnosti, ve které je spolupráce
        přínosnější než soupeření. Budoucnosti, ve které práce dává smysl a je
        dobře placená. Budoucnosti, ve které se myslí na všechny.
      </p>
      <p>
        Jsme široké politické hnutí otevřené všem, kdo věří, že změny k lepšímu
        lze dosáhnout jen společně a systémově. Jsme obyčejní lidé, ale spolu
        dokážeme neobyčejné věci - i změnit budoucnost jedné nádherné země v
        srdci Evropy.
      </p>

      <hr className="my-4 border-white" />

      <h2 className="mb-4">
        BUDOUCNOST JEŠTĚ NENÍ NAPSANÁ - POJĎME JI TVOŘIT SPOLEČNĚ
      </h2>

      <Priorities data={priorities} />
    </>
  )
}

export default Home
