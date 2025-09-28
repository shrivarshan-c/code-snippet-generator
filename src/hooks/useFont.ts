"use client"
import { FontContext } from '@/context/FontSize';
import { useContext } from 'react';

export function useFonts()
{
    const ctx = useContext(FontContext);

    if(!ctx)
    {
        throw new Error("useTheme must be used within a Theme provider");
    }
    return ctx;
}
