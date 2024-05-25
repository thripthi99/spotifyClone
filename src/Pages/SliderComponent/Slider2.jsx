import React from 'react'
import Slider2image from './Slider2image';
import "./SliderComponent.css";

const Slider2 = () => {
    return (
      <section id="slider2block">
        <article>
          <div className="leftblock2">
            <p>#SPOTIFYWRAPPED</p>
            <h2>
              2021 Wrapped is <br /> ready.
            </h2>

            <h4>
              But it’s only available in the Spotify app. <br />
              Download it now to discover more.
            </h4>
            <div>
              <span>
                <a>
                  <img
                    src="https://www-growth.scdn.co/static/badges/svgs/apple/badge-en.svg"
                    alt="googleplay"
                  />
                </a>
              </span>
              <span>
                <a>
                  <img
                    src="https://www-growth.scdn.co/static/badges/svgs/google/badge-en.svg"
                    alt="appstore"
                  />
                </a>
              </span>
            </div>
            <a href="">Listen to 2021 highlights here.</a>
          </div>

          <div className="rightblock2">{/* <Slider2image/>    */}</div>
        </article>
      </section>
    );
}

export default Slider2
