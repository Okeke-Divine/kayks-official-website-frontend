import React from "react";
import logo from "../../assets/images/logo.png";
import studioImage1 from "../../assets/images/autotune.webp";
import backgroundBeat from "../../assets/beats/Beat 122 [freestyle] [prod. kayks].mp3";

function ScrollToTop() {
  function __scroll_to_top_action() {
    window.scrollTo(10, 10);
  }

  return (
    <button
      onClick={__scroll_to_top_action}
      className="scroll_to_top flex_justify_center button_tertiary button_secondary_hover"
    >
      <i className="fa fa-angle-up"></i>
    </button>
  );
}

function BackgroundAudio() {
  return (
    <>
      <audio src={backgroundBeat} hidden={'true'}  autoPlay={true} loop={true}></audio>
    </>
  );
}

function MusicItem(props) {
  return (
    <>
      <div className="music_item_1">
        <div className="music_item_left">
          <div className="play_button_zone flex_justify_center">
            <button className="play_button flex_justify_center">
              <i className="fa fa-play"></i>
            </button>
          </div>
          <div className="beat_highlight">
            <div>Beat {props.beatnumer}</div>
            <div className="beat_artist">Prod Kayks x Jaxy</div>
          </div>
        </div>
        <div className="beat_time flex_justify_center">0:30</div>
      </div>
      <hr />
    </>
  );
}

export default function Homepage(props) {
  return (
    <>
      <div className="homepage_navbar">
        <div className="site_logo_nd_name">
          <div className="site_logo flex_justify_center">
            <img alt={props.SiteConfig.site_name + "'s logo"} src={logo} />
          </div>
          <div className="site_name flex_justify_center">Kayks</div>
        </div>
        <div className="site_navigations flex_justify_center">
          <a className="">Music Production</a>
          <a className="">Graphic Design</a>
          <a className="">Full Stack Web Developmet</a>
          <a className="">Contact Me</a>
        </div>
        <div className="navbar_buttons flex_justify_center">
          <button className="button_tertiary button_secondary_hover">
            Sign In
          </button>
          <BackgroundAudio />
        </div>
      </div>

      <br />
      <br />

      <section className="homepage_body">
        <section className="homepage_display1">
          <div className="left">
            <div className="hp_bannertext_main">Prod. Kayks</div>
            <div className="hp_bannertext_second">Expert Music Producer</div>
            <div className="hp_bannertext_third">
              Prod Kayks combines the core features of Fl Studio with his great
              spirit of inspiration to make cool and catchy beats for your next
              track.
            </div>
            <div className="hp_banner_button">
              <button className="banner_button button_primary button_primary_hover">
                Bye Now
              </button>
              <button className="banner_button button_secondary button_secondary_hover">
                Free Beats
              </button>
            </div>
            <div className="hp_banner_learn_more">
              <a href="#" className="link_primary link_primary_hover">
                Learn More <i className="fa fa-arrow-right"></i>
              </a>
            </div>
          </div>
          <div className="right flex_justify_center">
            <img
              className="studioImage1"
              alt="studioImage1"
              src={studioImage1}
            />
          </div>
        </section>
        <br />
        <br />
        <section className="musical_key_underliner">
          <div className="lx_line"></div>
        </section>
        <br />
        <section className="homepage_musical_keys">
          <div className="musical_key">C</div>
          <div className="musical_key key_sharp">C#</div>
          <div className="musical_key">D</div>
          <div className="musical_key key_sharp">D#</div>
          <div className="musical_key">E</div>
          <div className="musical_key">F</div>
          <div className="musical_key key_sharp">F#</div>
          <div className="musical_key">G</div>
          <div className="musical_key key_sharp">G#</div>
          <div className="musical_key">A</div>
          <div className="musical_key key_sharp">A#</div>
          <div className="musical_key">B</div>
        </section>
        <section className="musical_key_underliner">
          <div className="lx_line"></div>
        </section>
        <br />
        <br />

        <section className="homepage_beat_section my_section1">
          <div className="section_title"></div>
          
          <div>
            <i className="fa fa-home"></i>
            Filter
            <i className="fa fa-arrow-up"></i>
          </div>
          
          <div className="shadow shadow-sm">
            <div>

            </div>
            <div className="line-01"></div>
            <div>
              <div>
                <button>Reset</button>
                <button>Filter</button>
              </div>
            </div>
          </div>

          <div className="hp_beat_list">
            <MusicItem beatnumer="0010" />
            <MusicItem beatnumer="0099" />
            <MusicItem beatnumer="0234" />
            <MusicItem beatnumer="0436" />
          </div>
        </section>

        <br />
        <br />
      </section>

      <section className="homepage_footer">
        <div className="footer_top_section_flex">
          {/* <div className="footer_section_container">
            <div className="footer_section">
              <div className="footer_section_title">
                {props.SiteConfig.site_name}
              </div>
             <div className="footer_section_link">
                <a href="#">Facebook</a>
              </div>
              <div className="footer_section_link">
                <a href="#">Twitter</a>
              </div>
              <div className="footer_section_link">
                <a href="#">Youtube</a>
              </div>
              <div className="footer_section_link">
                <a href="#">Tiktok</a>
              </div>
              <div className="footer_section_link">
                <a href="#">Instagram</a>
              </div>
              <div className="footer_section_link">
                <a href="#">Email</a>
              </div>
            </div>
          </div> */}
          {/* <div className="footer_section_container">
            <div className="footer_section">
              <div className="footer_section_title">
                Services
              </div>
              <div className="footer_section_link">
                <a href="#">Beat Creation</a>
              </div>
              <div className="footer_section_link">
                <a href="#">Music mixing and mastering</a>
              </div>
              <div className="footer_section_link">
                <a href="#">Cover tune</a>
              </div>
              <div className="footer_section_link">
                <a href="#">Academic Request</a>
              </div>
            </div>
          </div> */}
        </div>
        <div className="footer_line"></div>
        <div>&copy;2022 Kayks Tech. All rights reserved.</div>
      </section>

      <button className="contact_me_sticky">
        <i className="fa fa-comment-alt"></i>
        Contact Me
      </button>

      <ScrollToTop />
    </>
  );
}
