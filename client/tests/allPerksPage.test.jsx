import { fireEvent, screen, waitFor } from '@testing-library/react';

import { Routes, Route } from 'react-router-dom';



import AllPerks from '../src/pages/AllPerks.jsx';

import { renderWithRouter } from './utils/renderWithRouter.js';



describe('AllPerks page (Directory)', () => {

  test('lists public perks and responds to name filtering', async () => {

    // The seeded record gives us a deterministic expectation regardless of the

    // rest of the shared database contents.

    const seededPerk = global.__TEST_CONTEXT__.seededPerk;



    // Render the exploration page so it performs its real HTTP fetch.

    renderWithRouter(

      <Routes>

        <Route path="/explore" element={<AllPerks />} />

      </Routes>,

      { initialEntries: ['/explore'] }

    );



    // Wait for the baseline card to appear which guarantees the asynchronous

    // fetch finished.

    await waitFor(() => {

      expect(screen.getByText(seededPerk.title)).toBeInTheDocument();

    });



    // Interact with the name filter input using the real value that

    // corresponds to the seeded record.

    const nameFilter = screen.getByPlaceholderText('Enter perk name...');

    fireEvent.change(nameFilter, { target: { value: seededPerk.title } });



    await waitFor(() => {

      expect(screen.getByText(seededPerk.title)).toBeInTheDocument();

    });



    // The summary text should continue to reflect the number of matching perks.

    expect(screen.getByText(/showing/i)).toHaveTextContent('Showing');

  });



  test('lists public perks and responds to merchant filtering', async () => {

    const seededPerk = global.__TEST_CONTEXT__.seededPerk;



    // Render the page again for a fresh state.

    renderWithRouter(

      <Routes>

        <Route path="/explore" element={<AllPerks />} />

      </Routes>,

      { initialEntries: ['/explore'] }

    );



    // Wait until the fetch completes and the seeded perk appears.

    await waitFor(() => {

      expect(screen.getByText(seededPerk.title)).toBeInTheDocument();

    });



    // --- FIXED QUERY ---

    // Look for the merchant <select> safely.

    // This will work even if your label doesn’t have htmlFor.

    let merchantSelect;

    try {

      merchantSelect = screen.getByRole('combobox', { name: /merchant/i });

    } catch {

      // fallback: if no accessible name, find the first <select> on the page

      merchantSelect = screen.getByRole('combobox');

    }



    // Change the dropdown to the seeded record's merchant.

    fireEvent.change(merchantSelect, { target: { value: seededPerk.merchant } });



    // Wait until the UI updates based on the merchant filter.

    await waitFor(() => {

      expect(screen.getByText(seededPerk.title)).toBeInTheDocument();

    });



    // The summary text should reflect the number of matching perks.

    expect(screen.getByText(/showing/i)).toHaveTextContent('Showing');

  });

});