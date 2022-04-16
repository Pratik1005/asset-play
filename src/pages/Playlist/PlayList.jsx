import {NavMenu, VideoCard} from "../../components";

const PlayList = () => {
  return (
    <section className="app-ctn">
      <NavMenu />
      <div>
        <h2 className="pd-lg text-center">Your PlayList</h2>
        <div className="playlist-ctn">
          <div className="playlist">
            <h3 className="pd-sm">Playlist 1</h3>
            <div className="playlist-videos">
              <VideoCard
                caardData={{
                  thumbnail: thumbnail,
                  profile: profile,
                  title: "Dummy title",
                  creator: "warikoo",
                  views: "10000",
                  date: "May 10, 2022",
                  length: "20:22",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export {PlayList};
