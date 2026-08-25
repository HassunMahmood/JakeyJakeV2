import { useState } from 'react';

const moods = [
  { emoji: '🪿', name: 'Silly goose', color: '#c8ff55', copy: '72% chaos, 28% snack break.' },
  { emoji: '🕶️', name: 'Sad boy summer', color: '#8de7ff', copy: 'Put on a cardigan immediately.' },
  { emoji: '🌞', name: 'Golden retriever', color: '#ffe66d', copy: 'No thoughts, only immaculate vibes.' },
  { emoji: '🎨', name: 'Art school menace', color: '#ff8bd8', copy: 'One scarf and three cinema opinions.' },
];

const photos = [
  { url: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=900&q=85', caption: 'brooding but moisturised' },
  { url: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=900&q=85', caption: 'golden retriever energy' },
  { url: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=900&q=85', caption: 'paparazzi? in this economy?' },
];

const questions = [
  ['Pick a totally normal snack:', ['A suspiciously blue slushie', 'Popcorn for dinner', 'One elegant grape', 'Cheese in a pocket']],
  ['Your entrance music:', ['A dial-up modem remix', 'A power ballad', 'Birdsong at sunrise', 'The Macarena, obviously']],
  ['Choose your red-carpet accessory:', ['A tiny plastic star', 'Sunglasses indoors', 'A bedazzled flip phone', 'A feather boa with a job']],
];

function App() {
  const [mood, setMood] = useState(moods[0]);
  const [fans, setFans] = useState(80808);
  const [question, setQuestion] = useState(0);
  const [result, setResult] = useState('');

  function chooseAnswer(answer) {
    if (question < questions.length - 1) {
      setQuestion((current) => current + 1);
      return;
    }
    setResult(answer.includes('flip') ? 'The Bedazzled Flip Phone Era 📱' : 'The Macarena Renaissance 💃');
  }

  function resetQuiz() {
    setQuestion(0);
    setResult('');
  }

  return (
    <main className="site" style={{ '--mood': mood.color }}>
      <div className="ticker">★ BREAKING: JAKE IS STILL VERY HANDSOME ★ NO FURTHER QUESTIONS ★</div>

      <nav className="nav shell">
        <a className="logo" href="#top">J<span>★</span>KEY<br /><i>JAKE!</i></a>
        <div className="nav-links">
          <a href="#vibes">vibes</a>
          <a href="#scrapbook">scrapbook</a>
          <a href="#quiz">quiz me</a>
        </div>
        <button className="pill-button" onClick={() => setFans((count) => count + 1)}>
          join club ♡ <b>{fans.toLocaleString()}</b>
        </button>
      </nav>

      <section className="hero shell" id="top">
        <div className="hero-copy">
          <small className="eyebrow">✦ THE INTERNET'S MOST IMPORTANT FAN PAGE ✦</small>
          <h1>Jake<br /><em>Gyllenhaal</em><br /><span>fan club!!!</span></h1>
          <p>A lovingly unserious digital shrine to the man, the myth, the very good eyebrows.</p>
          <a className="cta" href="#vibes">enter the silly zone <span>→</span></a>
        </div>
        <div className="hero-art">
          <b className="burst">CERTIFIED<br /><strong>J A K E</strong><br />MOMENT</b>
          <figure className="hero-photo">
            <img src={photos[0].url} alt="Playful leading-man portrait" />
            <figcaption>📸 caught being iconic</figcaption>
          </figure>
          <b className="sticker">WOW!</b>
        </div>
      </section>

      <div className="ticker aqua">✿ welcome to the jake zone ✿ make some noise for the eyebrows ✿ do NOT take this seriously ✿</div>

      <section className="section shell" id="vibes">
        <small className="eyebrow">01 / VIBE CHECK</small>
        <h2>What flavour of Jake<br /><span>are you feeling?</span></h2>
        <div className="mood-layout">
          <div className="mood-buttons">
            {moods.map((item) => (
              <button
                className={`mood-choice ${mood.name === item.name ? 'active' : ''}`}
                key={item.name}
                onClick={() => setMood(item)}
              >
                <span>{item.emoji}</span>{item.name}
              </button>
            ))}
          </div>
          <article className="mood-card" style={{ background: mood.color }}>
            <div className="sparkle">✦ ✧ ✦</div>
            <div className="mood-emoji">{mood.emoji}</div>
            <h3>{mood.name}</h3>
            <p>{mood.copy}</p>
            <small>MOOD RING: EXTREMELY ACCURATE</small>
          </article>
        </div>
      </section>

      <section className="section shell" id="scrapbook">
        <div className="section-heading">
          <div>
            <small className="eyebrow">02 / THE SCRAPBOOK</small>
            <h2>Evidence of<br /><span>the slay.</span></h2>
          </div>
          <p className="side-note">A small collection of photographic proof. <b>Do not zoom in.</b></p>
        </div>
        <div className="gallery">
          {photos.map((photo, index) => (
            <figure className={`polaroid p${index + 1}`} key={photo.url}>
              <img src={photo.url} alt={photo.caption} />
              <strong>{photo.caption}</strong>
              <small>jake cam '00-ish</small>
            </figure>
          ))}
        </div>
      </section>

      <section className="quiz-section" id="quiz">
        <div className="quiz shell">
          <div className="quiz-title">
            <small className="eyebrow">03 / HIGHLY SCIENTIFIC QUIZ</small>
            <h2>Which Jake<br /><span>era are you?</span></h2>
            <div className="quiz-ball">?</div>
          </div>
          <article className="quiz-box">
            {result ? (
              <div className="result">
                <div className="result-icon">🎉</div>
                <small>YOUR OFFICIAL RESULT</small>
                <h3>{result}</h3>
                <button className="cta compact" onClick={resetQuiz}>take it again ↻</button>
              </div>
            ) : (
              <>
                <div className="progress">QUESTION {question + 1} / {questions.length}<span style={{ width: `${((question + 1) / questions.length) * 100}%` }} /></div>
                <h3>{questions[question][0]}</h3>
                <div className="answers">
                  {questions[question][1].map((answer) => (
                    <button className="answer" key={answer} onClick={() => chooseAnswer(answer)}>{answer}<span>→</span></button>
                  ))}
                </div>
              </>
            )}
          </article>
        </div>
      </section>

      <footer>
        <div className="footer-inner shell">
          <div className="logo inverse">J<span>★</span>KEY<br /><i>JAKE!</i></div>
          <p>made with glitter, questionable judgement<br />and a very powerful crush.</p>
          <div className="footer-sticker">bye 4 now<br />xoxo ✿</div>
        </div>
      </footer>
    </main>
  );
}

export default App;