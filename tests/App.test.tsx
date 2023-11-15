import { afterAll, afterEach, beforeEach, describe, expect, test, vi } from 'vitest';
import App from '../src/App';
import { cleanup, render, RenderResult, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import moviesData from './data/movies.json';
import koData from './data/ko.json';

function createFetchMoviesResponseOk() {
  return Promise.resolve({
    json: () => Promise.resolve(moviesData),
  });
}

function createFetchMoviesResponseKo() {
  return Promise.reject(koData);
}

let renderResult: RenderResult;
let searchInput: HTMLInputElement;
let button: HTMLButtonElement;
let listNodes;

describe('App root component', () => {
  beforeEach(() => {
    renderResult = render(<App />);
    expect(renderResult.getByText('FavFilms')).toBeDefined();
    searchInput = renderResult.getByRole('textbox');
    expect(searchInput).toBeDefined();
    const form = renderResult.getByRole('form');
    expect(form).toBeDefined();
    button = screen.getByRole('button');
    expect(button).toBeDefined();
    const list: HTMLUListElement = renderResult.getByRole('list');
    expect(list).toBeDefined();

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    listNodes = list.childNodes;
    expect(listNodes.length).toBe(0);
  });

  afterEach(() => {
    vi.resetAllMocks();
    cleanup();
  })

  test('Should search films', async () => {
    const user = userEvent.setup();

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    vi.spyOn(window, 'fetch').mockImplementationOnce(
      createFetchMoviesResponseOk,
    );
    await user.type(searchInput, 'Avengers');
    await user.click(button);
    expect(listNodes.length).greaterThan(0);
    expect(
      screen.getByText(`Resultados de la búsqueda: "Avengers"`),
    ).toBeDefined();
  });
  test('Should get error when searching films', async () => {
    const user = userEvent.setup();

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    vi.spyOn(window, 'fetch').mockImplementationOnce(
      createFetchMoviesResponseKo,
    );
    await user.type(searchInput, 'Avengers');
    await user.click(button);
    expect(listNodes.length).toBe(0);
    expect(screen.getByText(`No hay resultados para los filtros actuales :(`));
  });
});
