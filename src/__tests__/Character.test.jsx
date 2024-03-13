import { render, screen } from '@testing-library/react';

import Characters from '@/components/Characters';

import { charactersMockData } from '@/data/dataCreators';
import { CountWrapper } from '@/context/countContext';
import { FavoriteWrapper } from '@/context/favoriteContext';

describe('Testing the Characters component', () => {
  it('renders all names correctly', () => {
    const firstName = charactersMockData.results[0].name;
    render(
      <FavoriteWrapper>
        <CountWrapper>
          <Characters
            characters={charactersMockData.results}
            count={charactersMockData.count}
          />
        </CountWrapper>
      </FavoriteWrapper>,
    );
    expect(screen.getByText(firstName)).toBeInTheDocument();
  });
});
