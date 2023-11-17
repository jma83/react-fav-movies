import { afterEach, beforeEach, describe, expect, test, vi } from 'vitest';
import App from '../src/App';
import { cleanup, render, RenderResult, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';

let renderResult: RenderResult;
let searchInput: HTMLInputElement;
let button: HTMLButtonElement;
let secondaryButton: HTMLButtonElement;
let listNodes;
const route = '/liked';

describe('App root component - route for component LikedMovies', () => {
  beforeEach(async () => {
    renderResult = render(
      <MemoryRouter initialEntries={[route]}>
        <App />
      </MemoryRouter>,
    );
    expect(
      renderResult.getByText('Aún no hay peliculas en tus favoritas...'),
    ).toBeDefined();
    searchInput = renderResult.getByRole('textbox');
    expect(searchInput).toBeDefined();
    const form = renderResult.getByRole('form');
    expect(form).toBeDefined();
    button = screen.getByText('Buscar');
    secondaryButton = screen.getByText('Limpiar filtros');
    expect(button).toBeDefined();
    expect(secondaryButton).toBeDefined();
    const list: HTMLUListElement =
      await renderResult.findByLabelText('films-list');
    expect(list).toBeDefined();
    // @ts-expect-error
    listNodes = list.childNodes;
    expect(listNodes.length).toBe(0);
  });

  afterEach(() => {
    vi.resetAllMocks();
    cleanup();
  });

  test('Should get error when searching films', async () => {
    const user = userEvent.setup();

    const inputValue = 'Avengers';
    await user.type(searchInput, inputValue);
    await user.click(button);
    expect(listNodes.length).toBe(0);
    expect(
      screen.getByText(
        `No hay resultados para "${inputValue}" en tus me gusta`,
      ),
    );
    await user.click(secondaryButton);
    renderResult.getByText('Aún no hay peliculas en tus favoritas...');
  });
});
