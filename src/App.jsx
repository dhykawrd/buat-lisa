import { useEffect, useRef, useState } from "react";

function Awal({ onClick }) {
  return (
    <>
      <div className="stp">
        <p>
          Anyongg, ada suratt untuk mamaa kasaa
          <img src="/sudut.svg" id="" />
        </p>
      </div>
      <img src="/mail.svg" id="ml" onClick={onClick} className="bg-tings" />
    </>
  );
}

function Card1({ onClick }) {
  return (
    <div className="pu-ctnr pu-ctn">
      <div className="pu bg-white">
        <div className="t">
          <div>
            <div></div>
          </div>
        </div>
        <div className="c">
          <img src="/1.gif" className="mx-auto h-36" />
          <p>Hallo Sayangg Akooh 💖</p>
          <div className="btn">
            <button onClick={onClick}>Halo Juga</button>
          </div>
        </div>
      </div>
    </div>
  );
}

function Card2({ onClick }) {
  return (
    <div className="flex items-center justify-center pu-ctnr pu-ctn">
      <div className="pu bg-white">
        <div className="t">
          <div>
            <div></div>
          </div>
        </div>
        <div className="c">
          <img src="/2.gif" className="mx-auto h-36" />
          <p>Coba tebak deh siapa yang hari ini ulang tahun? cluenya adalah L</p>
          <div className="btn">
            <button onClick={onClick}>Aku ?</button>
          </div>
        </div>
      </div>
    </div>
  );
}

function Card3({ onClick }) {
  return (
    <div className="flex items-center justify-center pu-ctnr pu-ctn">
      <div className="pu bg-white">
        <div className="t">
          <div>
            <div></div>
          </div>
        </div>
        <div className="c">
          <img src="/3.gif" className="mx-auto h-36" />
          <p>Yeayyyy betul pacar aku yg paling cantikk sedunia namanya Lisaa Wirandaa</p>
          <div className="btn">
            <button onClick={onClick}>Ok</button>
          </div>
        </div>
      </div>
    </div>
  );
}

function Card31({ onClick }) {
  return (
    <div className="flex items-center justify-center pu-ctnr pu-ctn">
      <div className="pu bg-white">
        <div className="t">
          <div>
            <div></div>
          </div>
        </div>
        <div className="c">
          <p>dikaa bersyukur bgtt ada kamu di hidup aku </p>
          <div className="btn">
            <button onClick={onClick}>Kenapa?</button>
          </div>
        </div>
      </div>
    </div>
  );
}

function Card32({ onClick }) {
  return (
    <div className="flex items-center justify-center pu-ctnr pu-ctn">
      <div className="pu bg-white">
        <div className="t">
          <div>
            <div></div>
          </div>
        </div>
        <div className="c">
          <img src="/8.gif" className="mx-auto h-36" />
          <p>Kamu membuatku sadar kalau dunia itu indahh dan bewarna hhe</p>
          <div className="btn">
            <button onClick={onClick}>Dasar</button>
          </div>
        </div>
      </div>
    </div>
  );
}

function Card33({ onClick }) {
  return (
    <div className="flex items-center justify-center pu-ctnr pu-ctn">
      <div className="pu bg-white">
        <div className="t">
          <div>
            <div></div>
          </div>
        </div>
        <div className="c">
          <img src="/9.gif" className="mx-auto h-36" />
          <p>Intinya adalah</p>
          <div className="btn">
            <button onClick={onClick}>next</button>
          </div>
        </div>
      </div>
    </div>
  );
}

function Card4({ onClick }) {
  return (
    <div className="flex items-center justify-center pu-ctnr pu-ctn">
      <div className="pu bg-white">
        <div className="t">
          <div>
            <div></div>
          </div>
        </div>
        <div className="c">
          <img src="/4.gif" className="mx-auto h-36" />
          <p>Selamat Ulang Tahun Pacar Aku yang cantik nan Imutt</p>
          <div className="btn">
            <button onClick={onClick}>next</button>
          </div>
        </div>
      </div>
    </div>
  );
}

function Card5({ onClick }) {
  return (
    <div className="flex items-center justify-center pu-ctnr pu-ctn">
      <div className="pu bg-white">
        <div className="t">
          <div>
            <div></div>
          </div>
        </div>
        <div className="c">
          <img src="/5.gif" className="mx-auto h-36" />
          <p>
          Ga kerasaa ya bocil se-imyut kamu uda 16 thun.. semoga kamu sayang terus ya sama dika, selalu cinta sama dika, selalu perhatian sama dika, pokoknya kamu itu cuma punya dika hehe.. even jarak sekalipuunn gabisa ngurangin rasa cinta dika ke kamuu! btw maaf ya atas segala perilaku dika selama ini :(  
          </p>
          <div className="btn">
            <button onClick={onClick}>next</button>
          </div>
        </div>
      </div>
    </div>
  );
}

function Card6({ onClick }) {
  return (
    <div className="flex items-center justify-center pu-ctnr pu-ctn">
      <div className="pu bg-white">
        <div className="t">
          <div>
            <div></div>
          </div>
        </div>
        <div className="c">
          <img src="/6.gif" className="mx-auto h-36" />
          <p>
            Kamuu yang semangat yaa jalanin hari-harinyaa, jngan pernah sedih ya nanti makin lucu.. dika sayang bgtt sama kamu, cinta bgtt sama kamu, dika maunya kamu yang terakhir di hidup dikaa. Mungkin itu aja yang bisa dika ungkapin, selebihnya ada di dalam doa dika kok HiHiHi
          
          </p>
          <div className="btn">
            <button onClick={onClick}>Next</button>
          </div>
        </div>
      </div>
    </div>
  );
}

function Card7({ onClick }) {
  return (
    <div className="flex items-center justify-center pu-ctnr pu-ctn">
      <div className="pu bg-white">
        <div className="t">
          <div>
            <div></div>
          </div>
        </div>
        <div className="c">
        <img src="/us.jpg" className="mx-auto h-36" />
          <p>I LOVE YOU SAYANGNYA AKU CINTANYA AKU MAMA KASANYA AKU MANJA MENGKEKNYA AKUU ALAM SEMESTANYA AKU LUCUNYA AKU IMUTNYA AKUUU BULANNYA AKUU💖🥰</p>
          <div className="btn">
            <button onClick={onClick}>ulang lagi</button>
          </div>
        </div>
      </div>
    </div>
  );
}

function App() {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [audioStarted, setAudioStarted] = useState(false);
  const audioRef = useRef(null);
  useEffect(() => {
    const startAudioOnInteraction = () => {
      if (audioRef.current && !audioStarted) {
        audioRef.current
          .play()
          .catch((error) => console.log("Audio play error:", error));
        setAudioStarted(true);
        document.removeEventListener("click", startAudioOnInteraction); // Menghapus event listener setelah audio dimulai
      }
    };

    document.addEventListener("click", startAudioOnInteraction);

    return () => document.removeEventListener("click", startAudioOnInteraction);
  }, [audioStarted]);

  const cards = [
    <Awal key="awal" onClick={() => handleNextCard()} />,
    <Card1 key="card1" onClick={() => handleNextCard()} />,
    <Card2 key="card2" onClick={() => handleNextCard()} />,
    <Card3 key="card3" onClick={() => handleNextCard()} />,
    <Card31 key="card31" onClick={() => handleNextCard()} />,
    <Card32 key="card32" onClick={() => handleNextCard()} />,
    <Card33 key="card33" onClick={() => handleNextCard()} />,
    <Card4 key="card4" onClick={() => handleNextCard()} />,
    <Card5 key="card5" onClick={() => handleNextCard()} />,
    <Card6 key="card6" onClick={() => handleNextCard()} />,
    <Card7 key="card7" onClick={() => handleNextCard()} />,
  ];

  const handleNextCard = () => {
    setCurrentCardIndex((prevIndex) => (prevIndex + 1) % cards.length);
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="bg">
        <div className="ly">
          <div className="v">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
          <div className="h">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
          {cards[currentCardIndex]}
          <img src="/bintang.svg" id="str" className="bg-tings" />
          <img src="/bintang.svg" id="str" className="bg-tings" />
          <img src="/bintang.svg" id="str" className="bg-tings" />
          <img src="/stars.svg" id="strr" className="bg-tings" />
          <img src="/smile.svg" id="sml" className="bg-tings" />
          <img src="/love.svg" id="lv" className="bg-tings" />
        </div>
      </div>

      <audio ref={audioRef} src="/song.mp3" preload="auto" loop />
    </div>
  );
}

export default App;
