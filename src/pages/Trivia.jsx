import { useContext, useState } from "preact/hooks";
import useSound from "use-sound";
import { ConfigContext } from "../ConfigProvider";

import Lottie from "lottie-react";
import goldenCongrats from "../assets/lottie_json/golden_congrats.json";

import LogoHeader from "../components/Trivia/LogoHeader";
import SpinnerWheel from "../components/Trivia/SpinnerWheel";
import PanelFooter from "../components/Trivia/PanelFooter";

export default function Trivia() {
  const { soundOn, setSoundOn, points, images, sounds, texts } =
    useContext(ConfigContext);
  const { backgroundApp, iconSoundActive, iconSoundMute, bubbleStartMessage, bubbleDailyLimit, idolGolden } =
    images;
  const { muteButton } = sounds;
  const { congratsTriviaCompleted } = texts;

  /* ------ */
  const [mutePop] = useSound(muteButton);
  const [rouletteDisable, setRouletteDisable] = useState(false);
  const [triviaCompleted, setTriviaCompleted] = useState(false);

  function handleSpinDisable(spinDisable) {
    setRouletteDisable(spinDisable);
  }

  function handleTriviaCompleted(triviaDisable) {
    setTriviaCompleted(triviaDisable);
  }

  function handleSound() {
    // let context = new AudioContext();
    const contextAudio = new AudioContext();
    contextAudio.resume();
    mutePop();
    setSoundOn(!soundOn);
  }

  return (
    <div className="app-trivia">
      <div className="background-image-container">
        <img
          className="background-image"
          src={backgroundApp}
          alt="Image BackGround Trivia Maradona"
        />
      </div>

      <LogoHeader page={"home"} />

      <div className="sound-controls ">
        <button className="mute-control" aria="switch" onClick={handleSound}>
          {soundOn ? (
            <img src={iconSoundActive} alt="Icon Sound Active" />
          ) : (
            <img src={iconSoundMute} alt="Icon Sound Mute" />
          )}
        </button>
      </div>

      <SpinnerWheel
        onSpinDisable={handleSpinDisable}
        onTriviaCompleted={handleTriviaCompleted}
      />

      {triviaCompleted && (
        <div className="pop-up-fireworks hid">
          <h3 className="golden-congrats">{congratsTriviaCompleted}</h3>
          <Lottie
            animationData={goldenCongrats}
            loop={true}
            style={{
              width: 300,
              height: 300,
            }}
          />
          <img
            className="idol-golden"
            src={idolGolden}
            alt="Image Idol Trivia Completed"
          />
        </div>
      )}

      {!points && (
        <div className="bubble-message-wrapper">
          <img src={bubbleStartMessage} alt="Bubble Initial Message To Start" />
        </div>
      )}

      {rouletteDisable && (
        <div className="bubble-daily-limit-wrapper">
          <img
            src={bubbleDailyLimit}
            alt="Bubble Message Daily Limit Reached"
          />
        </div>
      )}

      <PanelFooter />
    </div>
  );
}
