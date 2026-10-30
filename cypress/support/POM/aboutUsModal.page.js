class AboutUsModalPage {
  modalContainer = "#videoModal";
  videoPlayer = "#videoModal video";
  footerContainer = "#videoModal .modal-footer";

  verifyModalIsVisible() {
    cy.get(this.modalContainer).should("be.visible");
  }

  verifyModalIsClosed() {
    cy.get(this.modalContainer).should("not.be.visible");
  }

  clickCloseButton() {
    cy.get(this.footerContainer).contains("button", "Close").click();
  }

  // Logika interaksi HTML5 Video dipindah ke sini agar file tes tetap bersih
  testVideoControls() {
    cy.get(this.videoPlayer)
      .should("be.visible")
      .then(($video) => {
        const video = $video[0];

        video.play();
        expect(video.paused).to.be.false;

        video.pause();
        expect(video.paused).to.be.true;

        video.muted = true;
        expect(video.muted).to.be.true;

        video.muted = false;
        expect(video.muted).to.be.false;

        video.currentTime = 10;
        expect(video.currentTime).to.be.closeTo(10, 0.5);

        expect(typeof video.requestFullscreen).to.equal("function");
        if (document.pictureInPictureEnabled) {
          expect(typeof video.requestPictureInPicture).to.equal("function");
        }
      });
  }
}

export default AboutUsModalPage;
