import React, { Component } from 'react';
import Glider from "./Glider";

class Gallery extends Component {
  
  render() {
   
    return (
      <div className='gallery'>
        <h2 className='gallery_name'>No-name gallery</h2>
        <Glider options={ 
          {
            type: 'carousel',
            startAt: 0,
            perView: 2,
            gap: 5
          }
        }>
          <img src='https://image.freepik.com/free-photo/teenager-student-girl-isolated-purple-wall-zen-pose_1368-91281.jpg' alt='girl' />
          <img src='https://image.freepik.com/free-photo/portrait-young-man-with-backpack-isolated_146377-798.jpg' alt='boy' />
          <img src='https://image.freepik.com/free-photo/young-woman-reading-book-home_144627-36960.jpg' alt='library' />
          <img src='https://image.freepik.com/free-photo/asian-boy-student-video-conference-e-learning-with-teacher-classmates-computer_73503-1994.jpg' alt='child' />
          <img src='https://image.freepik.com/free-photo/smiling-african-student-pointing-with-pencil-laptop-screen-concentrated-blonde-woman-glasses-propping-chin-with-hand-while-working-with-computer-office_197531-3714.jpg' alt='people' />
        </Glider>
        
      </div>
    );
  }
}

export default Gallery;
