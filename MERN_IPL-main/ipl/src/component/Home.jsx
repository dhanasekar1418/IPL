import News from "./News_home"
import Slideshow from "./Slideshow"
import VideoGallery from "./Videogallery"
import { Sponsors } from "./Sponsors"
export function Home(){
    return(<>
    <Slideshow/>
    <VideoGallery/>
    <Sponsors/>
    </>)
}