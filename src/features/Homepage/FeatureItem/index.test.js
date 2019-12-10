import React from 'react'
import { render, fireEvent } from '@testing-library/react'

import FeatureItem from './'

import { RS_APP_COMMANDS } from 'constants/commands'

jest.mock('hooks/useAppCommand', () => {
  return jest.fn().mockImplementation(() => {
    return {}
  })
})

describe('<FeatureItem />', () => {
  let wrapper, mockTitle, mockCommand, mockDate, mockDescription

  beforeEach(() => {
    mockTitle = 'Simple Hooks Counter'
    mockCommand = RS_APP_COMMANDS.viewCounter
    mockDate = 'May 22nd, 2019'
    mockDescription = 'Mock Description'

    wrapper = render(
      <FeatureItem title={mockTitle} command={mockCommand} date={mockDate} description={mockDescription} />
    )
  })

  it('should render without error with its expected props', () => {
    const { queryByTestId } = wrapper

    expect(queryByTestId('rs-featureItem-container')).toBeTruthy()
  })

  it('should render the title and created by date props in the card header', () => {
    const { queryByText } = wrapper

    expect(queryByText(mockTitle)).toBeTruthy()
    expect(queryByText(mockDate)).toBeTruthy()
  })

  it('should NOT display the item description by default', () => {
    // isExpanded state is set to false by default
    const { queryByTestId } = wrapper
    const ItemDescription = queryByTestId('rs-featureItem-collapse')
    expect(ItemDescription).toBeNull()
  })

  it('should display the item description when the expand icon button is clicked', () => {
    const { queryByText, queryByTestId } = wrapper
    const ExpandedIconButton = queryByTestId('rs-featureItem-expandIconBtn')

    expect(queryByText(mockDescription)).toBeNull()
    fireEvent.click(ExpandedIconButton)
    expect(queryByText(mockDescription)).toBeTruthy()
  })

  // @@@@@ fix test
  xit('should navigate to the route prop when the go to navigation button is clicked', () => {
    const { queryByTestId } = wrapper
    const NavigationIconButton = queryByTestId('rs-featureItem-navIconBtn')

    expect(mockNavigateTo).not.toHaveBeenCalled()
    fireEvent.click(NavigationIconButton)
    expect(mockNavigateTo).toHaveBeenCalledWith(mockRoute)
  })
})