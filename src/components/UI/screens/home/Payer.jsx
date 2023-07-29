import { useRef } from "react"
import ReactPlayer from "react-player"

const VideoPlayer = () => {

    // props - {src, ...props}
    // const ref = useRef()
    // const handlePlay = () => {
    //     ref.current.play()
    // }

    // const handlePause = () => {
    //     ref.current.pause()
    // }

    return (
        <div>
            <ReactPlayer loop={true}  url='https://www.youtube.com/watch?v=NDI6VaBqEqc&list=PLgqcofVzLrU_5yHhJZBjHtKKUktsuOosI&index=2' /> 
            
            {/* <video 
                src='https://www.youtube.com/watch?v=t0LECh9dfG4&pp=ygUFdGVzbGE%3D' 
                ref={ref} {...props} 
                width='400'
            /> */}
        </div>
    )
}

export default VideoPlayer

