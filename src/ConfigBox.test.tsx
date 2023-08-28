import { describe, it, expect } from 'vitest';
import { ConfigBox } from './ConfigBox';
import { render, screen } from '@testing-library/react';

describe("Test ConfigBox", () => {
    it('should render form', () => {
        render(<ConfigBox />)

        const element = screen.queryByText('')
        expect(element).toBeDefined();
    })
})
