import { SplitText } from "gsap-trial/SplitText";
import gsap from "gsap";
import { smoother } from "../Navbar";

export function initialFX() {
  document.body.style.overflowY = "auto";
  if (smoother) {
    try {
      smoother.paused(false);
    } catch (e) {
      console.warn("Smoother unpause warning:", e);
    }
  }

  const mainElem = document.getElementsByTagName("main")[0];
  if (mainElem) {
    mainElem.classList.add("main-active");
  }

  // Guarantee header and UI elements are visible
  gsap.to([".header", ".icons-section", ".nav-fade"], {
    opacity: 1,
    duration: 0.8,
    ease: "power1.inOut",
  });

  gsap.to("body", {
    backgroundColor: "#0b080c",
    duration: 0.5,
  });

  try {
    const landingIntro = document.querySelector(".landing-intro h1");
    if (landingIntro) {
      var landingText = new SplitText(
        [".landing-info h3", ".landing-intro h2", ".landing-intro h1"],
        {
          type: "chars,lines",
          linesClass: "split-line",
        }
      );
      if (landingText && landingText.chars) {
        gsap.fromTo(
          landingText.chars,
          { opacity: 0, y: 80, filter: "blur(5px)" },
          {
            opacity: 1,
            duration: 1.2,
            filter: "blur(0px)",
            ease: "power3.inOut",
            y: 0,
            stagger: 0.025,
            delay: 0.1,
          }
        );
      }
    }

    let TextProps = { type: "chars,lines", linesClass: "split-h2" };
    let landingText2: any = null;

    const h2Info = document.querySelector(".landing-h2-info");
    if (h2Info) {
      landingText2 = new SplitText(".landing-h2-info", TextProps);
      if (landingText2 && landingText2.chars) {
        gsap.fromTo(
          landingText2.chars,
          { opacity: 0, y: 80, filter: "blur(5px)" },
          {
            opacity: 1,
            duration: 1.2,
            filter: "blur(0px)",
            ease: "power3.inOut",
            y: 0,
            stagger: 0.025,
            delay: 0.1,
          }
        );
      }
    }

    gsap.fromTo(
      ".landing-info-h2",
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        duration: 1.2,
        ease: "power1.inOut",
        y: 0,
        delay: 0.3,
      }
    );

    var landingText3 = new SplitText(".landing-h2-info-1", TextProps);
    var landingText4 = new SplitText(".landing-h2-1", TextProps);
    var landingText5 = new SplitText(".landing-h2-2", TextProps);

    if (landingText2 && landingText3 && landingText2.chars && landingText3.chars) {
      LoopText(landingText2, landingText3);
    }
    if (landingText4 && landingText5 && landingText4.chars && landingText5.chars) {
      LoopText(landingText4, landingText5);
    }
  } catch (err) {
    console.warn("InitialFX text animation warning:", err);
  }
}

function LoopText(Text1: SplitText, Text2: SplitText) {
  if (!Text1?.chars?.length || !Text2?.chars?.length) return;
  var tl = gsap.timeline({ repeat: -1, repeatDelay: 1 });
  const delay = 4;
  const delay2 = delay * 2 + 1;

  tl.fromTo(
    Text2.chars,
    { opacity: 0, y: 80 },
    {
      opacity: 1,
      duration: 1.2,
      ease: "power3.inOut",
      y: 0,
      stagger: 0.1,
      delay: delay,
    },
    0
  )
    .fromTo(
      Text1.chars,
      { y: 80 },
      {
        duration: 1.2,
        ease: "power3.inOut",
        y: 0,
        stagger: 0.1,
        delay: delay2,
      },
      1
    )
    .fromTo(
      Text1.chars,
      { y: 0 },
      {
        y: -80,
        duration: 1.2,
        ease: "power3.inOut",
        stagger: 0.1,
        delay: delay,
      },
      0
    )
    .to(
      Text2.chars,
      {
        y: -80,
        duration: 1.2,
        ease: "power3.inOut",
        stagger: 0.1,
        delay: delay2,
      },
      1
    );
}
