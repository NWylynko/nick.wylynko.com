import React from 'react';
import { LinkHeaderText, HeaderText, BodyA, BodyText, SecondaryText} from './Text';
import { testComponent } from '../../utils/testComponent';

testComponent('Text/LinkHeaderText', <LinkHeaderText>testing</LinkHeaderText>, {_printing: false, _stats: false, _statsLoading: false})
testComponent('Text/LinkHeaderText', <LinkHeaderText>testing</LinkHeaderText>, {_printing: true, _stats: false, _statsLoading: false})

testComponent('Text/HeaderText', <HeaderText>testing</HeaderText>, {_printing: true, _stats: false, _statsLoading: false})

testComponent('Text/BodyA', <BodyA>testing</BodyA>, {_printing: true, _stats: false, _statsLoading: false})

testComponent('Text/BodyText', <BodyText>testing</BodyText>, {_printing: true, _stats: false, _statsLoading: false})

testComponent('Text/SecondaryText', <SecondaryText>testing</SecondaryText>, {_printing: true, _stats: false, _statsLoading: false})
