import { vi, describe, expect, it, beforeEach, afterEach } from 'vitest'
import { QueryClient, QueryClientProvider, useQuery, useQueryClient } from '@tanstack/react-query'

describe("Footer", () => {
  it("displays the current year", () => {
    cy.visit("/"); // Replace with the URL of your application

    cy.get(".readTheDocs").should("contain", new Date().getFullYear());
  });
});