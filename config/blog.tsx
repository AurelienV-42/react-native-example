import Experiences from 'assets/images/illustrations/experiencies.svg';
import mainStyles from 'config/sharedStyles/mainStyles';
import colors from 'config/sharedStyles/colors';
import Competencies from 'assets/images/illustrations/competencies.svg';
import CV from 'assets/images/illustrations/CV.svg';
import Education from 'assets/images/illustrations/education.svg';
import Hobbies from 'assets/images/illustrations/hobbies.svg';
import Trips from 'assets/images/illustrations/trips.svg';
import React from 'react';

export default {
  blogList: [
    {
      id: 'experiences',
      readingTime: 8,
      svg: (
        <Experiences
          style={{color: mainStyles.orange}}
          width={75}
          height={75}
        />
      ),
      mainColor: colors.orange,
      secondColor: colors.lightOrange,
    },
    {
      id: 'competencies',
      readingTime: 5,
      svg: (
        <Competencies
          style={{color: mainStyles.green}}
          width={75}
          height={75}
        />
      ),
      littleSvg: <CV />,
      mainColor: colors.green,
      secondColor: colors.lightGreen,
    },
    {
      id: 'education',
      readingTime: 5,
      svg: (
        <Education style={{color: mainStyles.blue}} width={75} height={75} />
      ),
      mainColor: colors.blue,
      secondColor: colors.lightBlue,
    },
    {
      id: 'hobbies',
      readingTime: 2,
      svg: (
        <Hobbies style={{color: mainStyles.purple}} width={75} height={75} />
      ),
      mainColor: colors.purple,
      secondColor: colors.lightPurple,
    },
    {
      id: 'trips',
      svg: <Trips style={{color: mainStyles.red}} width={75} height={75} />,
      mainColor: colors.red,
      secondColor: colors.lightRed,
    },
  ],
};
