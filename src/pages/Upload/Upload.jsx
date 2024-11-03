import "../../assets/partials/__global.scss";
import "../../assets/partials/typography.scss";
import "../../assets/partials/__variables.scss";
import "../../assets/partials/__mixins.scss";
import "./Upload.scss";
import UploadPreview from "../../assets/images/Upload-video-preview.jpg";
import Header from "../../components/Header/Header";

export default function Upload() {
  return (
    <>
      <Header></Header>
      <div className="upload">
        <h1 className="upload__heading">Upload Video</h1>
        <h2 className="upload__thumbnail-heading">VIDEO THUMBNAIL</h2>
        <div className="upload__container">
          <img
            className="upload__thumbnail-video"
            src={UploadPreview}
            alt="upload-video-preview"
          />
          <div className="upload__form">
            <div className="upload__form-title">
              <h3 className="upload__form-heading">TITLE YOUR VIDEO</h3>
              <input
                type="text"
                name="form-title-bar"
                id="form-title-bar"
                className="upload__form-title"
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Add a title to your video"
              />
            </div>
            <div className="upload__form-description">
              <h3 className="upload__form-heading">ADD A VIDEO DESCRIPTION</h3>
              <input
                type="text"
                name="form-description-bar"
                id="form-description-bar"
                className="upload__form-description"
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Add a description to your video"
              />
            </div>
            <div className="upload__options">
              <button className="upload__form-button">PUBLISH</button>
              <h3 className="upload__form-cancel">CANCEL</h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
