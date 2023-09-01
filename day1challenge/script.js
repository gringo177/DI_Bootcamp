class Video {
    constructor(title, uploader, time) {
      this.title = title;
      this.uploader = uploader;
      this.time = time;
    }
  
    watch() {
      console.log(`${this.uploader} watched all ${this.time} seconds of ${this.title}!`);
    }
  }
  

  const video1 = new Video("Funny Cats Compilation", "JohnDoe123", 300);
  
  video1.watch();
  
  const video2 = new Video("Travel Vlog in Paris", "Traveler87", 600);
  
  video2.watch();
  
  const videoData = [
    { title: "Gaming Highlights", uploader: "GamerPro456", time: 480 },
    { title: "Cooking Tutorial", uploader: "ChefMaster", time: 720 },
    { title: "Music Concert", uploader: "MusicLover", time: 1800 },
    { title: "DIY Home Improvement", uploader: "DIYEnthusiast", time: 900 },
    { title: "Nature Documentary", uploader: "NatureExplorer", time: 2400 },
  ];
  
  const videoInstances = videoData.map((data) => new Video(data.title, data.uploader, data.time));
  
  videoInstances.forEach((video) => video.watch());
  