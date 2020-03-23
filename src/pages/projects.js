import React from "react"
import Zoom from "react-medium-image-zoom"
import "react-medium-image-zoom/dist/styles.css"

// import { Desktop, Tablet, Mobile } from "../components/media-query/media-query"
import { useMediaQuery } from "react-responsive"

import Layout from "../components/Layout/Layout"
import SEO from "../components/Seo/Seo"

/* Images */
import MorninBytes from "../images/MorninBytes.png"
import EzTicTacToe from "../images/EzTicTacToe1.png"
import Fate1 from "../images/FATE1.png"
import Fate2 from "../images/FATE2.jpg"
import EzFiller1 from "../images/EzFiller1.png"
import EzFiller2 from "../images/EzFiller2.png"
import EzFiller3 from "../images/EzFiller3.png"

const ProjectPage = () => {
  // const isMobile = useMediaQuery({ maxWidth: 767 })
  const isDesktop = useMediaQuery({ minWidth: 992 })
  const borderStyle = { border: "1px solid rgb(234, 234, 234)" }

  return (
    <Layout>
      <SEO title="Projects" />
      <div className="align-items-center d-flex flex-column mt-4">
        {/* EzFiller */}
        <div className="card project-container d-flex flex-wrap flex-row">
          <div className="col-sm-6">
            <h5 className="mb-3">EzFiller</h5>
            <div>
              <Zoom zoomMargin={isDesktop ? 250 : 0}>
                <img
                  src={EzFiller2}
                  alt="EzFiller list view"
                  width={isDesktop ? "370" : "275"}
                  style={borderStyle}
                />
              </Zoom>
            </div>
            <div>
              <Zoom zoomMargin={isDesktop ? 50 : 0}>
                <img
                  src={EzFiller1}
                  alt="EzFiller detailed view"
                  className="my-2"
                  width={isDesktop ? "125" : "100"}
                  style={borderStyle}
                />
              </Zoom>
              <span class="mr-3"></span>
              <Zoom>
                <img
                  src={EzFiller3}
                  alt="EzFiller in action"
                  className="my-2"
                  width={isDesktop ? "150" : "125"}
                />
              </Zoom>
            </div>
          </div>
          <div className="col-sm-6">
            <div class="mb-3">
              <code>Angular 8 - RxJS - Bootstrap 4</code>
            </div>
            <div class="mb-3">
              Chrome extension to quickly save and reload forms. The current
              selection of extensions on the Chrome store did not meet my needs
              of something that could get down and dirty without the clumbersome
              bloat of extra features, so I decided to ship my own solution.
            </div>
            <div>Soon to be published on the Chrome extensions store!</div>
          </div>
        </div>
        {/* MorninBytes */}
        <div className="card project-container d-flex flex-wrap flex-row">
          <div className="col-sm-6">
            <h5 className="mb-2">MorninBytes</h5>
            <Zoom>
              <img
                src={MorninBytes}
                alt="MorninBytes UI"
                className="my-2"
                width={isDesktop ? "350" : "250"}
              />
            </Zoom>
          </div>
          <div className="col-sm-6">
            <div class="mb-3">
              <code>WPF - MahApps - C# - .NET 4.6.1</code>
            </div>
            <div class="mb-3">
              MorninBytes is an efficiency-boosting desktop program designed to
              make morning routines more efficient. I found that I was opening
              the same websites/programs and doing the same tasks regularly for
              my morning routine, and wanted a tool that could automate it so
              most of that routine could be setup to be consumed visually with a
              few clicks. Particularly this will help with the forced shutdowns
              from Windows updates.
            </div>
            <div class="mb-3">
              Setup the programs &amp; websites you want to queue and click load
              to open everything conveniently!
            </div>
            <div class="mb-3">
              Future features are to include image downloads, and RSS scraping
              and parsing.
            </div>
          </div>
        </div>

        {/* EzTicTacToe */}
        <div className="card project-container d-flex flex-wrap flex-row">
          <div className="col-sm-6">
            <h5 className="mb-2">EzTicTacToe</h5>
            <Zoom zoomMargin={isDesktop ? 150 : 0}>
              <img
                src={EzTicTacToe}
                alt="EzTicTacToe"
                className="my-2"
                width={isDesktop ? "350" : "250"}
              />
            </Zoom>
          </div>
          <div className="col-sm-6">
            <div class="mb-3">
              <code>Node.js - Jquery</code>
            </div>
            <div>
              My first program made in Node.js to implement playing persistent
              games of Tic-Tac-Toe between players online. Chat room
              Functionality included so you can flame and crap-talk as required.
              Supports two players with a persistent scoreboard, additional
              clients can observe the game and talk in the chat room.
            </div>
          </div>
        </div>
        {/* FATE */}
        <div className="card project-container d-flex flex-wrap flex-row">
          <div className="col-sm-6">
            <h5 className="mb-2">FATE</h5>
            <div>
              <Zoom zoomMargin={isDesktop ? 50 : 0}>
                <img
                  src={Fate1}
                  alt="Playing a video"
                  className="my-2"
                  width={isDesktop ? "300" : "250"}
                />
              </Zoom>
            </div>
            <div>
              <Zoom zoomMargin={isDesktop ? 50 : 0}>
                <img
                  src={Fate2}
                  alt="CSV playlist input"
                  className="my-2"
                  width={isDesktop ? "300" : "250"}
                />
              </Zoom>
            </div>
          </div>
          <div className="col-sm-6">
            <div class="mb-3">
              <code>C# - .NET 4.5 - VLC API</code>
            </div>

            <div class="mb-3">
              FATE Video Scheduler program created for Animethon 2014/2015. Used
              to setup media rooms to play different schedules of anime shows,
              movies and ads for days without need for human management, outside
              of initial setup.
            </div>
            <div>
              <ul class="ml-n3">
                <li>Automated media playback, configured by CSV schedules</li>
                <li>
                  Able to open any media format supported by VLC, including
                  playing ads and static images inbetween shows
                </li>
                <li>
                  Extended user acceptance testing with Programming team for 2
                  weeks. Deployment during Animethon 2015 had 99% uptime with
                  only one reported case of human intervention needed due to
                  Unicode filename error
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default ProjectPage
