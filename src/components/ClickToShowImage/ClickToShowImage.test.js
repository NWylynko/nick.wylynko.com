import React from 'react';
import { ClickToShowImage } from './ClickToShowImage';
import { testComponent } from '../../utils/testComponent';
import img from '../../img/img'

testComponent('ClickToShowImage', <ClickToShowImage overlay={<img src={img.projects.mininotes} alt="u clicked" />}><p>testing</p></ClickToShowImage>, {})
