// Cookie Checker
/* function getCookie(name){
    const cookieDecoded = decodeURIComponent(document.cookie)
    const cookieArray = cookieDecoded.split("; ")
    let result

    cookieArray.forEach(element => {
        if(element.indexOf(name) == 0){
            result = element.substring(name.length + 1)
        }
    })

    return result
}

let cookieChecker = setInterval(() => {
    if (getCookie("musicCardAccess") !== "granted"){
        clearInterval(cookieChecker)
        document.getElementById("popup-notifications").style.height = "100%"
    }
}, 1000) */

//Page Arrays
const artistInfo = [
    {
        artistName: 'Franco Emil',
        artistFacebook: 'null',
        artistInstagram: "https://www.instagram.com/emilofwhyjuly/",
        artistYouTube: "null",
        artistSpotify: "https://open.spotify.com/artist/7JfZtzHmNbSESvy7xMz6Li?si=5OMoXTi5TT-cEU_AUtc9BQ",
        artistDesc: 'Franco Emil is a music producer, composer, and guitarist whose wide musical taste ranges from the classical and folk to the eclectic sounds of jazz, pop, and electronica. His influences developed from his artistry for film score, sound design, and exploration of collaborations among artists with varied backgrounds. Apart from this, his is also the lead guitarist and one of the composers and arrangers of the band Why July. He debuted his first instrumental, lo-fi album “My Side” in 2021 and his latest solo release is an EP entitled “Here I Am”.',
        artistImage: 'media/profile-frilan4r1o2h3.jpg'
    },
    {
        artistName: "nel.",
        artistFacebook: "null",
        artistInstagram: "https://www.instagram.com/jnenbn/",
        artistYouTube: "null",
        artistSpotify: "null",
        artistDesc: 'nel. creates a space for delving into the beauty of raw honesty and vulnerability of human emotions, inviting listeners to confront and embrace parts of themselves they cannot grasp. Her narratives paint depths of suppressing and expressing one’s self while creating a connection with her listeners, as if conversing with them through art.',
        artistImage: 'media/profile-neell6z2g0k0.jpg'    
    },
    {
        artistName: "nel.",
        artistFacebook: "null",
        artistInstagram: "https://www.instagram.com/jnenbn/",
        artistYouTube: "null",
        artistSpotify: "null",
        artistDesc: 'nel. creates a space for delving into the beauty of raw honesty and vulnerability of human emotions, inviting listeners to confront and embrace parts of themselves they cannot grasp. Her narratives paint depths of suppressing and expressing one’s self while creating a connection with her listeners, as if conversing with them through art.',
        artistImage: 'media/profile-neell6z2g0k0.jpg'    
    }
]

const cardInfo = {
    cardDesc: "Franco Emil's first music card released exclusively during akosimusic's beta launch.",
    cardRelease: '2024 April 1',
    cardRarity: 'Limited',
    cardSubRarity: 'Beta Test Exclusive',
    cardCount: '12',
}

const trackInfo = [
    {
        trackName: "Candy",
        cardImage: "media/card-candy.png",
        audioFile: "media/audio-candy.mp3",
        trackLyrics: "Writing this on a breezy Friday<br>Typing this on my keyboard, it's my way<br>Just a taste and my heart start beating<br>Bursting colors in my room and I'm seeing<br>Strawberry skies<br>Candy castle in your eyes<br>Looking good in that pretty red sweater<br>I ain't SUGA but I'm dreaming<br>I bet it's like a candy<br>It's so sweet<br>Like a glazed lollipop<br>I want it<br>Your smile is like soda pop<br>So bubbly<br>Sugar rush inside me<br>Makes me so happy<br>Candy<br>It's so sweet<br>Like it's made of honey<br>I want it<br>Butterflies around me<br>I'm carefree<br>Sugar rush inside me<br>My sweet Candy<br>I hope you know<br>You're beautiful just as you are<br>Can't get enough of this fantasy<br>My Vanellope<br>I'm like a kid in this arcade<br>But how does it feel<br>To be loved by someone like you<br>I wanna know, or maybe no<br>Gummy bears, M&Ms, and everything nice<br>It's like a<br>Candy<br>It's so sweet<br>Like a glazed lollipop<br>I want it<br>Your smile is like soda pop<br>So bubbly<br>Sugar rush inside me<br>Makes me so happy<br>It's so sweet<br>I want it<br>I'm carefree<br>My sweet Candy<br>I bet it's like a candy<br>It's so sweet<br>Like a glazed lollipop<br>I want it<br>Your smile is like soda pop<br>So bubbly<br>Sugar rush inside me<br>Makes me so happy<br>Candy<br>It's so sweet<br>Like it's made of honey<br>I want it<br>Butterflies around me<br>I'm carefree<br>Sugar rush inside me<br>My sweet Candy<br>"
    },
    {
        trackName: "gone",
        cardImage: "media/card-gone.png",
        audioFile: "media/audio-gone.mp3",
        trackLyrics: "Heard that one before<br>But you're giving me the dirty signs<br>You've got me losing track of time<br><br>I manifested a different vibe<br>I feel like I'm the chosen one<br>to put up with the things you've done<br><br>Never knew that this has been going on for far too long<br>cause you've been far, long... gone<br><br>She's been long gone<br>She belonged to me<br>Never belonged to you<br><br>What have you done?<br>Gone…<br><br>You're giving me an overloading type of pain<br>that I cannot explain<br>Fed me lies and give it all (drowning me with tears all night)<br>Now I'm stuck here calling you my home<br><br>I manifested a different vibe<br>all this time<br>Cursed myself with the things you've done<br><br>Can't decide (you are mine)<br>Tell me lies but you can't hide<br>Got you giving up your mind<br><br>Never knew that this has been going on for far too long<br>cause you've been far, long... gone<br><br>She's been long gone<br>She belonged to me<br>Never belonged to you<br><br>What have you done?<br>Gone…<br>"
    },
    {
        trackName: "drift",
        cardImage: "media/card-drift.png",
        audioFile: "media/audio-drift.mp3",
        trackLyrics: "Baby, are you still with me?<br>We never meet even as we speak<br>Mmm<br>Lately, I’m feeling lonely<br>And this time we feel, the distance is real<br>Mmmm<br><br>Under the moonlit sky, your presence calms my mind<br>The sea of emotions drives our minds tonight<br><br>We’re swimming in the thoughts of wishing that this won’t be ending<br>Hiding the beats of our pulses as we catch our breathing<br>Oh, the sun will be rising and we will be parting our ways<br>Wishing we’d still stay, stay part of…<br>Baby, do you hear me?<br>It feels surreal that we’re standing right here<br>Mmmm<br>‘Cause lately, you scare me<br>Oh my dear, did the spark disappear?<br>Mmm<br><br>Under the moonlit sky, I wanna be by your side<br>The sea of our mem’ries holds our hearts tonight<br>We’re riding on the hopes of wishing that this won’t be ending<br>Hiding our deepest feelings and thoughts that we keep in<br>We’re driving on the road t’wards losing our minds and our feelings<br>Keeping our precious mem’ries and treasure their meanings<br>Oh, holding our gaze, do you want to rephrase the promises we made?<br>But I won’t do ‘nother round, let’s stop fooling around<br>Still, you stay<br>"
    }
]

//Track Index
let trackIndex = 0

function trackIndexChecker() {
    if (trackIndex > (trackInfo.length - 1)){
        trackIndex = 0
    } else if (trackIndex < 0){
        trackIndex = 2
    }
}

//Artist Profile Set Up
const artistFacebookBtn = document.getElementById("artist-facebook")
const artistInstagramBtn = document.getElementById("artist-instagram")
const artistSpotifyBtn =  document.getElementById("artist-spotify")
const artistYouTubeBtn = document.getElementById("artist-youtube")

const artistProfileDesc = document.getElementById('artist-profile-desc')
const artistProfilePhoto = document.getElementById('artist-profile-photo')
const artistProfileName = document.getElementById('artist-profile-name')

function createArtistProfile() {
    artistProfilePhoto.src = artistInfo[trackIndex].artistImage
    artistProfileName.innerHTML = artistInfo[trackIndex].artistName
    artistProfileDesc.innerHTML = artistInfo[trackIndex].artistDesc

    if (artistInfo[trackIndex].artistFacebook !== "null"){
        artistFacebookBtn.addEventListener("click", () => {
            window.open(artistInfo[trackIndex].artistFacebook, '_blank')
        })
    } else {
        artistFacebookBtn.style.display = "none"
    }
    
    if (artistInfo[trackIndex].artistInstagram !== "null"){
        artistInstagramBtn.addEventListener("click", () => {
            window.open(artistInfo[trackIndex].artistInstagram, '_blank')
        })
    } else {
        artistInstagramBtn.style.display = "none"
    }
    
    if (artistInfo[trackIndex].artistSpotify !== "null"){
        artistSpotifyBtn.addEventListener("click", () => {
            window.open(artistInfo[trackIndex].artistSpotify, '_blank')
        })
    } else {
        artistSpotifyBtn.style.display = "none"
    }
    
    if (artistInfo[trackIndex].artistYouTube !== "null"){
        artistYoutubeBtn.addEventListener('click', () => {
            window.open(artistInfo[trackIndex].artistYouTube, '_blank')
        })
    } else {
        artistYouTubeBtn.style.display = "none"
    }
}
//Page Rename
function updatePageName() {
    document.title = trackInfo[trackIndex].trackName + " - " + artistInfo[trackIndex].artistName
}

//Page Reference
const userKeysValues = document.referrer
const urlParams = new URLSearchParams(userKeysValues)
const cardSerialNo = urlParams.get('utm_content')

//Update Lyrics
const lyricsTitleText = document.getElementById("lyrics-title")
const lyricsContentText = document.getElementById("lyrics-script")

function updateLyrics() {
    lyricsTitleText.innerHTML = trackInfo[trackIndex].trackName + " Lyrics"
    lyricsContentText.innerHTML = trackInfo[trackIndex].trackLyrics
}

//Card Variables
const cardDescText = document.getElementById("card-desc-text")
const cardReleaseText = document.getElementById("card-release-text")
const cardRarityText = document.getElementById("card-rarity-text")
const cardSubRarityText = document.getElementById("card-subrarity-text")
const cardCountText = document.getElementById("card-count-text")

//Menu Buttons
const openMenuBtn = document.getElementById("open-menu-btn")
const closeMenuBtn = document.getElementById("close-menu-btn")

openMenuBtn.addEventListener("click", () => {
    document.getElementById("overlay-menu").style.height = "100%"
})

closeMenuBtn.addEventListener("click", () => {
    document.getElementById("overlay-menu").style.height = "0%"
})

const menuLearnMoreBtn = document.getElementById("menu-learn-more-btn")
const menuFeedbackForm = document.getElementById("error-form-btn")
const menuErrorForm = document.getElementById("feedback-form-btn")
const menuFacebookBtn = document.getElementById("menu-facebook-btn")
const menuInstaBtn = document.getElementById("menu-instagram-btn")

menuLearnMoreBtn.addEventListener("click", () => {
    window.open('https://akosimusic.online/', '_blank')
})

menuFeedbackForm.addEventListener('click', () => {
    window.open('https://forms.gle/EmbsZnbbQ1pircfCA', '_blank')
})

menuErrorForm.addEventListener('click', () => {
    window.open('https://forms.gle/V5NemNrDmyu5JfPYA', '_blank')
})

menuFacebookBtn.addEventListener('click', () => {
    window.open('https://www.facebook.com/profile.php?id=61557189936848', '_blank')
})

menuInstaBtn.addEventListener('click', () => {
    window.open('https://www.instagram.com/akosimusic.ph/', '_blank')
})


// Music Player Controls
let isPlaying = false
let updateTimer

let currentTrack = document.getElementById("track-audio")
let trackProgress = document.getElementById("progress")
let currentTime = document.querySelector(".current-time")
let totalDuration = document.querySelector(".total-duration")

let playPauseBtn = document.querySelector(".playpause-track")
const nextTrackBtn = document.getElementById("next-track")
const previousTrackBtn = document.getElementById("previous-track")

const currentTrackName = document.getElementById("track-name")
const currentTrackArtst = document.getElementById("track-artist")
const currentTrackAudio = document.getElementById("track-audio")
const currentTrackCover = document.getElementById("card-front")

let seekSlider = document.querySelector(".seek-slider")

function reset(){
    currentTime.innerHTML = "00:00"
    totalDuration.innerHTML = "00:00"
    seekSlider.value = 0
    console.log("reset")
}

function loadTrack(track_index){
    clearInterval(updateTimer)
    reset()

    currentTrack.src = trackInfo[track_index].audioFile
    currentTrack.load()

    currentTrackCover.style.backgroundImage = "url(" + trackInfo[track_index].cardImage +")"
    currentTrackArtst.innerHTML = artistInfo[track_index].artistName
    currentTrackName.innerHTML = trackInfo[trackIndex].trackName

    updateTimer = setInterval(setUpdate, 1000)
    currentTrack.addEventListener("ended", nextTrack)
    console.log("loadTrack")
}

function playpauseTrack() {
    isPlaying ? pauseTrack() : playTrack()
}

function playTrack(){
    currentTrack.play()
    isPlaying = true
    playPauseBtn.innerHTML = '<img class="icon-white" src="icons/pause-track.png">'
    console.log("play")
}

function pauseTrack(){
    currentTrack.pause()
    isPlaying = false
    playPauseBtn.innerHTML = '<img class="icon-white" src="icons/play-track.png">'
    console.log("pause")
}

function nextTrack(){
    trackIndex += 1
    trackIndexChecker()
    loadTrack(trackIndex)
    updatePageName()
    createArtistProfile()
    console.log("next")
    updateLyrics()
    playTrack()
}

let seekPosition = 0

function previousTrack(){
    trackIndex -= 1
    trackIndexChecker()
    loadTrack(trackIndex)
    updatePageName()
    createArtistProfile()
    console.log("previous")
    updateLyrics()
    playTrack()
}

function seekTo(){
    currentTrack.currentTime = seekSlider.value
    console.log("seekTo")
}

seekSlider.addEventListener('click', () => {
    seekTo()
    console.log('click-progress')
})

function setUpdate(){
    if (!isNaN(currentTrack.duration)){
        seekPosition = currentTrack.currentTime * (100 / currentTrack.duration);
        seekSlider.value = seekPosition;
    
        let currentMinutes = Math.floor(currentTrack.currentTime / 60);
        let currentSeconds = Math.floor(
          currentTrack.currentTime - currentMinutes * 60
        );
    
        let durationMinutes = Math.floor(currentTrack.duration / 60);
        let durationSeconds = Math.floor(
          (currentTrack.duration - durationMinutes * 60)
        );
    
        if (currentSeconds < 10) {
          currentSeconds = "0" + currentSeconds;
        }
        if (durationSeconds < 10) {
          durationSeconds = "0" + durationSeconds;
        }
        if (currentMinutes < 10) {
          currentMinutes = "0" + currentMinutes;
        }
        if (durationMinutes < 10) {
          durationMinutes = "0" + durationMinutes;
        }
    
        currentTime.textContent = currentMinutes + ":" + currentSeconds;
        totalDuration.textContent = durationMinutes + ":" + durationSeconds;
      }
    console.log("setUpdate")
}

//Page Load
window.onload = function(){
    cardDescText.innerHTML = cardInfo.cardDesc
    cardCountText.innerHTML = cardInfo.cardCount
    cardRarityText.innerHTML = cardInfo.cardRarity
    cardReleaseText.innerHTML = cardInfo.cardRelease
    if (cardInfo.cardSubRarity !== "null"){
        cardSubRarityText.innerHTML = cardInfo.cardSubRarity
    } else {
        cardSubRarityText.style.display = "none"
    }

    createArtistProfile()
    updatePageName()
    loadTrack(trackIndex)
    updateLyrics()
}

/* SINGLE TRACK CONTROLS
trackProgress.onchange = function(){
    currentTrack.play();
    
    playTrack()
}
*/

// Card Flip Buttons
const flipCard = document.getElementById("flip-card")
const cardFrontFlipBtn = document.getElementById("btn-front-flip")
const cardBackFlipBtn = document.getElementById("btn-back-flip")

cardFrontFlipBtn.addEventListener("click", () => {
    flipCard.classList.toggle("active")
} )

cardBackFlipBtn.addEventListener("click", () => {
    flipCard.classList.toggle("active")
} )

// Category Buttons
const artistCategoryBtn = document.getElementById("artist-category-btn")
const lyricsCategoryBtn = document.getElementById("lyrics-category-btn")
const supportCategoryBtn = document.getElementById("support-category-btn")

const artistCategoryContent = document.getElementById("artist-category-content")
const lyricsCategoryContent = document.getElementById("lyrics-category-content")
const supportCategoryContent = document.getElementById("support-category-content")

artistCategoryBtn.addEventListener("click", () => {
    if (artistCategoryBtn.classList.contains("category-btn-selected")){
        artistCategoryContent.classList.add("hidden-content")
        artistCategoryBtn.classList.remove("category-btn-selected")
    } else {
        lyricsCategoryContent.classList.add("hidden-content")
        supportCategoryContent.classList.add("hidden-content")
        artistCategoryContent.classList.remove("hidden-content")

        lyricsCategoryBtn.classList.remove("category-btn-selected")
        supportCategoryBtn.classList.remove("category-btn-selected")
        artistCategoryBtn.classList.add("category-btn-selected")
    }
})

lyricsCategoryBtn.addEventListener("click", () => {
    if (lyricsCategoryBtn.classList.contains("category-btn-selected")){
        lyricsCategoryContent.classList.add("hidden-content")
        lyricsCategoryBtn.classList.remove("category-btn-selected")
    } else {
        artistCategoryContent.classList.add("hidden-content")
        supportCategoryContent.classList.add("hidden-content")
        lyricsCategoryContent.classList.remove("hidden-content")

        artistCategoryBtn.classList.remove("category-btn-selected")
        supportCategoryBtn.classList.remove("category-btn-selected")
        lyricsCategoryBtn.classList.add("category-btn-selected")
    }
})

supportCategoryBtn.addEventListener("click", () => {

    if (supportCategoryBtn.classList.contains("category-btn-selected")){
        supportCategoryContent.classList.add("hidden-content")
        supportCategoryBtn.classList.remove("category-btn-selected")
    } else {
        artistCategoryContent.classList.add("hidden-content")
        lyricsCategoryContent.classList.add("hidden-content")
        supportCategoryContent.classList.remove("hidden-content")

        artistCategoryBtn.classList.remove("category-btn-selected")
        lyricsCategoryBtn.classList.remove("category-btn-selected")
        supportCategoryBtn.classList.add("category-btn-selected")
    }
})

// Support Section Buttons
const supportLearnMoreBtn = document.getElementById("support-learn-more-btn")
const supportCampaignBtn = document.getElementById("support-campaign-btn")

supportLearnMoreBtn.addEventListener('click', () => {
    window.open('https://akosimusic.online/', '_blank')
})

supportCampaignBtn.addEventListener('click', () => {
    window.open('https://fund.thesparkproject.com/project/akosi-music-melodies-with-real-stories', '_blank')
})

