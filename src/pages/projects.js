import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Zoom from "react-medium-image-zoom"
import "react-medium-image-zoom/dist/styles.css"

// import { Desktop, Tablet, Mobile } from "../components/media-query/media-query"
import { useMediaQuery } from "react-responsive"

/* Images */
import morninbytes from "../images/MorninBytes.png"
import eztictactoe from "../images/EzTicTacToe1.png"
import fate1 from "../images/FATE1.png"
import fate2 from "../images/FATE2.jpg"

const ProjectPage = () => {
  // const isMobile = useMediaQuery({ maxWidth: 767 })
  const isDesktop = useMediaQuery({ minWidth: 992 })

  return (
    <Layout>
      <SEO title="Projects" />
      <div className="align-items-center d-flex flex-column mt-4">
        {/* Intro */}
        <div className="card project-container d-flex flex-wrap">
          For the source code of all this stuff (except FATE), check out my
          Github:&nbsp;
          <a
            href="https://github.com/peterghu"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://github.com/peterghu
          </a>
        </div>
        {/* MorninBytes */}
        <div className="card project-container d-flex flex-wrap flex-row">
          <div className="col-sm-6">
            <h5 className="mb-2">MorninBytes</h5>
            <Zoom>
              <img
                src={morninbytes}
                alt="MorninBytes UI"
                className="my-2"
                width={isDesktop ? "350" : "250"}
              />
            </Zoom>
          </div>
          <div className="col-sm-6">
            MorninBytes is an lazy-person efficiency-boosting program designed
            to make morning routines more efficient. I found that I was opening
            the same websites/programs and doing the same tasks regularly for my
            morning routine, and wanted a tool that could automate it so most of
            that routine could be setup to be consumed visually with a few
            clicks. This app will also help with the forced shutdowns from
            Windows updates.
            <br />
            <br />
            Made with WPF, MahApps, and C#, .NET 4.6.1 in Visual Studio 2017
          </div>
        </div>

        {/* EzTicTacToe */}
        <div className="card project-container d-flex flex-wrap flex-row">
          <div className="col-sm-6">
            <h5 className="mb-2">EzTicTacToe</h5>
            <Zoom>
              <img
                src={eztictactoe}
                alt="EzTicTacToe"
                className="my-2"
                width={isDesktop ? "350" : "250"}
              />
            </Zoom>
          </div>
          <div className="col-sm-6">
            A simple program made in Node.js (with Jquery on the frontend) for
            playing Tic-Tac-Toe with a chat room. Supports two players with a
            persistent scoreboard, additional clients can observe the game and
            talk in the chat room.
          </div>
        </div>
        {/* FATE */}
        <div className="card project-container d-flex flex-wrap flex-row">
          <div className="col-sm-6">
            <h5 className="mb-2">FATE</h5>
            <div>
              <Zoom>
                <img
                  src={fate1}
                  alt="Playing a video"
                  className="my-2"
                  width={isDesktop ? "300" : "250"}
                />
              </Zoom>
            </div>
            <div>
              <Zoom>
                <img
                  src={fate2}
                  alt="CSV playlist input"
                  className="my-2"
                  width={isDesktop ? "300" : "250"}
                />
              </Zoom>
            </div>
          </div>
          <div className="col-sm-6">
            <div>
              FATE Video Player program created for Animethon 2014/2015. Used
              for automated media streaming according to schedules that we
              created in CSV format.
            </div>
            <div className="mt-3">
              <ul>
                <li>Built with ASP.NET 4.0 and VLC API </li>
                <li>
                  Functionality included playing ads and static images inbetween
                  media content
                </li>
                <li>
                  There was an extended testing period with team from
                  Programming dept for ~2 weeks. Deployment during events
                  encountered no issues in unassisted runs during the day
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* EzFiller */}
        <div className="card project-container d-flex flex-wrap flex-row">
          <div className="col-sm-6">
            <h5 className="mb-2">EzFiller</h5>
          </div>
          <div className="col-sm-6">Chrome extension. TODO</div>
        </div>
      </div>
    </Layout>
  )
}

export default ProjectPage
