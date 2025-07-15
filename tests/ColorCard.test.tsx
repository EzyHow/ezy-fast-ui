import { render, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import ColorCard from '../src/components/ColorCard';

describe('ColorCard', () => {
    it('displays hex and toggles lock', () => {
        const onClick = vi.fn();
        const onToggleLock = vi.fn();

        const { getByText } = render(
            <ColorCard
                color="#abcdef"
                locked={false}
                onClick={onClick}
                onToggleLock={onToggleLock}
            />
        );

        fireEvent.click(getByText('#abcdef'));
        expect(onClick).toHaveBeenCalled();

        fireEvent.click(getByText('🔓'));
        expect(onToggleLock).toHaveBeenCalled();
    });

    it('shows locked icon when locked is true', () => {
        const { getByText } = render(
            <ColorCard
                color="#123456"
                locked={true}
                onClick={() => { }}
                onToggleLock={() => { }}
            />
        );
        expect(getByText('🔒')).toBeInTheDocument();
    });
});
