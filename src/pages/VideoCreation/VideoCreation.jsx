import React from 'react'
import Card1 from '../../components/Card1'
import Card3 from '../../components/Card3'
import Wrapper from '../../components/Wrapper'

const VideoCreation = () => {
    return (
        <>
            <Wrapper>
                <div className='mb-20 m-auto'>

                    <h2 className='text-center text-xl my-5'>Select Your Video Theme</h2>
                    <div className='grid grid-cols-2 md:grid-cols-4 gap-3 m-auto'>
                        <Card3
                            title={"Podcast"}
                            texts={"Audio or video-based discussions often centered around specific topics, with minimal edits or stylized cuts. These can be more conversational or interview-driven"}
                            imgLink={"https://i.pinimg.com/736x/89/a4/0e/89a40e8cd46c45d3c894fc1845b849a2.jpg"}>

                        </Card3>
                        <Card3
                            title={"Documentry"}
                            texts={"In-depth storytelling videos, often with interviews, narrative arcs, and detailed research. Edits are focused on creating an engaging, informative experience"}
                            imgLink={"https://i.pinimg.com/736x/cf/d2/ef/cfd2ef0c45f7a0ad58c8e4f1a570f98f.jpg"}>

                        </Card3>
                        <Card3
                            title={"Motivational"}
                            texts={"Voiceover on motivational quoits to make the audience call on action"}
                            imgLink={"https://i.pinimg.com/736x/47/98/4c/47984c538c69a2c1ad6079464c09b093.jpg"}>

                        </Card3>
                        <Card3
                            title={"Vlog Video"}
                            texts={"Edited content featuring travel destinations, usually including scenic footage, time-lapses, and artistic transitions."}
                            imgLink={"https://i.pinimg.com/736x/16/04/80/16048019b2cb76cb91b721e4c31e876d.jpg"}>

                        </Card3>
                    </div>
                </div>
            </Wrapper>
        </>
    )
}

export default VideoCreation
